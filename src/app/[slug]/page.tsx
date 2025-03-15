import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Key } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

const getImages = async (slug: string, url: string | undefined) => {
  if (!slug || !url) {
    console.log("slug or url is not defined");

    return [];
  }
  const res = await fetch(`${url}/${slug}`, {
    cache: "force-cache",
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    console.log("response is not ok");

    return res.json();
  }

  return res.json();
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug,
    description: slug,
  };
}

export default async function SomePage({ params }: Props) {
  const { slug } = await params;
  const url = process.env.URL;
  const data = await getImages(slug, url);
  return (
    <div className="flex flex-col items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <div className="w-full py-10 border-b border-gray-200">
        <div className="text-xl container px-6 mx-auto flex items-center justify-around">
          <p>{slug}</p>
          <Link href={"/"} className="text-blue-500">Go back</Link>
        </div>
      </div>
      <div className="container flex items-start justify-center flex-wrap mx-auto">
        {!data?.success ? (
          <p>{data?.message}</p>
        ) : (
          data?.photos.map((item: { url: string }, index: Key) => (
            <Image
            className="w-1/3 p-1 h-96 object-cover"
              key={index}
              src={item.url}
              alt="some img"
              width={400}
              height={300}
            />
          ))
        )}
      </div>
    </div>
  );
}
