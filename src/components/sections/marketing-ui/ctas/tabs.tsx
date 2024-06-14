import Image from "next/image";
import Link from "next/link";

import { ArrowRight, ChevronRight, CircleCheck } from "lucide-react";

// Components Import
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
// Image Import
import Tab1 from "~/lib/assets/images/cta-tabs-1.png";
import Tab2 from "~/lib/assets/images/cta-tabs-2.png";
import MockupDark from "~/lib/assets/images/mockup-2-dark.png";
import Mockup from "~/lib/assets/images/mockup-2-light.png";

const iosKeyPoints = [
  "Continuous integration and deployment",
  "Development workflow",
  "Knowledge management",
];

const androidKeyPoint = [
  "Seamless integration with Android Studio",
  "Deployments with a click of a button",
  "Lightning fast performance",
];

const keyPoints = [
  "Dynamic reports and dashboards",
  "Templates for everyone",
  "Development workflow",
  "Limitless business automation",
  "Knowledge management",
];

const AppleIcon = () => (
  <svg
    aria-hidden
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-8"
  >
    <path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z" />
  </svg>
);

const AndroidIcon = () => (
  <svg
    aria-hidden
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-8"
  >
    <path d="M18.344 8.71c-.707 0-1.279.572-1.279 1.278v4.53a1.278 1.278 0 1 0 2.558 0v-4.53c0-.706-.572-1.278-1.279-1.278zm-12.688 0c-.707 0-1.279.572-1.279 1.278v4.53a1.278 1.278 0 1 0 2.558 0v-4.53A1.277 1.277 0 0 0 5.656 8.71zm8.889-3.809.768-1.388a.343.343 0 0 0-.133-.47.344.344 0 0 0-.471.135l-.789 1.42c-.588-.235-1.236-.368-1.92-.368s-1.332.132-1.92.367l-.789-1.418a.344.344 0 0 0-.471-.135.345.345 0 0 0-.133.47l.768 1.388C8.072 5.69 7.148 7.099 7.148 8.71c0 .011 0 .021.002.034-.002.006-.002.013-.002.019v.001h9.703V8.71c.001-1.611-.923-3.019-2.306-3.809zM9.76 6.869a.346.346 0 1 1 .005-.693.346.346 0 0 1-.005.693zm4.48 0a.347.347 0 0 1 0-.692.346.346 0 0 1 0 .692zM7.148 16.12c0 .646.525 1.171 1.174 1.171h.586v2.401a1.279 1.279 0 0 0 2.558 0v-2.401h1.066v2.401c0 .707.572 1.278 1.277 1.278.709 0 1.281-.571 1.281-1.278v-2.401h.586c.648 0 1.174-.524 1.174-1.171V9.028H7.148v7.092z" />
  </svg>
);

