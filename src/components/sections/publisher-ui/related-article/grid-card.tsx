import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

// Components Import
import { Heading } from "~/components/ui/custom/headings";
//Image Imports
import Blog1 from "~/lib/assets/images/blog-1.png";
import Blog2 from "~/lib/assets/images/blog-2.png";
import Blog3 from "~/lib/assets/images/blog-3.png";
import Blog4 from "~/lib/assets/images/blog-4.png";
import Blog5 from "~/lib/assets/images/image-2.jpg";
import Blog6 from "~/lib/assets/images/image-4.jpg";

const GridLayoutCard = () => {
  interface ArticleData {
    image: StaticImageData;
    title: string;
    link: string;
    alt: string;
  }

  // Array of article data
  const ArticleData: ArticleData[] = [
    {
      image: Blog2,
      title: "Flowbite enables IT to automate Apple device configuration",
      link: "#",
      alt: "Image 1",
    },
    {
      image: Blog5,
      title: "How AI is transforming your smartphone",
      link: "#",
      alt: "Image 2",
    },
    {
      image: Blog3,
      title: "Android, ChromeOS, and the future of app discovery",
      link: "#",
      alt: "Image 3",
    },
    {
      image: Blog6,
      title: "What Google collaboration app offers remote teams",
      link: "#",
      alt: "Image 4",
    },
    {
      image: Blog4,
      title: "Collaboration app spending grows in the face of crisis",
      link: "#",
      alt: "Image 5",
    },
    {
      image: Blog1,
      title: "For developers, too many meetings, too little 'focus' time",
      link: "#",
      alt: "Image 6",
    },
  ];

  return (
    <aside
      aria-label="Related articles"
      className="bg-background py-8 antialiased lg:py-16"
    >
      <div className="mx-auto max-w-screen-xl px-4">
        <Heading level={3} className="mb-8 font-bold">
          Read Next
        </Heading>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ArticleData.map((article, index) => (
            <article key={index}>
              <Link href={article.link}>
                <Image
                  src={article.image}
                  className="mb-5 size-56 w-full max-w-full rounded-lg object-cover"
                  alt={article.alt}
                />
              </Link>
              <Heading level={4} className="mb-2 font-bold leading-tight">
                <Link href={article.link}>{article.title}</Link>
              </Heading>
              <Link
                href={article.link}
                className="inline-flex items-center font-medium text-primary underline underline-offset-4 hover:no-underline"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default GridLayoutCard;
