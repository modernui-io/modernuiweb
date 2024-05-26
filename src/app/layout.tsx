/* eslint-disable react/no-unknown-property */
import "~/styles/globals.css";

import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";

import { ThemeProvider as NextThemeProvider } from "next-themes";

import { TailwindIndicator } from "~/components/layouts/parts/tailwind-indicator";
import { cn } from "~/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Modern UI Kit for Next.js",
  description: "Modern UI Kit for Next.js",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      dir="ltr"
      className="no-scrollbar scroll-smooth focus:scroll-auto"
      suppressHydrationWarning
    >
      <body
        className={cn(
          "min-h-dvh bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <NextThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="modernui-theme"
        >
          <div vaul-drawer-wrapper="">
            <div className="relative flex min-h-dvh flex-col bg-background">
              {children}
            </div>
          </div>
        </NextThemeProvider>

        {process.env.NODE_ENV !== "production" ? <TailwindIndicator /> : null}
      </body>
    </html>
  );
}
