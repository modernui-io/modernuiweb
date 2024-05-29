import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

// Components Import
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
//Image Imports
import Blog1 from "~/lib/assets/images/blog-1.png";
import Blog2 from "~/lib/assets/images/blog-2.png";
import Blog3 from "~/lib/assets/images/blog-3.png";

interface Article {
  imgSrc: StaticImageData;
  imgAlt: string;
  title: string;
  description: string;
  readTime: string;
  link: string;
}

const Articles: Article[] = [
  {
    imgSrc: Blog1,
    imgAlt: "Image 1",
    title: "Our first office",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation.",
    readTime: "Read in 2 minutes",
    link: "/our-first-office",
  },
  {
    imgSrc: Blog2,
    imgAlt: "Image 2",
    title: "Enterprise design tips",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation.",
    readTime: "Read in 12 minutes",
    link: "/enterprise-design-tips",
  },
  {
    imgSrc: Blog3,
    imgAlt: "Image 3",
    title: "We partnered up with Google",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation.",
    readTime: "Read in 8 minutes",
    link: "/we-partnered-up-with-google",
  },
];

const ArticleCard = (article: Article) => {
  const { imgSrc, imgAlt, title, description, readTime, link } = article;
  return (
    <article className="mb-8 flex">
      <Link href={link} passHref className="shrink-0">
        <Image
          src={imgSrc}
          className="mr-5 size-32 max-w-full rounded-full object-cover align-middle"
          alt={imgAlt}
        />
      </Link>
      <div className="flex flex-col justify-center">
        <Heading level={4} className="mb-2 font-bold leading-tight">
          <Link href={link} passHref>
            {title}
          </Link>
        </Heading>
        <Text className="mb-2 text-muted-foreground">{description}</Text>
        <Link
          href={link}
          passHref
          className="inline-flex items-center font-medium text-primary underline underline-offset-4 hover:no-underline"
        >
          {readTime}
        </Link>
      </div>
    </article>
  );
};

const RoundedList = () => (
  <aside
    aria-label="Related articles"
    className="bg-background py-8 antialiased lg:py-24"
  >
    <div className="mx-auto max-w-screen-xl px-4">
      <Heading level={3} className="mb-8 font-bold">
        Read next
      </Heading>
      {Articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </div>
  </aside>
);

export default RoundedList;
