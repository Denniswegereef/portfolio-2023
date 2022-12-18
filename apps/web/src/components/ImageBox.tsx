import { urlForImage } from "@/lib/sanity.image";
import Image from "next/image";
import type { Image as SanityImage } from "sanity";

interface ImageBoxProps {
  image: SanityImage;
  alt: string;
  width?: number;
  height?: number;
  size?: string;
}

export function ImageBox({
  image,
  alt = "Cover image",
  width = 1500,
  height = 1000,
  size = "100vw",
}: ImageBoxProps) {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).fit("crop").url();

  if (!imageUrl) return <></>;

  return (
    <Image
      alt={alt}
      width={width}
      height={height}
      sizes={size}
      src={imageUrl}
    />
  );
}
