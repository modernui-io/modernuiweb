import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiCheckCircle } from "react-icons/hi";
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
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
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

const features = [
  {
    title: "Get started quickly",
    desc: "Integrate with developer-friendly APIs or choose low-code.",
  },
  {
    title: "Support any business model",
    desc: "Host code that you don't want to share with the world in private.",
  },
  {
    title: "Join millions of businesses",
    desc: "Modern UI is trusted by ambitious startups and enterprises of every size.",
  },
];

const countries = [
  { value: "US", label: "United States" },
  { value: "GE", label: "Germany" },
  { value: "FR", label: "France" },
  { value: "UK", label: "United Kingdom" },
];

const menu = [
  { label: "About", link: "/#" },
  { label: "Term & Condition", link: "/#" },
  { label: "Contact", link: "/#" },
];

const formSchema = z.object({
  email: z.string().email("This is not a valid email."),
  country: z
    .string()
    .refine((val) => countries.some((country) => country.value === val), {
      message: "Invalid country selected",
    }),
  password: z.string().min(1, { message: "Password is required" }),
  acceptedTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

export function AuthRegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      country: "",
      password: "",
      acceptedTerms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 lg:grid lg:grid-cols-12 lg:gap-20 lg:py-16">
        <div className="mr-auto hidden flex-col justify-between lg:col-span-5 lg:flex xl:col-span-6 xl:mb-0">
          <div>
            <Image src={Logo} alt="logo" className="mb-6 lg:mb-10" />
            <div className="space-y-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex">
                  <HiCheckCircle className="mr-2 size-5 text-primary" />
                  <div>
                    <Heading
                      level={3}
                      className="mb-2 text-xl font-bold leading-none tracking-normal md:text-xl md:leading-none"
                    >
                      {feature.title}
                    </Heading>
                    <Text className="mb-2 font-light text-muted-foreground">
                      {feature.desc}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <NavigationMenu className="flex-none">
            <NavigationMenuList className="flex space-x-4">
              {menu.map((menuItem) => (
                <NavigationMenuItem
                  key={menuItem.label}
                  className="text-sm text-muted-foreground hover:text-black hover:underline dark:hover:text-secondary-foreground"
                >
                  <Link href={menuItem.link} legacyBehavior passHref>
                    <NavigationMenuLink>{menuItem.label}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="mb-6 flex justify-center lg:hidden">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="mx-auto w-full rounded-lg bg-background shadow dark:bg-muted sm:max-w-lg md:mt-0 lg:col-span-7 xl:col-span-6 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 lg:space-y-6">
            <Heading level={3} className="mb-4 font-bold tracking-normal">
              Create your Free Account
            </Heading>
            <div className="items-center space-y-3 sm:flex sm:space-x-4 sm:space-y-0">
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
                Sign up with Google
              </Link>
            </div>
            <Separator />
            <Form {...form}>
              <form
                className="space-y-4 lg:space-y-6"
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
                <FormField
                  control={form.control}
                  name="acceptedTerms"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="mt-4 flex space-x-2">
                          <Checkbox
                            id="terms"
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
                Sign in here
              </Link>
            </Text>
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
