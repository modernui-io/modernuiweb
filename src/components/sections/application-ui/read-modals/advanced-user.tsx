import Image from "next/image";
import Link from "next/link";

import { FaDribbble, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { HiPencilAlt, HiTrash } from "react-icons/hi";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";

export function AdvancedUserReadModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Read user</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg bg-background p-4 shadow sm:p-5">
        <div className="mb-4 flex justify-between rounded-t sm:mb-5">
          <div className="text-lg md:text-xl">
            <div className="flex items-center">
              <Image
                width={100}
                height={100}
                alt="Helene avatar"
                src="https://github.com/shadcn.png"
                className="mr-2 size-12 rounded-full sm:mr-4"
              />
              <div>
                <h3 className="text-lg font-bold md:text-xl">Helene Engels</h3>
                <Text className="text-base text-gray-500 dark:text-gray-400">
                  Moderator
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4 grid gap-4 sm:mb-5 sm:grid-cols-2 sm:gap-6">
          <dl>
            <dt className="sr-only">Role</dt>
            <dd className="mb-2 flex items-center text-gray-500 dark:text-gray-400">
              <svg
                className="mr-1.5 size-4 text-gray-400 dark:text-gray-500"
                aria-hidden
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              Frontend Developer
            </dd>
            <dt className="sr-only">Location</dt>
            <dd className="mb-4 flex items-center text-gray-500 dark:text-gray-400 sm:mb-5">
              <svg
                className="mr-1.5 size-4 text-gray-400 dark:text-gray-500"
                aria-hidden
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              United States of America
            </dd>
            <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
              Email Adress
            </dt>
            <dd className="mb-4 font-medium sm:mb-5">helene@company.com</dd>
            <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
              Home Adress
            </dt>
            <dd className="mb-4 font-medium sm:mb-5">
              92 Miles Drive, Newark, NJ 07103, California, United States of
              America
            </dd>
            <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
              Phone Number
            </dt>
            <dd className="font-medium">+1234 567 890 / +12 345 678 </dd>
          </dl>
          <dl>
            <dt className="mb-2 font-semibold leading-none">Biography</dt>
            <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
              Hello, I&apos;m Helene Engels, USA Designer, Creating things that
              stand out, Featured by Adobe, Figma, Webflow and others, Daily
              design tips & resources, Exploring Web3.
            </dd>
            <dt className="mb-2 font-semibold leading-none">Social</dt>
            <dd className="inline-flex items-center space-x-1">
              <Link
                href="#"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <FaFacebook className="size-5" />
              </Link>
              <Link
                href="#"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <FaInstagram className="size-5" />
              </Link>
              <Link
                href="#"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <FaGithub className="size-5" />
              </Link>
              <Link
                href="#"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <FaDribbble className="size-5" />
              </Link>
            </dd>
          </dl>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Button size="lg" className="[&>span]:text-sm">
              <HiPencilAlt className="-ml-1 mr-1 size-5" />
              Edit
            </Button>
            <Button size="lg">Preview</Button>
          </div>
          <Button size="lg" className="inline-flex bg-red-500 [&>span]:text-sm">
            <HiTrash className="-ml-1 mr-1.5 size-5" />
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
