import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Component
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";

const optionsArray = [
  [
    { value: "A", label: "Account Login & Recovery" },
    { value: "B", label: "Account Password" },
    { value: "C", label: "Account Type" },
  ],
  [
    { value: "A", label: "Account Access" },
    { value: "B", label: "Account Password" },
    { value: "C", label: "Account Status" },
  ],
];

const popularGuides = [
  { label: "I Can't Log In", link: "/#" },
  { label: "I Think My Account Has Been Compromised", link: "/#" },
  { label: "Recover Username or Reset Password", link: "/#" },
  { label: "Troubleshoot the Signup Activation Email", link: "/#" },
  { label: "Activate Account Notifications", link: "/#" },
  { label: "Manage Account Login and Profile", link: "/#" },
  { label: "Set Account Security Options", link: "/#" },
];

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string().min(1, { message: "Phone Number is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export function LinkContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-md px-4 py-8 sm:py-16 lg:px-6">
        <Heading
          level={2}
          className="mb-8 text-wrap text-3xl font-bold tracking-tight"
        >
          Contact Us
        </Heading>
        <div className="space-y-4">
          {optionsArray.map((options, index) => (
            <Select key={index} defaultValue="A">
              <SelectTrigger className="peer h-auto rounded-none border-0 border-b-2 py-2.5 text-base shadow-none focus:border-primary focus:ring-0 active:border-primary">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {options.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="border-b-2 border-none border-primary py-2.5"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          ))}
        </div>
        <Heading level={4} className="mb-5 mt-8 font-bold tracking-normal">
          Popular guides & tutorials
        </Heading>
        <ul className="space-y-3">
          {popularGuides.map((guide) => (
            <li key={guide.link}>
              <Link
                href={guide.link}
                className="font-semibold text-primary hover:underline"
              >
                {guide.label}
              </Link>
            </li>
          ))}
        </ul>
        <Heading level={4} className="mb-5 mt-8 font-bold tracking-normal">
          Didn&apos;t find what you&apos;re looking for?
        </Heading>
        <Form {...form}>
          <form
            className="mx-auto grid max-w-screen-md grid-cols-1 gap-8 sm:grid-cols-2"
            onSubmit={form.handleSubmit(onSubmit)}
            noValidate
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      className="h-auto bg-primary-200 p-2.5"
                      placeholder="Bonnie"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      className="h-auto bg-primary-200 p-2.5"
                      placeholder="Green"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="h-auto bg-primary-200 p-2.5"
                      placeholder="+ 12 345 6789"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="sm:col-span-2">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your message</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={6}
                        className="bg-primary-200 p-2.5"
                        placeholder="Leave a comment..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Text className="mt-4 text-sm text-muted-foreground">
                By submitting this form you agree to our{" "}
                <Link href="#" className="text-primary hover:underline">
                  terms and conditions
                </Link>{" "}
                and our{" "}
                <Link href="#" className="text-primary hover:underline ">
                  privacy policy
                </Link>{" "}
                which explains how we may collect, use and disclose your
                personal information including to third parties.
              </Text>
            </div>
            <Button
              type="submit"
              className="h-auto px-5 py-3 dark:text-dark-tremor-content-strong sm:w-fit"
            >
              Send message
            </Button>
          </form>
        </Form>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
