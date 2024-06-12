import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { HiPlus } from "react-icons/hi";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import { Form } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

const formSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
});

export function CreateUserModal() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create user</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg p-4 shadow sm:p-5">
        <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 sm:mb-5">
          <h3 className="text-lg font-semibold">Add new user</h3>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <div>
                <Label
                  htmlFor="username"
                  className="mb-2 block text-sm font-medium"
                >
                  Username
                </Label>
                <Input
                  id="username"
                  placeholder="username.example"
                  required
                  type="text"
                  {...form.register("username")}
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="name@company.com"
                  required
                  type="email"
                  {...form.register("email")}
                />
              </div>
              <div>
                <Label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  placeholder="•••••••••"
                  required
                  type="password"
                  {...form.register("password")}
                />
              </div>
              <div>
                <Label
                  htmlFor="confirm-password"
                  className="mb-2 block text-sm font-medium"
                >
                  Confirm password
                </Label>
                <Input
                  id="confirm-password"
                  placeholder="•••••••••"
                  required
                  type="password"
                  {...form.register("confirmPassword")}
                />
              </div>
            </div>
            <Button type="submit" className="[&>span]:text-sm">
              <HiPlus className="mr-1 size-4" />
              Add new user
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
