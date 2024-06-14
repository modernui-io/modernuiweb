import Image from "next/image";
import Link from "next/link";

import { Heart, ShoppingCart } from "lucide-react";

//component imports
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import IMacDark from "~/lib/assets/images/imac-front-dark.svg";
import IMac from "~/lib/assets/images/imac-front.svg";

const ProductDetail = () => {
  return (
    <section className="bg-background py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="mx-auto max-w-md shrink-0 lg:max-w-lg">
            <Image className="w-full dark:hidden" src={IMac} alt="iMac" />
            <Image
              className="hidden w-full dark:block"
              src={IMacDark}
              alt="iMac"
            />
          </div>
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <Heading level={3} className="font-semibold tracking-normal">
              Apple iMac 24&#34; All-In-One Computer, Apple M1, 8GB RAM, 256GB
              SSD, Mac OS, Pink
            </Heading>
            <div className="mt-4 sm:flex sm:items-center sm:gap-4">
              <Text className="text-2xl font-extrabold text-secondary-foreground sm:text-3xl">
                $1,249.99
              </Text>
              <div className="mt-2 flex items-center gap-2 sm:mt-0">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className="size-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                  ))}
                </div>
                <Text className="text-sm font-medium leading-none text-muted-foreground">
                  (5.0)
                </Text>
                <Link
                  href="#"
                  className="text-sm font-medium leading-none text-secondary-foreground underline hover:no-underline"
                >
                  345 Reviews
                </Link>
              </div>
            </div>
            <div className="mt-6 sm:mt-8 sm:flex sm:items-center sm:gap-4">
              <Link
                href="#"
                title="Add to favorites"
                className="flex items-center justify-center rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-200 "
                role="button"
              >
                <Heart className="-ms-2 me-2 size-5" />
                Add to favorites
              </Link>
              <Link
                href="#"
                title="Add to cart"
                className="mt-4 flex items-center justify-center rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 sm:mt-0"
                role="button"
              >
                <ShoppingCart className="-ms-2 me-2 size-5" />
                Add to cart
              </Link>
            </div>
            <hr className="my-6 border-primary-200 md:my-8" />
            <Text className="mb-6 text-muted-foreground">
              Studio quality three mic array for crystal clear calls and voice
              recordings. Six-speaker sound system for a remarkably robust and
              high-quality audio experience. Up to 256GB of ultrafast SSD
              storage.
            </Text>
            <Text className="text-muted-foreground">
              Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
              Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
              Magic Keyboard or Magic Keyboard with Touch ID.
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
