import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/custom/text";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { Form } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { ScrollArea } from "~/components/ui/scroll-area";
import Avatar from "~/lib/assets/images/avatar-3.png";

const formSchema = z.object({
  file: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  roles: z
    .object({
      administrator: z.boolean(),
      member: z.boolean(),
      viewer: z.boolean(),
    })
    .optional(),
});

export function AdvancedCreateUserDrawer() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      file: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      roles: {
        administrator: false,
        member: false,
        viewer: true,
      },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <div className="m-5 text-center">
          <Button className="mb-2 mr-2 rounded-lg px-5 py-2.5 text-sm font-medium text-primary-foreground focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
            Create user
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent className="w-fit">
        <ScrollArea>
          <div className="left-0 top-0 z-40 h-screen overflow-auto bg-white p-4 transition-transform dark:bg-muted-foreground/20">
            <div className="flex items-center justify-between">
              <DrawerTitle className="mb-6 inline-flex items-center text-sm font-semibold uppercase text-muted-foreground">
                New User
              </DrawerTitle>
              <DrawerClose asChild>
                <Button className="right-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-muted-foreground hover:bg-muted-foreground/10 dark:hover:bg-muted-foreground/30 dark:hover:text-primary-foreground">
                  <X className="size-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </DrawerClose>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} action="#">
                <div className="space-y-4">
                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Upload avatar
                    </Label>
                    <div className="w-full items-center">
                      <Image
                        className="mb-4 size-20 rounded-full sm:mb-0 sm:mr-4"
                        src={Avatar}
                        alt="Helene avatar"
                      />
                      <div className="w-full">
                        <Input
                          type="file"
                          className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          {...form.register("file")}
                          required
                        />
                        <Text
                          level={"xs"}
                          className="mt-1 font-normal text-muted-foreground"
                          id="file_input_help"
                        >
                          SVG, PNG, JPG or GIF (MAX. 800x400px).
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      First Name
                    </Label>
                    <Input
                      type="text"
                      className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="John"
                      {...form.register("firstName")}
                      required
                    />
                  </div>
                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Last Name
                    </Label>
                    <Input
                      type="text"
                      className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Doe"
                      {...form.register("lastName")}
                      required
                    />
                  </div>
                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      type="text"
                      className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Email"
                      required
                      {...form.register("email")}
                    />
                  </div>
                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Password
                    </Label>
                    <Input
                      type="password"
                      className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="•••••••••"
                      required
                      {...form.register("password")}
                    />
                  </div>
                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Confirm Password
                    </Label>
                    <Input
                      type="password"
                      className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="•••••••••"
                      required
                      {...form.register("confirmPassword")}
                    />
                  </div>

                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Assign Role
                    </Label>
                    <div className="space-y-3">
                      <div className="mr-4 flex flex-col space-y-1">
                        {[
                          { id: "inline-checkbox", label: "Administrator" },
                          { id: "inline-2-checkbox", label: "Member" },
                          {
                            id: "inline-checked-checkbox",
                            label: "Viewer",
                            defaultChecked: true,
                          },
                        ].map((item, index) => (
                          <div key={index} className="mr-4 flex items-center">
                            <Checkbox
                              id={item.id}
                              name="role"
                              defaultChecked={item.defaultChecked}
                            />
                            <Label
                              htmlFor={item.id}
                              className="ml-2 text-sm font-medium"
                            >
                              {item.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="left-0 flex w-full justify-start space-x-4 p-4">
                    <Button className="w-max justify-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-primary-foreground focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
                      Add User
                    </Button>
                    <DrawerClose asChild>
                      <Button className="inline-flex w-max items-center justify-center rounded-lg border border-muted-foreground/10 bg-white px-5 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted-foreground/30 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-muted-foreground/40 dark:bg-muted-foreground/20 dark:text-white dark:hover:bg-muted-foreground/30 dark:hover:text-primary-foreground dark:focus:ring-muted-foreground/30">
                        <X className="-ml-1 size-5 sm:mr-1" />
                        Close
                      </Button>
                    </DrawerClose>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}
