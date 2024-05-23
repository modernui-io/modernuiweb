import * as MuiLayout from "~/components/layouts";
// Components Import
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";

interface TableData {
  coinName: string;
  coin: string;
  value: string;
  change: string;
  totalValue: string;
  isProfit: boolean;
}

const TableData: TableData[] = [
  {
    coinName: "Bitcoin",
    coin: "BTC",
    value: "38,716.43",
    change: "-10.82%",
    totalValue: "729,729,745,340.82",
    isProfit: false,
  },
  {
    coinName: "Ethereum",
    coin: "ETH",
    value: "2,818.15",
    change: "-13.88%",
    totalValue: "333,396,739,452.23",
    isProfit: false,
  },
  {
    coinName: "Cardano",
    coin: "ADA",
    value: "1.22",
    change: "	+3.76%",
    totalValue: "40,465,663,783.16",
    isProfit: true,
  },
  {
    coinName: "Dogecoin",
    coin: "DOGE",
    value: "0.153765",
    change: "+8.39%",
    totalValue: "729,729,745,340.82",
    isProfit: true,
  },
  {
    coinName: "Polkadot",
    coin: "DOT",
    value: "22.24",
    change: "-13.17%",
    totalValue: "21,710,483,995.43",
    isProfit: false,
  },
];

export function FinancialTradingCTASection() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto flex max-w-screen-xl flex-col items-center px-4 py-8 text-center sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <Heading level={2} className="mb-4  font-extrabold tracking-tight ">
            Buy crypto at true cost
          </Heading>
          <Text className="mb-6 text-muted-foreground md:text-lg lg:mb-16">
            Buy and sell 250+ cryptocurrencies with 20+ fiat currencies using
            bank transfers or your credit/debit card.
          </Text>
        </div>
        <div className="relative mb-8 w-full overflow-x-auto">
          <Table className="m-auto">
            <TableBody className="divide-y">
              {TableData.map(
                ({ coinName, coin, value, totalValue, change, isProfit }) => (
                  <TableRow key={coin}>
                    <TableCell
                      scope="row"
                      className="bg-transparent text-xl font-bold text-secondary-foreground "
                    >
                      {coinName}&nbsp;
                      <span className="text-muted-foreground">{coin}</span>
                    </TableCell>
                    <TableCell className="text-xl font-bold text-secondary-foreground">
                      ${value}
                    </TableCell>
                    <TableCell
                      className={`text-sm font-semibold ${isProfit ? " text-green-500" : " text-red-500"} `}
                    >
                      {change}
                    </TableCell>
                    <TableCell className="font-semibold text-secondary-foreground">
                      ${totalValue}
                    </TableCell>
                    <TableCell className="flex justify-end">
                      <Button color="info">Trade</Button>
                    </TableCell>
                  </TableRow>
                ),
              )}
            </TableBody>
          </Table>
        </div>
        <p className="mb-5 text-center text-muted-foreground sm:text-xl">
          Sign up now to build your own portfolio for free!
        </p>
        <Button color="info" className="w-fit">
          Sign Up Now
        </Button>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
