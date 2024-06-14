import Image from "next/image";
import Link from "next/link";

// components
import * as MuiLayout from "~/components/layouts";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { AvatarGroup } from "~/components/ui/custom/avatar-group";
import { Heading } from "~/components/ui/custom/headings";
import { Ratings } from "~/components/ui/custom/ratings";
import { Text } from "~/components/ui/custom/text";
import PhoneDark from "~/lib/assets/images/phone-dark.png";
import PhoneLight from "~/lib/assets/images/phone-light.png";

const AppleIcon = () => (
  <svg
    aria-hidden="true"
    className="size-8 sm:size-10"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z" />
  </svg>
);

const PlayStoreIcon = () => (
  <svg
    aria-hidden="true"
    className="size-8 sm:size-10"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="m12.954 11.616 2.957-2.957L6.36 3.291c-.633-.342-1.226-.39-1.746-.016l8.34 8.341zm3.461 3.462 3.074-1.729c.6-.336.929-.812.929-1.34 0-.527-.329-1.004-.928-1.34l-2.783-1.563-3.133 3.132 2.841 2.84zM4.1 4.002c-.064.197-.1.417-.1.658v14.705c0 .381.084.709.236.97l8.097-8.098L4.1 4.002zm8.854 8.855L4.902 20.91c.154.059.32.09.495.09.312 0 .637-.092.968-.276l9.255-5.197-2.666-2.67z" />
  </svg>
);

export function PhoneMockupWithAppDownloadHero() {
  return (
    <MuiLayout.Section className="bg-background antialiased">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="text-center">
          <div>
            <Heading
              level={"mdDisplay"}
              className="font-extrabold leading-none tracking-tight sm:text-5xl lg:text-6xl"
            >
              Designing Interfaces:
              <span className="md:block">A User-Centered Approach</span>
            </Heading>
            <Text className="mt-4 text-base font-normal text-secondary-foreground sm:text-xl md:mx-auto md:max-w-3xl">
              This book covers the latest design principles and techniques,
              including responsive design, mobile interface design, and user
              research methodologies.
            </Text>
          </div>
          <div className="mx-auto mt-8 flex max-w-sm items-center justify-center gap-4">
            <Link
              href="#"
              title=""
              className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-2 py-3 text-left text-white hover:bg-primary-400 focus:outline-none focus:ring-4 focus:ring-gray-300  sm:w-auto sm:px-4"
              role="button"
            >
              <AppleIcon />
              <div className="ml-2.5">
                <span className="block text-xs font-normal leading-none">
                  Download on
                </span>
                <span className="block text-lg font-bold leading-tight">
                  AppStore
                </span>
              </div>
            </Link>
            <Link
              href="#"
              title=""
              className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-2 py-3 text-left text-white hover:bg-primary-400 focus:outline-none focus:ring-4 focus:ring-gray-300  sm:w-auto sm:px-4"
              role="button"
            >
              <PlayStoreIcon />
              <div className="ml-2.5">
                <span className="block text-xs font-normal leading-none">
                  Download on
                </span>
                <span className="block text-lg font-bold leading-tight">
                  Google Play
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="my-8 sm:my-16">
          <div className="relative mx-auto h-[600px] w-[300px] rounded-[2.5rem] border-[14px] border-gray-800">
            <div className="absolute left-[-17px] top-[72px] h-[32px] w-[3px] rounded-l-lg bg-gray-800 "></div>
            <div className="absolute left-[-17px] top-[124px] h-[46px] w-[3px] rounded-l-lg bg-gray-800 "></div>
            <div className="absolute left-[-17px] top-[178px] h-[46px] w-[3px] rounded-l-lg bg-gray-800 "></div>
            <div className="absolute right-[-17px] top-[142px] h-[64px] w-[3px] rounded-r-lg bg-gray-800 "></div>
            <div className="h-[572px] w-[272px] overflow-hidden rounded-[2.5rem] bg-white ">
              <Image
                src={PhoneLight}
                className="h-[572px] w-[272px] dark:hidden"
                alt=""
              />
              <Image
                src={PhoneDark}
                className="hidden h-[572px] w-[272px] dark:block"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 sm:mt-8 sm:gap-6">
          <AvatarGroup>
            {Array.from({ length: 4 }).map((_, i) => (
              <Avatar key={i}>
                <AvatarImage
                  src={`https://xsgames.co/randomusers/assets/avatars/female/${i}.jpg`}
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ))}
          </AvatarGroup>
          <div className="h-8 w-px bg-primary-200"></div>
          <div>
            <Ratings rating={5} variant="yellow" totalStars={5} size={16}>
              <p className="ml-2 text-xs font-medium text-secondary-foreground">
                5.0
              </p>
            </Ratings>
            <Text className="mt-1 text-sm font-normal text-secondary-foreground">
              Rated Best Over&nbsp;
              <span className="font-semibold text-foreground">15.7k</span>
              &nbsp;Reviews
            </Text>
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