export function CTASectionWithTabsAndMobileApp() {
  return (
    <MuiLayout.Section className="bg-background antialiased">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <Tabs defaultValue="ios">
            <TabsList className="mb-4 bg-background">
              <TabsTrigger
                value="ios"
                className="relative mx-6 flex items-center justify-center"
              >
                <>
                  <span className="absolute -bottom-8 text-base font-medium text-muted-foreground">
                    ios
                  </span>
                  <AppleIcon />
                </>
              </TabsTrigger>
              <TabsTrigger
                className="relative mx-6 flex items-center justify-center"
                value="android"
              >
                <>
                  <span className="absolute -bottom-8 text-base font-medium text-muted-foreground">
                    Android
                  </span>
                  <AndroidIcon />
                </>
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="ios"
              className="mt-8 space-y-4 sm:space-y-6 lg:space-y-8"
            >
              <div>
                <Heading
                  level={2}
                  className=" text-wrap font-extrabold leading-tight sm:text-4xl"
                >
                  ModernUI Web in iOS: Take control of your finances with us
                </Heading>
                <Text className="mt-4 text-wrap text-base font-normal text-muted-foreground sm:text-lg">
                  Our app helps users easily track their expenses and create a
                  budget. With a user-friendly interface, the app allows users
                  to quickly input their income and expenses, and then
                  automatically categorizes them for easy tracking.
                </Text>
              </div>
              <div className="border-t border-border pt-4 sm:pt-6 lg:pt-8">
                <ul className="space-y-4">
                  {iosKeyPoints.map((point) => (
                    <li className="flex items-center gap-2.5" key={point}>
                      <div className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-muted text-secondary-foreground">
                        <CircleCheck />
                      </div>
                      <span className="text-base font-medium text-secondary-foreground">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                <Heading
                  level={5}
                  className="mt-6 text-wrap font-normal text-muted-foreground"
                >
                  Flow Budget takes the hassle out of budgeting and empowers
                  users to take control of their finances
                </Heading>
              </div>
              <div>
                <Link
                  href="#"
                  title=""
                  className="inline-flex items-center text-base font-medium text-muted-foreground hover:underline"
                >
                  Check out the iOS app features
                  <ChevronRight />
                </Link>
              </div>
            </TabsContent>
            <TabsContent
              value="android"
              className="mt-8 space-y-4 sm:space-y-6 lg:space-y-8"
            >
              <div>
                <Heading
                  level={2}
                  className=" font-extrabold leading-tight sm:text-4xl"
                >
                  ModernUI Web in Android: Take control of your finances with us
                </Heading>
                <Text className="mt-4 text-base font-normal text-muted-foreground sm:text-lg">
                  Our app helps users easily track their expenses and create a
                  budget. With a user-friendly interface, the app allows users
                  to quickly input their income and expenses, and then
                  automatically categorizes them for easy tracking.
                </Text>
              </div>
              <div className="border-t border-border pt-4 sm:pt-6 lg:pt-8">
                <ul className="space-y-4">
                  {androidKeyPoint.map((point) => (
                    <li className="flex items-center gap-2.5" key={point}>
                      <div className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-muted text-secondary-foreground">
                        <CircleCheck />
                      </div>
                      <span className="text-base font-medium text-secondary-foreground">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                <Heading
                  level={5}
                  className="mt-6 font-normal text-muted-foreground"
                >
                  ModernUI Web takes the hassle out of budgeting and empowers
                  users to take control of their finances.
                </Heading>
              </div>
              <div>
                <Link
                  href="#"
                  title=""
                  className="inline-flex items-center text-base font-medium text-muted-foreground hover:underline"
                >
                  Check out the Android app features
                  <ChevronRight />
                </Link>
              </div>
            </TabsContent>
          </Tabs>
          <div className="hidden lg:block">
            <div className="relative mx-auto h-[600px] w-[300px] rounded-[2.5rem] border-[14px] border-gray-800 bg-muted shadow-xl">
              <div className="absolute left-1/2 top-0 h-[18px] w-[148px] -translate-x-1/2 rounded-b-2xl bg-gray-800"></div>
              <div className="absolute left-[-17px] top-[72px] h-[32px] w-[3px] rounded-l-lg bg-gray-800"></div>
              <div className="absolute left-[-17px] top-[124px] h-[46px] w-[3px] rounded-l-lg bg-gray-800"></div>
              <div className="absolute left-[-17px] top-[178px] h-[46px] w-[3px] rounded-l-lg bg-gray-800"></div>
              <div className="absolute right-[-17px] top-[142px] h-[64px] w-[3px] rounded-r-lg bg-gray-800"></div>
              <div className="h-[572px] w-[272px] overflow-hidden rounded-[2.5rem] bg-muted">
                <Image
                  src={Mockup}
                  className="h-[572px] w-[272px] dark:hidden"
                  alt="Tab 1"
                />
                <Image
                  src={MockupDark}
                  className="hidden h-[572px] w-[272px] dark:block"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          <div className="hidden lg:block">
            <Image
              className="w-full object-cover dark:hidden"
              src={Tab1}
              alt="Feature illustration"
            />
            <Image
              className="hidden w-full object-cover dark:block"
              src={Tab2}
              alt="Feature illustration"
            />
          </div>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div>
              <Heading
                level={2}
                className=" font-extrabold leading-tight sm:text-4xl"
              >
                We invest in the world&#39;s potential
              </Heading>
              <Text className="mt-4 text-base font-normal text-muted-foreground sm:text-lg">
                <span className="font-semibold text-secondary-foreground">
                  ModernUI Web Budget
                </span>
                &nbsp;is a mobile app that helps users easily track their
                expenses and create a budget.
              </Text>
              <Text className="mt-4 text-base font-normal text-muted-foreground sm:text-lg">
                With a user-friendly interface, the app allows users to quickly
                input their income and expenses, and then automatically
                categorizes them for easy tracking.
              </Text>
            </div>
            <div className="border-t border-border sm:pt-6 lg:pt-8">
              <ul className="space-y-4">
                {keyPoints.map((point) => (
                  <li className="flex items-center gap-2.5" key={point}>
                    <div className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-muted text-secondary-foreground">
                      <CircleCheck />
                    </div>
                    <span className="text-base font-medium text-secondary-foreground">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <Button className="[&>span]:items-center [&>span]:px-5 [&>span]:py-2.5">
                Start building
                <ArrowRight />
              </Button>
              <Button
                color="gray"
                variant="outline"
                className="bg-muted hover:bg-primary-200 [&>span]:bg-muted [&>span]:px-5 [&>span]:py-2.5"
              >
                Get a demo
              </Button>
            </div>
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
