import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// Icons
import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { z } from "zod";

// Component
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import { Form } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Separator } from "~/components/ui/separator";
import Logo from "~/lib/assets/images/logo.svg";

const links = ["About", "Privacy Policy", "Licensing", "Contact"];
const socialMediaLinks = [
  { href: "/#", icon: FaFacebook },
  { href: "/#", icon: FaInstagram },
  { href: "/#", icon: FaTwitter },
  { href: "/#", icon: FaGithub },
  { href: "/#", icon: FaDribbble },
];

const formSchema = z.object({
  email: z.string(),
});

export function SocialMediaIcons() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <footer className="bg-background p-4 sm:p-6">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid lg:grid-cols-3">
          <Link href="/#" className="mb-4 flex items-center lg:mb-0">
            <Image
              src={Logo}
              className="mr-3 h-8 dark:invert"
              alt="Company Logo"
            />
          </Link>
          <ul className="mb-4 flex flex-wrap items-center text-sm text-muted-foreground lg:mb-0">
            {links.map((link, index) => (
              <li key={index}>
                <Link href="/#" className="mr-4 hover:underline md:mr-6 ">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex w-full max-w-sm lg:ml-auto">
                <div className="relative w-full">
                  <Label
                    htmlFor="email"
                    className="mb-2 hidden text-sm font-medium"
                  >
                    Email address
                  </Label>
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <HiMail className="my-auto size-5 text-muted-foreground" />
                  </div>
                  <Input
                    type="email"
                    id="email"
                    className="block h-auto w-full rounded-l-lg rounded-r-none border border-muted bg-primary-100 p-3 pl-10 text-sm dark:bg-muted "
                    placeholder="Your email"
                    required
                    {...form.register("email")}
                  />
                </div>
                <Button
                  type="submit"
                  className="h-auto rounded-l-none rounded-r-lg border border-primary bg-primary px-5 py-3 text-center text-sm hover:bg-primary/90 focus:ring-4 focus:ring-primary/90 dark:text-dark-tremor-content-strong dark:focus:ring-primary"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <Separator className="my-6 border-primary-300 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <Text className="text-sm text-muted-foreground sm:text-center">
            © 2022{" "}
            <Link href="/#" className="hover:underline">
              Company™
            </Link>
            . All Rights Reserved.
          </Text>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {socialMediaLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-muted-foreground/90 hover:text-tremor-content-strong dark:hover:text-dark-tremor-content-strong"
              >
                <link.icon className="size-5 " />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
