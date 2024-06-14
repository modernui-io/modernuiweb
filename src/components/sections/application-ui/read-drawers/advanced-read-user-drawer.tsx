import Image from "next/image";
import Link from "next/link";

import { X } from "lucide-react";
import { AiFillEye } from "react-icons/ai";
import {
  FaDribbble,
  FaEdit,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaSketch,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoLogoFigma } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { SiAdobeindesign, SiAdobexd } from "react-icons/si";
import { TbBriefcaseFilled } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { ScrollArea } from "~/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import Avatar from "~/lib/assets/images/avatar-3.png";

export function AdvancedReadUserDrawer() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <div className="m-5 text-center">
          <Button className="mb-2 mr-2 rounded-lg px-5 py-2.5 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
            Read User
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent className="w-fit">
        <ScrollArea>
          <div className="left-0 top-0 z-40 h-screen overflow-auto bg-background p-4 transition-transform dark:bg-muted-foreground/20">
            <div className="flex items-center justify-between">
              <DrawerTitle className="mb-4 flex items-center">
                <Image
                  className="size-12 rounded-full sm:mr-3"
                  src={Avatar}
                  alt="Helene avatar"
                />
                <div>
                  <Text
                    level={"xl"}
                    id="drawer-label"
                    className="mb-1 font-bold leading-none"
                  >
                    Helene Engels
                  </Text>
                  <Text level={"base"} className="text-muted-foreground">
                    helene@example.com
                  </Text>
                </div>
              </DrawerTitle>
              <DrawerClose asChild>
                <Button className="right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-muted-foreground hover:bg-muted-foreground/10 dark:hover:bg-muted-foreground/30 dark:hover:text-white">
                  <X className="size-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </DrawerClose>
            </div>
            <dl className="mt-5">
              <dt className="mb-2 font-semibold leading-none">Biography</dt>
              <dd className="mb-5 w-72 font-light text-muted-foreground sm:w-80">
                Hello, I&apos;m Helene Engels, USA Designer, Creating things
                that stand out, Featured by Adobe, Figma, Webflow and others,
                Daily design tips & resources, Exploring Web3.
              </dd>
              <dt className="mb-2 font-semibold leading-none">Social</dt>
              <dd className="mb-5 inline-flex items-center space-x-1">
                {[
                  {
                    icon: <FaFacebook className="mt-1.5 size-5" />,
                    content: "Facebook Profile",
                    span: "Facebook",
                  },
                  {
                    icon: <FaInstagram className="mt-1.5 size-5" />,
                    content: "Instagram Profile",
                    span: "Instagram",
                  },
                  {
                    icon: <FaGithub className="mt-1.5 size-5" />,
                    content: "Github Profile",
                    span: "Github",
                  },
                  {
                    icon: <FaDribbble className="mt-1.5 size-5" />,
                    content: "Dribbble Profile",
                    span: "Dribbble",
                  },
                ].map((socialMediaLink, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="rounded-lg px-2 text-muted-foreground hover:bg-muted-foreground/10 hover:text-secondary-foreground dark:hover:bg-muted-foreground/20 dark:hover:text-white"
                  >
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>{socialMediaLink.icon}</TooltipTrigger>
                        <TooltipContent>
                          {socialMediaLink.content}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <span className="sr-only">{socialMediaLink.span}</span>
                  </Link>
                ))}
              </dd>
              <dt className="mb-2 font-semibold leading-none">Role</dt>
              <dd className="mb-4 sm:mb-5">
                <span className="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-200 dark:text-primary-800">
                  <AiFillEye className="mr-1 size-3.5" />
                  Moderator
                </span>
              </dd>
              {[
                {
                  title: "Location",
                  icon: (
                    <HiLocationMarker className="mr-1.5 size-4 text-muted-foreground/60" />
                  ),
                  description: "United States of America",
                },
                {
                  title: "Job Title",
                  icon: (
                    <TbBriefcaseFilled className="mr-1.5 size-4 text-muted-foreground/60" />
                  ),
                  description: "Frontend Developer",
                },
                {
                  title: "Home Address",
                  icon: "",
                  description:
                    "92 Miles Drive, Newark, NJ 07103, California, United States of America",
                },
                {
                  title: "Phone Number",
                  icon: "",
                  description: "+1234 567 890 / +12 345 678",
                },
              ].map((link, index) => (
                <div key={index}>
                  <dt className="mb-2 font-semibold leading-none">
                    {link.title}
                  </dt>
                  <dd className="mb-4 flex w-72 items-center font-light text-muted-foreground sm:mb-5 sm:w-80">
                    {link.icon}
                    {link.description}
                  </dd>
                </div>
              ))}

              <dt className="mb-2.5 font-semibold leading-none">
                Software Skills
              </dt>
              <dd className="mb-4 flex items-center space-x-1 sm:mb-5">
                {[
                  {
                    title: "inDesign",
                    icon: <SiAdobeindesign className="mt-1.5 size-4" />,
                  },
                  {
                    title: "Sketch",
                    icon: <FaSketch className="mt-1.5 size-4" />,
                  },
                  {
                    title: "Figma",
                    icon: <IoLogoFigma className="mt-1.5 size-4" />,
                  },
                  {
                    title: "HTML",
                    icon: <TiHtml5 className="mt-1.5 size-4" />,
                  },
                  {
                    title: "Adobe XD",
                    icon: <SiAdobexd className="mt-1.5 size-4" />,
                  },
                ].map((link, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="rounded-lg px-2 text-muted-foreground hover:bg-muted-foreground/10 hover:text-secondary-foreground dark:hover:bg-muted-foreground/20 dark:hover:text-white"
                  >
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>{link.icon}</TooltipTrigger>
                        <TooltipContent>{link.title}</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <span className="sr-only">{link.title}</span>
                  </Link>
                ))}
              </dd>
              <dt className="mb-2 font-semibold leading-none">Languages</dt>
              <dd className="mb-4 font-light text-muted-foreground sm:mb-5">
                English, French, Spanish
              </dd>
            </dl>
            <div className="bottom-0 left-0 flex w-full justify-start space-x-4 px-4 pb-4">
              <Button className="inline-flex w-max items-center justify-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-primary-foreground focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
                <FaEdit className="-ml-1 mr-1 size-5" />
                Edit
              </Button>
              <Button
                variant={"outline"}
                className="inline-flex w-max items-center justify-center rounded-lg border border-muted-foreground/30 bg-background px-5 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-muted-foreground/30 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-muted-foreground/30 dark:border-muted-foreground/30 dark:bg-muted-foreground/20 dark:text-muted-foreground dark:hover:bg-muted-foreground/25 dark:hover:text-white dark:focus:ring-muted-foreground/25"
              >
                Preview
              </Button>
              <Button className="inline-flex w-max items-center justify-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-primary-foreground hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-500 dark:text-secondary-foreground dark:hover:bg-red-600 dark:focus:ring-red-900">
                <RiDeleteBin6Fill className="-ml-1 mr-1.5 size-5" />
                Delete
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}
