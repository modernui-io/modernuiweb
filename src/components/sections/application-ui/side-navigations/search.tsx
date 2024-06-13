import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  HiChartPie,
  HiChevronDown,
  HiCollection,
  HiDocumentText,
  HiInboxIn,
  HiLockClosed,
  HiMenuAlt2,
  HiOutlineLogout,
  HiQuestionMarkCircle,
  HiSearch,
  HiShoppingBag,
  HiX,
} from "react-icons/hi";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import { Text } from "~/components/ui/custom/text";
import { Input } from "~/components/ui/input";
import { Progress } from "~/components/ui/progress";

const formSchema = z.object({
  search: z.string(),
});

export function SearchSideNavigation() {
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
      <Button
        variant={"ghost"}
        onClick={toggleSidebar}
        className="ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <HiMenuAlt2 className="size-6" />
      </Button>

      <aside
        id="default-sidebar"
        className={`fixed left-0 top-0 z-40 h-screen w-64 bg-background transition-transform lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidenav"
      >
        <Button
          variant={"ghost"}
          onClick={toggleSidebar}
          className={`absolute right-5 top-5 px-0 lg:hidden ${!isSidebarOpen && "hidden"}`}
        >
          <HiX className="size-4" />
        </Button>
        <div className="h-full overflow-y-auto border-r border-gray-200 px-3 py-5 dark:border-gray-700">
          <Link
            href="https://modernui.com"
            className="mb-5 flex items-center pl-2"
          >
            <Image
              width={100}
              height={100}
              src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4"
              className="mr-3 h-6 w-auto sm:h-8"
              alt="ModernUI Logo"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold">
              ModernUI
            </span>
          </Link>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mb-3 flex items-center"
          >
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <HiSearch className="size-5 text-gray-500 dark:text-gray-400" />
              </div>
              <Input
                type="search"
                id="simple-search"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 py-5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Search"
                required
                {...form.register("search")}
              />
            </div>
          </form>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal"
              >
                <HiChartPie className="size-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">Overview</span>
              </Link>
            </li>
            <li>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button
                    variant={"ghost"}
                    className="group flex w-full items-center rounded-lg p-2 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <HiDocumentText className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />

                    <span className="ml-3 flex-1 whitespace-nowrap text-left">
                      Pages
                    </span>
                    <HiChevronDown className="size-6" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul id="dropdown-pages" className="space-y-2 py-2">
                    {[
                      { href: "#", label: "Settings" },
                      { href: "#", label: "Kanban" },
                      { href: "#", label: "Calendar" },
                    ].map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </li>
            <li>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button
                    variant={"ghost"}
                    className="group flex w-full items-center rounded-lg p-2 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <HiShoppingBag className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />

                    <span className="ml-3 flex-1 whitespace-nowrap text-left">
                      Sales
                    </span>
                    <HiChevronDown className="size-6" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul id="dropdown-sales" className="space-y-2 py-2">
                    {[
                      { href: "#", label: "Products" },
                      { href: "#", label: "Billing" },
                      { href: "#", label: "Invoice" },
                    ].map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </li>
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal"
              >
                <HiInboxIn className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3 flex-1 whitespace-nowrap">Messages</span>
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-800 dark:bg-primary-200 dark:text-primary-800">
                  6
                </span>
              </Link>
            </li>
            <li>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button
                    variant={"ghost"}
                    className="group flex w-full items-center rounded-lg p-2 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <HiLockClosed className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span className="ml-3 flex-1 whitespace-nowrap text-left">
                      Authentication
                    </span>

                    <HiChevronDown className="size-6" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul id="dropdown-authentication" className="space-y-2 py-2">
                    {[
                      { href: "#", label: "Sign In" },
                      { href: "#", label: "Sign Up" },
                      { href: "#", label: "Forgot Password" },
                    ].map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </li>
          </ul>
          <ul className="mt-5 space-y-2 border-t border-gray-200 pt-5 dark:border-gray-700">
            {[
              {
                icon: (
                  <HiDocumentText className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                ),
                label: "Docs",
              },
              {
                icon: (
                  <HiCollection className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                ),
                label: "Components",
              },
              {
                icon: (
                  <HiQuestionMarkCircle className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                ),
                label: "Help",
              },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="group flex items-center rounded-lg p-2 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 z-20 w-full justify-center p-4">
          <Text className="text-sm text-gray-500 dark:text-gray-400">
            Space left
          </Text>
          <div className="font-medium text-gray-900 dark:text-white">
            70 of 150 GB
          </div>
          <div className="mb-4 mt-2 h-2.5 w-full rounded-full">
            <Progress value={50} />
          </div>
          <Link
            href="#"
            className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            <HiOutlineLogout className="mr-1 size-5" />
            Upgrade to Pro
          </Link>
        </div>
      </aside>
    </>
  );
}
