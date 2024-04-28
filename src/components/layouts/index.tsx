import * as React from "react";

import { cn } from "~/lib/utils";

// Layout Component
interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "no-scrollbar scroll-smooth antialiased focus:scroll-auto",
        className,
      )}
    >
      {children}
    </html>
  );
};

// Main Component
interface MainProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Main = ({ children, className, id }: MainProps) => {
  return (
    <main className={cn("h-full w-full max-w-none flex-1", className)} id={id}>
      {children}
    </main>
  );
};

// Section Component
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section className={cn("py-8 md:py-12", className)} id={id}>
      {children}
    </section>
  );
};

// Container Component
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <div
      className={cn("container max-w-screen-xl overflow-x-hidden", className)}
      id={id}
    >
      {children}
    </div>
  );
};

// Article Component
interface ArticleProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Article = ({ children, className, id }: ArticleProps) => {
  return (
    <article
      className={cn(
        // General Prose
        "prose:font-sans prose prose-neutral dark:prose-invert xl:prose-lg",
        // Prose Headings
        "prose-headings:font-normal",
        // Prose Paragraphs
        "prose-p:mb-0",
        // Prose Strong
        "prose-strong:font-semibold",
        // Inline Links
        "prose-a:text-secondary prose-a:underline prose-a:decoration-secondary prose-a:underline-offset-2 prose-a:transition-all hover:prose-a:underline-offset-4 hover:prose-a:opacity-80",
        // Blockquotes
        "prose-blockquote:not-italic",
        className,
      )}
      id={id}
    >
      {children}
    </article>
  );
};

export { Layout, Main, Section, Container, Article };
