import Image from "next/image";
import React from "react";

interface ICustomImageProps {
  src: string;
  alt: string;
  priority?: string;
}

export default function CustomImage({ src, alt, priority }: ICustomImageProps) {
  const prty = priority ? true : false;

  return (
    <div className='h-full w-full'>
      <Image
        className='mx-auto rounded-lg'
        src={src}
        alt={alt}
        width={650}
        height={650}
        priority={prty}
      />
    </div>
  );
}
