import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Separator } from "~/components/ui/separator";
//Images
import Logo from "~/lib/assets/images/logo.svg";
import Illustration from "~/lib/assets/images/register-ilustration.svg";

const countries = [
  { value: "US", label: "United States" },
  { value: "GE", label: "Germany" },
  { value: "FR", label: "France" },
  { value: "UK", label: "United Kingdom" },
];

const formSchema = z.object({
  email: z.string().email("This is not a valid email."),
  fName: z.string().min(1, { message: "Your name is required." }),
  country: z
    .string()
    .refine((val) => countries.some((country) => country.value === val), {
      message: "Invalid country selected",
    }),
  password: z.string().min(1, { message: "Password is required" }),
  acceptedTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
  emailNotification: z.boolean(),
});

export function IllustrationRegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      fName: "",
      country: "",
      password: "",
      acceptedTerms: false,
      emailNotification: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-20 lg:py-16">
        <div className="mx-auto w-full rounded-lg bg-background p-6 shadow dark:bg-muted sm:max-w-xl sm:p-8 lg:col-span-6">
          <Image src={Logo} alt="logo" className="mb-4" />
          <Heading
            level={3}
            className="mb-2 text-xl font-bold leading-none tracking-normal md:text-xl md:leading-none"
          >
            Create your Account
          </Heading>
          <Text className="items-center text-sm text-muted-foreground">
            Start your website in seconds. Already have an account?{" "}
            <Link href="#" className="font-medium text-primary hover:underline">
              Login here
            </Link>
            .
          </Text>
          <Form {...form}>
            <form
              className="mt-4 space-y-6 sm:mt-6"
              onSubmit={form.handleSubmit(onSubmit)}
              noValidate
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your email</FormLabel>
                      <FormControl>
                        <Input
                          className="h-auto bg-primary-200 p-2.5"
                          placeholder="name@modernui.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          className="h-auto bg-primary-200 p-2.5"
                          placeholder="e.g. Bonnie Green"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(value) => field.onChange(value)}
                          value={field.value}
                        >
                          <SelectTrigger className="h-auto bg-primary-200 py-2.5">
                            <SelectValue placeholder="Choose a country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Country</SelectLabel>
                              {countries.map((country) => (
                                <SelectItem
                                  key={country.value}
                                  value={country.value}
                                >
                                  {country.label}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
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
                          className="h-auto bg-primary-200 p-2.5"
                          placeholder="••••••••"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Separator />
              <Link
                href={"/#"}
                className="inline-flex w-full items-center justify-center rounded-lg border bg-background px-5 py-2.5 text-sm font-medium hover:bg-primary-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-200 dark:hover:bg-primary-200 dark:hover:text-white dark:focus:ring-primary-700"
              >
                <FcGoogle className="mr-2 size-5" />
                Sign up with Google
              </Link>
              <Link
                href={"/#"}
                className="inline-flex w-full items-center justify-center rounded-lg border bg-background px-5 py-2.5 text-sm font-medium hover:bg-primary-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-200 dark:hover:bg-primary-200 dark:hover:text-white dark:focus:ring-primary-700"
              >
                <FaApple className="mr-2 size-5 text-secondary-foreground" />
                Sign up with Apple
              </Link>
              <FormField
                control={form.control}
                name="acceptedTerms"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="mt-4 flex space-x-2">
                        <Checkbox
                          id="acceptedTerms"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="mt-1"
                        />
                        <Label
                          htmlFor="terms"
                          className="text-sm font-light text-muted-foreground"
                        >
                          By signing up, you are creating a Flowbite account,
                          and you agree to Modern UI{" "}
                          <Link
                            href={"/#"}
                            className="font-medium text-primary hover:underline"
                          >
                            Terms of Use
                          </Link>{" "}
                          and{" "}
                          <Link
                            href={"/#"}
                            className="font-medium text-primary hover:underline"
                          >
                            Privacy Policy
                          </Link>
                          .
                        </Label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="emailNotification"
                render={({ field }) => (
                  <FormItem className="items-center">
                    <FormControl>
                      <div className="mt-4 flex space-x-2">
                        <Checkbox
                          id="emailNotification"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <Label
                          htmlFor="terms"
                          className="text-sm font-light text-muted-foreground"
                        >
                          Email me about product updates and resources.
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
        </div>
        <div className="mr-auto place-self-center lg:col-span-6">
          <Image
            src={Illustration}
            className="mx-auto hidden lg:flex"
            alt="illustration"
          />
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
