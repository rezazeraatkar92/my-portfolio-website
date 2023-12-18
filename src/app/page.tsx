import Image from "next/image";
import Link from "next/link";
import { ImNewTab } from "react-icons/im";
import Card from "@/components/card";

export default function Home() {
  return (
    <main className='flex w-full flex-col items-center justify-between gap-3 bg-transparent px-4 pt-20 text-center md:flex-row'>
      <Card>
        <Link
          href='/portfolio'
          className='group relative flex min-h-[400px] flex-col items-center gap-10 p-4 py-10 text-center'
        >
          <Image
            src='https://res.cloudinary.com/db7v5ycxn/image/upload/v1702675742/my-portfolio-website/gyhsu0fs1l6kfocafwcg.jpg'
            alt='Reza Zeraatkar image'
            quality='95'
            priority={true}
            width={500}
            height={500}
            className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl'
          />
          <span className='flex items-center gap-1'>
            This is the link to my portfolio website! Click on it to see my
            portfolio.
            <ImNewTab className='absolute bottom-2 right-2 h-4 w-4 opacity-60 transition group-hover:-translate-y-1 group-hover:translate-x-1' />
          </span>
        </Link>
      </Card>
      <Card>
        <Link
          href='/blog'
          target='_blank'
          className='group relative flex min-h-[400px] flex-col items-center justify-between px-4 py-4 text-center'
        >
          <Image
            src='https://res.cloudinary.com/db7v5ycxn/image/upload/v1702923940/my-portfolio-website/images2_wr5b36.png'
            alt='Reza Zeraatkar blog image'
            quality='95'
            priority={true}
            width={192}
            height={192}
            className='h-48 w-48 rounded-md object-cover'
          />
          <p>
            In my blog website, I will share my programming experiences, ideas,
            challenges and some learning content which would help other
            developers throughout thier journey as a react/nextjs developer.{" "}
          </p>
          <span className='font-bold'>
            click to see my blog page
            <ImNewTab className='absolute bottom-2 right-2 h-4 w-4 opacity-60 transition group-hover:-translate-y-1 group-hover:translate-x-1' />
          </span>
        </Link>
      </Card>
    </main>
  );
}
