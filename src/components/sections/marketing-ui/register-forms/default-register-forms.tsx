import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Component
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import Logo from "~/lib/assets/images/logo.svg";

const formSchema = z.object({
  email: z.string().email("This is not a valid email."),
  password: z.string().min(1, { message: "Password is required" }),
  confirmPassword: z.string().min(1, { message: "Password is required" }),
  acceptedTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

export function DefaultRegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      acceptedTerms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <Image src={Logo} alt="logo" className="mb-6" />
        <div className="w-full rounded-lg bg-background shadow dark:border sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <Heading level={3} className="mb-4 font-bold tracking-normal">
              Create an account
            </Heading>
            <Form {...form}>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          className="h-auto bg-primary-200 p-2.5"
                          placeholder="name@company.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          className="mb-2 h-auto bg-primary-200 p-2.5"
                          placeholder="••••••••"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          className="h-auto bg-primary-200 p-2.5"
                          placeholder="••••••••"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="acceptedTerms"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="mt-4 flex items-center space-x-2">
                          <Checkbox
                            id="terms"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                          <Label
                            htmlFor="terms"
                            className="text-sm text-muted-foreground"
                          >
                            I accept the{" "}
                            <Link
                              href={"/#"}
                              className="font-medium text-primary hover:underline"
                            >
                              Terms and Condition
                            </Link>
                          </Label>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="h-auto w-full px-5 py-3 dark:text-dark-tremor-content-strong"
                >
                  Create an account
                </Button>
              </form>
            </Form>
            <Text className="items-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href={"/#"}
                className="font-medium text-primary hover:underline"
              >
                Login here
              </Link>
            </Text>
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
