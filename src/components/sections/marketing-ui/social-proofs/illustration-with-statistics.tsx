import Image from "next/image";

import { BiWorld } from "react-icons/bi";
import { HiShoppingBag } from "react-icons/hi";
import { IoPersonSharp } from "react-icons/io5";
import { MdPayments } from "react-icons/md";

import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import TableProfessor from "~/lib/assets/images/table-professor.png";

interface Statistic {
  icon: JSX.Element;
  mainText: string;
  description: string;
}

const statisticsData: Statistic[] = [
  {
    icon: <HiShoppingBag className="size-7 shrink-0" />,
    mainText: "$76 billion",
    description: "24h trading volume on Modern UI exchange",
  },
  {
    icon: <IoPersonSharp className="size-7" />,
    mainText: "90%",
    description: "of U.S adults have bought from businesses using Modern UI",
  },
  {
    icon: <MdPayments className="size-7" />,
    mainText: "135+",
    description: "currencies and payment methods supported",
  },
  {
    icon: <BiWorld className="size-7" />,
    mainText: "40%",
    description: "countries with local acquiring optimizing acceptance rates",
  },
];

export const IllustrationWithStatistics = () => {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16 xl:gap-16 ">
        <div className="m:text-lg">
          <Heading
            level={2}
            className="mb-4 text-3xl font-extrabold tracking-tight  md:text-4xl"
          >
            Stats that matter
          </Heading>
          <Text className="mb-8 font-light  text-muted-foreground lg:text-xl">
            Our rigorous security and compliance standards are at the heart of
            all we do. We work tirelessly to protect you and your customers.
          </Text>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {statisticsData.map((item, index) => (
              <div key={index} className="flex ">
                <div className="mr-4 shrink-0 text-primary">{item.icon}</div>
                <div>
                  <Text className="mb-1 text-2xl font-extrabold tracking-tight">
                    {item.mainText}
                  </Text>
                  <Text className="text-lg font-light text-muted-foreground">
                    {item.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Image
          className="mx-auto mb-4 hidden lg:flex"
          src={TableProfessor}
          alt="table professor illustration"
        />
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};
