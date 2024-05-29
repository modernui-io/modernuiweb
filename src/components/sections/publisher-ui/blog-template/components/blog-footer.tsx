import React from "react";
import Link from "next/link";

import { Globe } from "lucide-react";

// Components Import
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

const BlogFooter = () => {
  interface ListData {
    label: string;
    href: string;
  }

  interface LinkData {
    name: string;
    data: ListData[];
  }

  const LinkData: LinkData[] = [
    {
      name: "COMPANY",
      data: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Brand Center", href: "#" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      name: "HELP CENTER",
      data: [
        { label: "Discord Server", href: "#" },
        { label: "Twitter", href: "#" },
        { label: "Facebook", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
    {
      name: "LEGAL",
      data: [
        { label: "Privacy Policy", href: "#" },
        { label: "Licensing", href: "#" },
        { label: "Terms", href: "#" },
      ],
    },
    {
      name: "COMPANY",
      data: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Brand Center", href: "#" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      name: "DOWNLOAD",
      data: [
        { label: "iOS", href: "#" },
        { label: "Android", href: "#" },
        { label: "Windows", href: "#" },
        { label: "MacOS", href: "#" },
      ],
    },
  ];

  //This icon is not available in Lucid/RadixUI
  const TwitterIcon = () => (
    <svg
      className="size-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="currentColor"
        d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
      />
    </svg>
  );

  // This icon is not available in Lucid/RadixUI
  const BallIcon = () => (
    <svg
      className="size-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
        clipRule="evenodd"
      />
    </svg>
  );

  // This icon is not available in Lucid/RadixUI
  const FacebookIcon = () => (
    <svg
      className="size-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 8 19"
    >
      <path
        fillRule="evenodd"
        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
        clipRule="evenodd"
      />
    </svg>
  );

  // This icon is not available in Lucid/RadixUI
  const GithubIcon = () => (
    <svg
      className="size-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const IconList = [
    { icon: <FacebookIcon /> },
    { icon: <TwitterIcon /> },
    { icon: <GithubIcon /> },
    { icon: <BallIcon /> },
  ];

  return (
    <footer className="bg-muted antialiased">
      <div className="md:{p-8 pb-0} lg:{p-10 pb-0} mx-auto max-w-screen-xl p-4 py-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {LinkData.map(({ name, data }, index) => (
            <div key={index}>
              <Text className="mb-6 text-sm font-medium uppercase">{name}</Text>
              <ul className="text-muted-foreground">
                {data.map(({ label, href }, index) => (
                  <li key={index} className="mb-4">
                    <Link href={href} className="hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="my-6 border-border sm:mx-auto lg:my-8" />
        <div className="text-center">
          <Link
            href="#"
            className="mb-5 flex items-center justify-center text-2xl font-semibold text-secondary-foreground"
          >
            <Globe className="mr-2 h-8" />
            ModernUI Web
          </Link>
          <span className="block text-center text-sm text-muted-foreground">
            © 2021-2022{" "}
            <Link href="#" className="hover:underline">
              ModernUI Web™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="mt-5 flex justify-center space-x-5">
            {IconList.map(({ icon }, index) => (
              <li key={index}>
                <Link
                  key={index}
                  href="#"
                  className="text-muted-foreground hover:text-secondary-foreground"
                >
                  {icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
