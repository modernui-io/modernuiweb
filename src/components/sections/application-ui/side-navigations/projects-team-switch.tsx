import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  HiChevronDown,
  HiClipboardList,
  HiCollection,
  HiFlag,
  HiFolderOpen,
  HiHome,
  HiInboxIn,
  HiMenuAlt2,
  HiPlus,
  HiPresentationChartLine,
  HiSelector,
  HiX,
} from "react-icons/hi";

import { Button } from "~/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export function ProjectsTeamSwitchSideNavigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Button
        variant={"ghost"}
        onClick={toggleSidebar}
        className="ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
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
          className={`absolute -right-6 top-5 px-0 lg:hidden ${!isSidebarOpen && "hidden"}`}
        >
          <HiX className="size-4" />
        </Button>
        <div className="h-full overflow-y-auto border-r px-3 py-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={"ghost"}
                id="dropdownCompanyNameButton"
                className="flex w-full items-center justify-between rounded-lg p-2 "
              >
                <span className="sr-only">Open user menu</span>
                <div className="flex items-center">
                  <Image
                    width={100}
                    height={100}
                    src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4"
                    className="mr-3 h-7 w-auto"
                    alt="ModernUI Logo"
                  />
                  <div>
                    <div className="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white">
                      ModernUI
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Team plan
                    </div>
                  </div>
                </div>
                <HiSelector className="size-5 text-gray-500 dark:text-gray-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link
                href="#"
                className="flex items-center rounded px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <svg
                  aria-hidden="true"
                  className="h-8"
                  viewBox="0 0 54 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3_26)">
                    <path
                      d="M53.52 2.59375L31.52 7.98375C31.3113 8.03236 31.095 8.03882 30.8838 8.00276C30.6726 7.9667 30.4707 7.88884 30.29 7.77375L19.89 0.973752C19.6999 0.850063 19.4852 0.769031 19.2608 0.736231C19.0364 0.703432 18.8076 0.719644 18.59 0.783752L0.59 6.08375C0.424945 6.12338 0.277612 6.21644 0.170912 6.34846C0.0642122 6.48048 0.00412684 6.64406 0 6.81375L0 17.5938L18.59 12.1238C18.8076 12.0596 19.0364 12.0434 19.2608 12.0762C19.4852 12.109 19.6999 12.1901 19.89 12.3138L30.29 19.1038C30.4688 19.2232 30.6707 19.3037 30.8826 19.3398C31.0946 19.376 31.3117 19.3671 31.52 19.3138L54 13.8138V2.95375C53.9974 2.85206 53.9552 2.75541 53.8823 2.68442C53.8094 2.61343 53.7117 2.57372 53.61 2.57375L53.52 2.59375Z"
                      fill="#FF7F66"
                    />
                    <path
                      d="M40.2501 28.5637L31.5201 30.6637C31.3116 30.7146 31.0949 30.7222 30.8833 30.6861C30.6717 30.65 30.4698 30.5709 30.2901 30.4537L19.8901 23.6537C19.8486 23.6243 19.8016 23.6039 19.7519 23.5935C19.7022 23.5831 19.6509 23.5831 19.6011 23.5934C19.5514 23.6037 19.5044 23.6242 19.4629 23.6535C19.4214 23.6828 19.3864 23.7203 19.3601 23.7637C19.314 23.82 19.2892 23.8908 19.2901 23.9637V34.1937C19.2897 34.3187 19.3207 34.4418 19.38 34.5519C19.4394 34.6619 19.5254 34.7553 19.6301 34.8237L30.2901 41.8237C30.4706 41.9392 30.6728 42.0165 30.8844 42.0509C31.0959 42.0853 31.3122 42.076 31.5201 42.0237L40.7501 39.8137C42.2417 39.4535 43.5696 38.6037 44.5213 37.4C45.473 36.1962 45.9937 34.7082 46.0001 33.1737V32.9637C45.9816 31.7401 45.4785 30.5738 44.6011 29.7208C43.7237 28.8677 42.5437 28.3976 41.3201 28.4137C40.959 28.4243 40.6002 28.4746 40.2501 28.5637Z"
                      fill="#FF7F66"
                    />
                    <path
                      d="M40.25 51.2438L31.52 53.3438C31.3114 53.3924 31.0951 53.3988 30.8839 53.3628C30.6727 53.3267 30.4708 53.2489 30.29 53.1338L19.89 46.3338C19.8487 46.3054 19.8022 46.2854 19.7532 46.275C19.7041 46.2647 19.6535 46.2641 19.6042 46.2734C19.555 46.2827 19.508 46.3017 19.4661 46.3292C19.4242 46.3567 19.3882 46.3923 19.36 46.4338C19.3146 46.4943 19.29 46.568 19.29 46.6438V56.8738C19.2897 56.9988 19.3206 57.1219 19.38 57.232C19.4394 57.342 19.5253 57.4354 19.63 57.5038L30.29 64.5038C30.4688 64.6232 30.6707 64.7037 30.8827 64.7399C31.0946 64.776 31.3118 64.7672 31.52 64.7138L40.75 62.4938C42.2434 62.1369 43.5732 61.2879 44.5255 60.0834C45.4778 58.879 45.9972 57.3892 46 55.8538V55.6438C45.9816 54.4202 45.4785 53.2539 44.6011 52.4009C43.7237 51.5478 42.5437 51.0777 41.32 51.0938C40.9586 51.0995 40.5992 51.1499 40.25 51.2438Z"
                      fill="#FF7F66"
                    />
                    <path
                      opacity="0.32"
                      d="M30.8599 42.0137V30.7237C31.0776 30.7687 31.3022 30.7687 31.5199 30.7237L35.2799 29.7237L37.4799 40.5237L31.4799 41.9837C31.2777 42.0377 31.0663 42.0479 30.8599 42.0137ZM39.6799 51.3437L31.5199 53.3437C31.3022 53.3887 31.0776 53.3887 30.8599 53.3437V64.7237C31.0776 64.7687 31.3022 64.7687 31.5199 64.7237L41.8799 62.1837L39.6799 51.3437ZM30.8599 19.3437C31.0776 19.3887 31.3022 19.3887 31.5199 19.3437L33.0899 18.9637L30.8599 8.00366V19.3437Z"
                      fill="#2A344F"
                    />
                    <g opacity="0.16">
                      <path
                        opacity="0.16"
                        d="M19.29 12.0837C19.5021 12.1241 19.7053 12.202 19.89 12.3137L30.29 19.1137C30.4617 19.2278 30.6562 19.3029 30.86 19.3337V7.99365C30.6562 7.96286 30.4617 7.88776 30.29 7.77365L19.89 0.973652C19.7053 0.862007 19.5021 0.784127 19.29 0.743652V12.0837Z"
                        fill="#2A344F"
                      />
                      <path
                        opacity="0.16"
                        d="M30.86 53.3636C30.6574 53.3229 30.4642 53.2449 30.29 53.1336L19.89 46.3336C19.8038 46.2767 19.6985 46.2563 19.5973 46.2769C19.496 46.2975 19.4071 46.3575 19.35 46.4436C19.3107 46.5029 19.2898 46.5725 19.29 46.6436V56.8736C19.2897 56.9986 19.3206 57.1218 19.38 57.2318C19.4394 57.3418 19.5253 57.4353 19.63 57.5036L30.29 64.5036C30.4655 64.6102 30.6585 64.6847 30.86 64.7236V53.3636Z"
                        fill="#2A344F"
                      />
                      <path
                        opacity="0.16"
                        d="M19.89 23.6537C19.8038 23.5967 19.6985 23.5763 19.5973 23.597C19.496 23.6176 19.4071 23.6775 19.35 23.7637C19.3107 23.8229 19.2898 23.8925 19.29 23.9637V34.1937C19.2897 34.3187 19.3206 34.4418 19.38 34.5519C19.4394 34.6619 19.5253 34.7553 19.63 34.8237L30.29 41.8237C30.4639 41.9334 30.6575 42.0081 30.86 42.0437V30.7237C30.6556 30.6892 30.4611 30.6107 30.29 30.4937L19.89 23.6537Z"
                        fill="#2A344F"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_3_26">
                      <rect
                        width="54"
                        height="64"
                        fill="white"
                        transform="translate(0 0.723633)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div className="ml-3">
                  <div className="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white">
                    Themesberg
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Personal plan
                  </div>
                </div>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
          <ul className="mt-5 space-y-2">
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <HiHome className="size-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">Home</span>
              </Link>
            </li>
            <li>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button
                    variant={"ghost"}
                    className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <HiClipboardList className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span className="ml-3 flex-1 whitespace-nowrap text-left">
                      My Tasks
                    </span>
                    <HiChevronDown className="size-6" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul id="dropdown-tasks" className="space-y-2 py-2">
                    {["To do", "In progress", "Completed"].map(
                      (item, index) => (
                        <li key={index}>
                          <Link
                            href="#"
                            className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          >
                            {item}
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </li>
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <HiInboxIn className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3 flex-1 whitespace-nowrap">Inbox</span>
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-800 dark:bg-primary-200 dark:text-primary-800">
                  6
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <HiPresentationChartLine className="size-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">Reporting</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <HiFolderOpen className="size-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">Portfolios</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <HiFlag className="size-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">Goals</span>
              </Link>
            </li>
          </ul>
          <div className="mb-4 mt-5 border-t border-gray-200 pl-2 pt-5 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
            <h3>Bergside projects</h3>
          </div>
          <ul className="space-y-4 pl-2">
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg text-base font-medium text-gray-900 transition duration-75 hover:underline dark:text-white"
              >
                <span className="size-4 rounded bg-primary-600"></span>
                <span className="ml-3">ModernUI library</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg text-base font-medium text-gray-900 transition duration-75 hover:underline dark:text-white"
              >
                <span className="size-4 rounded bg-teal-400"></span>
                <span className="ml-3">Themesberg</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg text-base font-medium text-gray-900 transition duration-75 hover:underline dark:text-white"
              >
                <span className="size-4 rounded bg-orange-300"></span>
                <span className="ml-3">ModernUI blocks</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg text-base font-medium text-gray-900 transition duration-75 hover:underline dark:text-white"
              >
                <span className="size-4 rounded bg-purple-500"></span>
                <span className="ml-3">Iconscale</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg text-base font-medium text-gray-900 transition duration-75 dark:text-gray-200"
              >
                <HiPlus className="size-4 rounded border border-gray-200 dark:border-gray-400" />
                <span className="ml-3 text-gray-500 hover:underline dark:text-gray-400">
                  Add new project
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 z-20 w-full justify-center p-4">
          <ul className="mb-4 space-y-2 border-b border-gray-200 pb-4 pl-2 dark:border-gray-700">
            <li>
              <Link
                href="#"
                className="group flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <HiClipboardList className="size-4 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-2">Settings</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <HiCollection className="size-4 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-2">Help & getting started</span>
              </Link>
            </li>
          </ul>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={"ghost"}
                id="dropdownUserNameButton"
                className="my-4 flex w-full items-center justify-between rounded-lg p-2 focus:outline-none focus:ring-4"
              >
                <span className="sr-only">Open user menu</span>
                <div className="flex items-center">
                  <Image
                    width={100}
                    height={100}
                    src="https://github.com/shadcn.png"
                    className="mr-3 size-8 rounded-full"
                    alt="Bonnie avatar"
                  />
                  <div className="text-left">
                    <div className="mb-0.5 font-semibold leading-none">
                      Bonnie Green
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      bonnie@modernui.com
                    </div>
                  </div>
                </div>
                <HiSelector className="size-5 text-gray-500 dark:text-gray-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <div
                id="dropdownUserName"
                className="w-60 divide-y divide-gray-100 rounded shadow"
                data-popper-placement="bottom"
              >
                <Link
                  href="#"
                  className="flex items-center rounded px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <Image
                    width={100}
                    height={100}
                    src="https://github.com/shadcn.png"
                    className="mr-3 size-8 rounded-full"
                    alt="Michael avatar"
                  />
                  <div className="text-left">
                    <div className="mb-0.5 font-semibold leading-none">
                      Michael Gough
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      michael@modernui.com
                    </div>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="flex items-center rounded px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <Image
                    width={100}
                    height={100}
                    src="https://github.com/shadcn.png"
                    className="mr-3 size-8 rounded-full"
                    alt="Roberta avatar"
                  />
                  <div className="text-left">
                    <div className="mb-0.5 font-semibold leading-none">
                      Roberta Casas
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      roberta@modernui.com
                    </div>
                  </div>
                </Link>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="#"
            className="group flex items-center pl-2 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <HiCollection className="size-4 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
            <span className="ml-2">Invite team members</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
