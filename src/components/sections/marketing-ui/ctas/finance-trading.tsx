import Image from "next/image";

import * as MuiLayout from "~/components/layouts";
// Components Import
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";

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
              <TableRow>
                <TableCell
                  scope="row"
                  className="bg-transparent text-xl font-bold text-secondary-foreground "
                >
                  Bitcoin&nbsp;
                  <span className="text-muted-foreground">BTC</span>
                </TableCell>
                <TableCell className="text-xl font-bold text-secondary-foreground">
                  $38,716.43
                </TableCell>
                <TableCell className="text-sm font-semibold text-red-500">
                  -10.82%
                </TableCell>
                <TableCell className="font-semibold text-secondary-foreground">
                  $729,729,745,340.82
                </TableCell>
                <TableCell className="flex justify-end">
                  <Button color="info">Trade</Button>
                </TableCell>
              </TableRow>
              <TableRow className="border-b dark:border-gray-700">
                <TableCell
                  scope="row"
                  className="bg-transparent text-xl font-bold text-secondary-foreground"
                >
                  Ethereum&nbsp;
                  <span className="text-muted-foreground">ETH</span>
                </TableCell>
                <TableCell className="text-xl font-bold text-secondary-foreground">
                  $2,818.15
                </TableCell>
                <TableCell className="text-sm font-semibold text-red-500">
                  -13.88%
                </TableCell>
                <TableCell className="font-semibold text-secondary-foreground">
                  $333,396,739,452.23
                </TableCell>
                <TableCell className="flex justify-end">
                  <Button color="info">Trade</Button>
                </TableCell>
              </TableRow>
              <TableRow className="border-b dark:border-gray-700">
                <TableCell
                  scope="row"
                  className="bg-transparent text-xl font-bold text-secondary-foreground"
                >
                  Cardano&nbsp;
                  <span className="text-muted-foreground">ADA</span>
                </TableCell>
                <TableCell className="text-xl font-bold text-secondary-foreground">
                  $1.22
                </TableCell>
                <TableCell className="text-sm font-semibold text-green-500">
                  +3.76%
                </TableCell>
                <TableCell className="font-semibold text-secondary-foreground">
                  $40,465,663,783.16
                </TableCell>
                <TableCell className="flex justify-end">
                  <Button color="info">Trade</Button>
                </TableCell>
              </TableRow>
              <TableRow className="border-b dark:border-gray-700">
                <TableCell
                  scope="row"
                  className="bg-transparent text-xl font-bold text-secondary-foreground"
                >
                  Dogecoin&nbsp;
                  <span className="text-muted-foreground">DOGE</span>
                </TableCell>
                <TableCell className="text-xl font-bold text-secondary-foreground">
                  $0.153765
                </TableCell>
                <TableCell className="text-sm font-semibold text-green-500">
                  +8.39%
                </TableCell>
                <TableCell className="font-semibold text-secondary-foreground">
                  $729,729,745,340.82
                </TableCell>
                <TableCell className="flex justify-end">
                  <Button color="info">Trade</Button>
                </TableCell>
              </TableRow>
              <TableRow className="border-b dark:border-gray-700 ">
                <TableCell
                  scope="row"
                  className="bg-transparent text-xl font-bold text-secondary-foreground"
                >
                  Polkadot&nbsp;
                  <span className="text-muted-foreground">DOT</span>
                </TableCell>
                <TableCell className="text-xl font-bold text-secondary-foreground">
                  $22.24
                </TableCell>
                <TableCell className="font-semibold text-red-500">
                  -13.17%
                </TableCell>
                <TableCell className="font-semibold text-secondary-foreground">
                  $21,710,483,995.43
                </TableCell>
                <TableCell className="flex justify-end">
                  <Button color="info">Trade</Button>
                </TableCell>
              </TableRow>
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
