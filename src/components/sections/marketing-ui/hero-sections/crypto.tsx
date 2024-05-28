import { Bitcoin, Euro } from "lucide-react";

//components
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

const cryptoList = [
  {
    background: "bg-highlight-blue",
    heading: "$76 billion",
    caption: "24h trading volume",
  },
  {
    background: "bg-highlight-green",
    heading: "600+",
    caption: "Cryptocurrencies listed",
  },
  {
    background: "bg-highlight-purple",
    heading: " 34 million",
    caption: "Diluted market cap",
  },
  {
    background: "bg-highlight-yellow",
    heading: "90 million",
    caption: "Registered users",
  },
  {
    background: "bg-highlight-red",
    heading: "0.10%",
    caption: "Low transaction fees",
  },
];

export function FinancialExchangeCryptoHero() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <div className="mx-auto max-w-2xl">
          <Heading
            level={"mdDisplay"}
            className="mb-4 font-extrabold leading-none tracking-tight"
          >
            Decentralized for a better tomorrow
          </Heading>
          <Text className="text-base font-normal text-secondary-foreground lg:mb-8 lg:text-xl xl:mb-12">
            Buy, trade, and hold&nbsp;
            <span className="font-medium">600+</span>
            &nbsp;cryptocurrencies on modernUIWeb
          </Text>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 xl:grid-cols-5">
          {cryptoList.map(({ background, caption, heading }) => (
            <div
              key={`${heading}-${caption}`}
              className={`${background} rounded-lg p-4 text-primary-700`}
            >
              <Heading level={2} className="font-extrabold leading-tight">
                {heading}
              </Heading>
              <span className="text-primary-500">{caption}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-lg border p-8 lg:mt-12">
          <div className="mx-auto mb-4 w-fit lg:mb-8">
            <Tabs defaultValue="Buy" className="items-center">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="Buy">Buy</TabsTrigger>
                <TabsTrigger value="Sell">Sell</TabsTrigger>
              </TabsList>
              <TabsContent value="Buy">
                <div className="block items-center space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
                  <div className="w-full">
                    <Label htmlFor="euro-form" className="sr-only">
                      Amount to buy, euro
                    </Label>
                    <div className="relative flex">
                      <Input
                        id="euro-form"
                        placeholder="1000"
                        type="number"
                        className="pl-8"
                      />
                      <Euro className=" absolute left-2 top-1.5 w-4 text-foreground" />
                    </div>
                  </div>
                  <div className="w-full">
                    <Label htmlFor="bitcoin-form" className="sr-only">
                      Amount to buy, BTC
                    </Label>
                    <div className="relative flex">
                      <Input
                        className="pl-8"
                        id="bitcoin-form"
                        placeholder="1000"
                        type="number"
                      />
                      <Bitcoin className="absolute left-2 top-1.5 w-4 text-foreground" />
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="Sell">
                <div className="block items-center space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
                  <div className="w-full">
                    <Label htmlFor="sell-bitcoin-form" className="sr-only">
                      Amount to sell, BTC
                    </Label>
                    <div className="relative flex">
                      <Input
                        className="pl-8"
                        id="sell-bitcoin-form"
                        placeholder="1000"
                        type="number"
                      />
                      <Bitcoin className=" absolute left-2 top-1.5 w-4 text-foreground" />
                    </div>
                  </div>
                  <div className="w-full">
                    <Label htmlFor="sell-euro-form" className="sr-only">
                      Amount to sell, Euro
                    </Label>
                    <div className="relative flex">
                      <Input
                        className="pl-8"
                        id="sell-euro-form"
                        placeholder="1000"
                        type="number"
                      />
                      <Euro className=" absolute left-2 top-1.5 w-4 text-foreground" />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <Button className="mx-auto w-full md:w-fit">
            Connect your wallet
          </Button>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
