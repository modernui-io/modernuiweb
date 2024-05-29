import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  HiBell,
  HiChevronRight,
  HiClipboardList,
  HiCog,
  HiCollection,
  HiCurrencyDollar,
  HiEye,
  HiHeart,
  HiInbox,
  HiInboxIn,
  HiLightningBolt,
  HiLogout,
  HiMenuAlt2,
  HiOutlineChatAlt,
  HiSearch,
  HiShoppingBag,
  HiUserAdd,
  HiUserCircle,
  HiUsers,
  HiVideoCamera,
  HiViewGrid,
} from "react-icons/hi";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const formSchema = z.object({
  search: z.string(),
});

export function TabsNavbarApplicationShell() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-background">
        <nav className="px-4 py-2.5 dark:bg-gray-800 lg:px-6">
          <div className="flex w-full flex-wrap items-center justify-between">
            <div className="flex items-center justify-start">
              <Button
                variant={"ghost"}
                onClick={toggleSidebar}
                className="mr-2 cursor-pointer rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 md:hidden"
              >
                <HiMenuAlt2 className="size-5" />
                <span className="sr-only">Toggle sidebar</span>
              </Button>
              <a href="https://modernui.com" className="mr-4 flex">
                <Image
                  width={100}
                  height={100}
                  src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4"
                  className="mr-3 h-8 w-auto"
                  alt=""
                />
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                  ModernUI
                </span>
              </a>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="hidden lg:block lg:pl-2"
              >
                <Label htmlFor="topbar-search" className="sr-only">
                  Search
                </Label>
                <div className="relative mt-1 lg:w-96">
                  <div className="relative flex items-center">
                    <HiSearch className="absolute left-3 size-5 text-gray-500 dark:text-gray-400" />
                    <Input
                      id="simple-search"
                      placeholder="Search"
                      required
                      type="search"
                      className="pl-9"
                      {...form.register("search")}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="flex items-center gap-x-2 lg:order-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"ghost"}>
                    <span className="sr-only">View notifications</span>
                    <HiBell className="size-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <div className="block bg-gray-50 px-4 py-2 text-center text-base font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    Notifications
                  </div>
                  <div className="border-t dark:border-gray-600">
                    <Link
                      href="#"
                      className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                    >
                      <div className="shrink-0">
                        <Image
                          width={100}
                          height={100}
                          className="size-11 rounded-full"
                          src="https://github.com/shadcn.png"
                          alt=""
                        />
                        <div className="absolute -mt-5 ml-6 flex size-5 items-center justify-center rounded-full border border-white bg-primary-700 dark:border-gray-700">
                          <HiInbox className="size-3 text-white" />
                        </div>
                      </div>
                      <div className="w-full pl-3">
                        <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                          New message from&nbsp;
                          <span className="font-semibold">Bonnie Green</span>:
                          &quot;Hey, what&apos;s up? All set for the
                          presentation?&quot;
                        </div>
                        <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                          a few moments ago
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                    >
                      <div className="shrink-0">
                        <Image
                          width={100}
                          height={100}
                          className="size-11 rounded-full"
                          src="https://github.com/shadcn.png"
                          alt=""
                        />
                        <div className="absolute -mt-5 ml-6 flex size-5 items-center justify-center rounded-full border border-white bg-gray-900 dark:border-gray-700">
                          <HiUserAdd className="size-3 text-white" />
                        </div>
                      </div>
                      <div className="w-full pl-3">
                        <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Jese Leos</span>
                          &nbsp;and&nbsp;
                          <span className="font-medium">5 others</span>
                          &nbsp;started following you.
                        </div>
                        <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                          10 minutes ago
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                    >
                      <div className="shrink-0">
                        <Image
                          width={100}
                          height={100}
                          className="size-11 rounded-full"
                          src="https://github.com/shadcn.png"
                          alt=""
                        />
                        <div className="absolute -mt-5 ml-6 flex size-5 items-center justify-center rounded-full border border-white bg-red-600 dark:border-gray-700">
                          <HiHeart className="size-3 text-white" />
                        </div>
                      </div>
                      <div className="w-full pl-3">
                        <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Joseph McFall</span>
                          &nbsp;and&nbsp;
                          <span className="font-medium">141 others</span>
                          &nbsp;love your story. See it and view more stories.
                        </div>
                        <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                          44 minutes ago
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                    >
                      <div className="shrink-0">
                        <Image
                          width={100}
                          height={100}
                          className="size-11 rounded-full"
                          src="https://github.com/shadcn.png"
                          alt=""
                        />
                        <div className="absolute -mt-5 ml-6 flex size-5 items-center justify-center rounded-full border border-white bg-green-400 dark:border-gray-700">
                          <HiOutlineChatAlt className="size-3 text-white" />
                        </div>
                      </div>
                      <div className="w-full pl-3">
                        <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">
                            Leslie Livingston
                          </span>
                          &nbsp;mentioned you in a comment:&nbsp;
                          <span className="font-medium text-primary-700 dark:text-primary-500">
                            @bonnie.green
                          </span>
                          &nbsp;what do you say?
                        </div>
                        <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                          1 hour ago
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <div className="shrink-0">
                        <Image
                          width={100}
                          height={100}
                          className="size-11 rounded-full"
                          src="https://github.com/shadcn.png"
                          alt=""
                        />
                        <div className="absolute -mt-5 ml-6 flex size-5 items-center justify-center rounded-full border border-white bg-purple-500 dark:border-gray-700">
                          <HiVideoCamera className="size-3 text-white" />
                        </div>
                      </div>
                      <div className="w-full pl-3">
                        <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Robert Brown</span>
                          &nbsp;posted a new video: Glassmorphism - learn how to
                          implement the new design trend.
                        </div>
                        <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                          3 hours ago
                        </div>
                      </div>
                    </Link>
                  </div>
                  <Link
                    href="#"
                    className="block border-t border-gray-200 bg-gray-50 py-2 text-center text-base font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:underline"
                  >
                    <div className="inline-flex items-center ">
                      <HiEye className="mr-2 size-5" />
                      View all
                    </div>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"ghost"}>
                    <span className="sr-only">View apps</span>
                    <HiViewGrid className="size-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <div className="block bg-gray-50 px-4 py-2 text-center text-base font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    Apps
                  </div>
                  <div className="grid grid-cols-3 gap-4 border-t p-4 dark:border-gray-600">
                    {[
                      {
                        icon: (
                          <HiShoppingBag className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                        ),
                        label: "Sales",
                      },
                      {
                        icon: (
                          <HiUsers className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                        ),
                        label: "Users",
                      },
                      {
                        icon: (
                          <HiInbox className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                        ),
                        label: "Inbox",
                      },
                      {
                        icon: (
                          <HiUserCircle className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                        ),
                        label: "Profile",
                      },
                      {
                        icon: (
                          <HiCog className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                        ),
                        label: "Settings",
                      },
                      {
                        icon: (
                          <HiInboxIn className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                        ),
                        label: "Products",
                      },
                      {
                        icon: (
                          <HiCurrencyDollar className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                        ),
                        label: "Pricing",
                      },
                      {
                        icon: (
                          <HiClipboardList className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                        ),
                        label: "Billing",
                      },
                      {
                        icon: (
                          <HiLogout className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                        ),
                        label: "Logout",
                      },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        {item.icon}
                        <div className="text-sm font-medium">{item.label}</div>
                      </Link>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"ghost"}>
                    <span className="sr-only">Open user menu</span>
                    <Image
                      width={100}
                      height={100}
                      className="size-8 rounded-full"
                      src="https://github.com/shadcn.png"
                      alt=""
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <div className="px-4 py-3">
                    <span className="block text-sm font-semibold">
                      Neil Sims
                    </span>
                    <span className="block truncate text-sm text-gray-500 dark:text-gray-400">
                      name@modernui.com
                    </span>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>My profile</DropdownMenuItem>
                  <DropdownMenuItem>Account settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <HiHeart className="mr-2 size-4 text-gray-400" />
                    My links
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <HiCollection className="mr-2 size-4 text-gray-400" />
                    Collections
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex w-full items-center justify-between">
                      <span className="flex items-center">
                        <HiLightningBolt className="mr-2 size-4 text-primary-600 dark:text-primary-500" />
                        Pro version
                      </span>
                      <HiChevronRight className="size-4 text-gray-400" />
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <ul className="py-1 text-gray-500 dark:text-gray-400">
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>

        <nav className="bg-gray-50 p-3 shadow-sm dark:bg-gray-800 lg:hidden">
          <Select name="navigation">
            <SelectTrigger>
              <SelectValue placeholder="My account" />
            </SelectTrigger>
            <SelectContent>
              {[
                { value: "company", label: "Company" },
                { value: "downloads", label: "Downloads" },
                { value: "earnings", label: "Earnings" },
                { value: "billing", label: "Billing" },
                { value: "help", label: "Help & Support" },
              ].map((item, index) => (
                <SelectItem key={index} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </nav>
      </header>

      <div className="hidden items-center justify-center bg-gray-50 py-5 pt-20 dark:bg-gray-900 lg:flex">
        <nav
          id="toggleMobileMenu"
          className="mx-auto block border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
        >
          <div className="flex items-center">
            <ul className="mt-0 flex w-full flex-col gap-5 text-sm font-medium lg:flex-row">
              {[
                { text: "My account", href: "#" },
                { text: "Company", href: "#", current: true },
                { text: "Downloads", href: "#" },
                { text: "Earnings", href: "#" },
                { text: "Billing", href: "#" },
                { text: "Help & Support", href: "#" },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <main className="flex-1 space-y-4 bg-background p-4 pt-32 lg:pt-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="h-96 flex-1 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600"
          ></div>
        ))}
      </main>
    </>
  );
}
