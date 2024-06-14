import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { z } from "zod";

import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import { Form } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  biography: z.string().optional(),
});

export function UpdateUserForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "Helene",
      lastName: "Engels",
      password: "",
      confirmPassword: "",
      biography:
        "Hello, I'm Helene Engels, USA Designer, Creating things that stand out, Featured by Adobe, Figma, Webflow and others, Daily design tips & resources, Exploring Web3.",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto px-4 py-8 lg:py-16">
        <Text className="mb-4 text-xl font-bold">Update user</Text>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            action="#"
            className="mt-4 flex max-w-full"
          >
            <div className="grid w-full gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="w-full">
                <Label className="mb-2 block text-sm font-medium">
                  First Name
                </Label>
                <Input
                  type="text"
                  id="first-name"
                  className="block h-auto w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="First Name"
                  required
                  {...form.register("firstName")}
                />
              </div>
              <div className="w-full">
                <Label className="mb-2 block text-sm font-medium">
                  Last Name
                </Label>
                <Input
                  type="text"
                  id="last-name"
                  className="block h-auto w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Last Name"
                  required
                  {...form.register("lastName")}
                />
              </div>
              <div className="w-full">
                <Label className="mb-2 block text-sm font-medium">
                  Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  className="block h-auto w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="•••••••••"
                  required
                  {...form.register("password")}
                />
              </div>
              <div className="w-full">
                <Label className="mb-2 block text-sm font-medium">
                  Confirm Password
                </Label>
                <Input
                  type="password"
                  id="confirm-password"
                  className="block h-auto w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="•••••••••"
                  required
                  {...form.register("confirmPassword")}
                />
              </div>

              <div className="sm:col-span-2">
                <Label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium"
                >
                  Biography
                </Label>
                <Textarea
                  rows={8}
                  id="description"
                  className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Your description here"
                  {...form.register("biography")}
                ></Textarea>
              </div>
              <Button className="mx-auto ml-0 mt-2 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-primary-foreground">
                Add user
              </Button>
            </div>
          </form>
        </Form>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
