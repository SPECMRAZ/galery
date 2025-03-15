import Image from "next/image";
import Link from "next/link";
import { Key } from "react";

const getImages = async (url: string | undefined) => {
  if (!url) {
    console.log("url is not defined");

    return [];
  }

  const res = await fetch(url, {
    cache: "force-cache",
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    console.log("response is not ok");
    return res.json();
  }

  return res.json();
};

export async function Cards() {
  const url = process.env.API_JAM_URL;
  const data = await getImages(url);

  return (
    <div className="p-2 container flex items-center justify-around flex-wrap mx-auto">
      {!data?.success ? (
        <p>{data?.message}</p>
      ) : (
        data?.galleries.map(
          (
            item: {
              gallery_name: string | undefined;
              gallery_img: string | undefined;
            },
            index: Key
          ) => (
            <div key={index} className="w-full lg:w-1/3 p-2">
              {item.gallery_img && item.gallery_name && (
                <Link
                  href={`/${item.gallery_name}`}
                  className="w-full p-2 text-center"
                >
                  <Image
                    className="w-full h-72 object-cover mb-2
                  transition delay-150 duration-300 ease-in-out transform"
                    height={300}
                    width={300}
                    src={item.gallery_img}
                    alt={item.gallery_name}
                    loading="eager"
                    quality={100}
                    unoptimized
                  />
                  <h3 className="text-lg font-normal tracking-wider">
                    {item.gallery_name}
                  </h3>
                </Link>
              )}
            </div>
          )
        )
      )}
    </div>
  );
}
