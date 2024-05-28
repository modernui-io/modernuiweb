import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";

// Components Import
import * as MuiLayout from "~/components/layouts";
import { Avatar } from "~/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import Avatar1 from "~/lib/assets/images/avatar-1.png";
//Image Imports
import Avatar2 from "~/lib/assets/images/avatar-2.png";
import Avatar3 from "~/lib/assets/images/avatar-3.png";
import Blog1 from "~/lib/assets/images/blog-1.png";
import Blog3 from "~/lib/assets/images/blog-3.png";
import Blog4 from "~/lib/assets/images/blog-4.png";

interface ArticleData {
  image: StaticImageData;
  avatar: StaticImageData;
  author: string;
  date: string;
  title: string;
  description: string;
}

const ArticleData: ArticleData[] = [
  {
    image: Blog1,
    avatar: Avatar1,
    author: "Jese Leos",
    date: "Aug 15, 2021",
    title: "Our first office",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
  },
  {
    image: Blog3,
    avatar: Avatar2,
    author: "Roberta Casas",
    date: "Aug 15, 2021",
    title: "We partnered up with Google",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
  },
  {
    image: Blog4,
    avatar: Avatar3,
    author: "Sofia McGuire",
    date: "Aug 15, 2021",
    title: "Our first project with React",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
  },
  {
    image: Blog1,
    avatar: Avatar1,
    author: "Jese Leos",
    date: "Aug 15, 2021",
    title: "Our first office",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
  },
  {
    image: Blog3,
    avatar: Avatar2,
    author: "Roberta Casas",
    date: "Aug 15, 2021",
    title: "We partnered up with Google",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
  },
  {
    image: Blog4,
    avatar: Avatar3,
    author: "Sofia McGuire",
    date: "Aug 15, 2021",
    title: "Our first project with React",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
  },
];

const TrendingArticlesCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  return (
    <MuiLayout.Section className="bg-background py-8 antialiased lg:py-16">
      <MuiLayout.Container className="mx-auto w-full max-w-screen-xl px-4">
        <Heading level={2} className="mb-8 font-bold">
          Trending on ModernWeb UI
        </Heading>
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="relative h-[720px] overflow-hidden rounded-lg"
        >
          <CarouselContent>
            {ArticleData.map((article, index) => (
              <CarouselItem
                key={index}
                className="bg-background duration-700 ease-in-out md:basis-1/2 lg:basis-1/3 "
              >
                <Article key={index} {...article} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[47%] top-3/4 rounded-lg " />
          <CarouselNext className=" right-[47%] top-3/4 rounded-lg " />
        </Carousel>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};

const Article = (article: ArticleData) => {
  const { image, avatar, author, date, title, description } = article;
  return (
    <article className="mx-auto w-full max-w-sm rounded-lg border bg-background p-4 shadow-md">
      <Link href="#">
        <Image className="mb-5 rounded-lg" src={image} alt={title} />
      </Link>
      <div className="mb-3 flex items-center space-x-2">
        <Avatar>
          <Image
            className="size-10 w-full rounded-full object-cover"
            src={avatar}
            alt={`${author} avatar`}
          />
        </Avatar>
        <div className="font-medium text-secondary-foreground">
          <div>{author}</div>
          <div className="text-sm font-normal text-muted-foreground">
            {date} · 16 min read
          </div>
        </div>
      </div>
      <Heading level={3} className="mb-2 font-bold tracking-tight lg:text-2xl">
        <Link href="#">{title}</Link>
      </Heading>
      <Text className="mb-3 text-muted-foreground">{description}</Text>
      <Link
        href="#"
        className="inline-flex items-center font-medium text-primary hover:text-brand-600 hover:no-underline"
      >
        Read more
        <ArrowRight className="ml-1 mt-px size-3" />
      </Link>
    </article>
  );
};

export default TrendingArticlesCarousel;
