import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { z } from "zod";

import { Button } from "~/components/ui/button";
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

const formSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
  confirmPassword: z.string(),
});

export function UpdateUserDrawer() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "bonnie.green",
      email: "bonnie.green@company.com",
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
            Update user
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent className="w-fit">
        <div className="left-0 top-0 z-40 h-screen bg-white p-4 transition-transform dark:bg-muted-foreground/20">
          <div className="mt-14 flex items-center justify-between">
            <DrawerTitle className="mb-6 mt-4 inline-flex items-center text-sm font-semibold uppercase text-muted-foreground">
              Update User
            </DrawerTitle>
            <DrawerClose asChild>
              <Button className="right-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-muted-foreground hover:bg-muted-foreground/10 dark:hover:bg-muted-foreground/30 dark:hover:text-primary-foreground">
                <X className="size-5" />
              </Button>
            </DrawerClose>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} action="#">
              <div className="space-y-4">
                <div>
                  <Label className="mb-2 block text-sm font-medium">
                    Username
                  </Label>
                  <Input
                    type="text"
                    className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Username"
                    {...form.register("username")}
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
              </div>
            </form>
          </Form>
        </div>
        <div className="bottom-0 left-0 flex w-full justify-start space-x-4 p-4 dark:bg-muted-foreground/20">
          <Button className="w-max justify-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-primary-foreground focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
            Update User
          </Button>
          <DrawerClose asChild>
            <Button
              type="button"
              variant={"outline"}
              className="inline-flex items-center rounded-lg border-red-500 px-5 py-2.5 text-center text-sm font-medium text-red-500 hover:bg-red-500 hover:text-primary-foreground dark:bg-muted-foreground/20"
            >
              <RiDeleteBin6Fill className="size-6" />
              Delete
            </Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
