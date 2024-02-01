import Image from "next/image";
import Link from "next/link";
import { ImNewTab } from "react-icons/im";
import Card from "@/components/card";

export default function Home() {
  return (
    <main className='mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 bg-transparent px-4 pt-20 text-center md:flex-row'>
      <Card>
        <Link
          href='/portfolio'
          className='group relative flex min-h-[400px] flex-col items-center justify-between p-4 text-center'
        >
          <Image
            src='https://res.cloudinary.com/db7v5ycxn/image/upload/t_portfolio-show-image/v1703239461/my-portfolio-website/image_c7pwmz.png'
            alt='Reza Zeraatkar image'
            quality='95'
            priority={true}
            width={800}
            height={800}
            className='h-48 w-48 rounded-md object-cover'
          />
          <p className='flex items-center gap-1'>
            This is the link to my portfolio website! Here, I will share my
            skills and experiences. We will also have the opportunity to get
            acquainted a little more with each other. Feel free to check it out.
            <ImNewTab className='absolute bottom-2 right-2 h-4 w-4 opacity-60 transition group-hover:-translate-y-1 group-hover:translate-x-1' />
          </p>
          <span className='font-bold'>
            click to see my portfolio page
            <ImNewTab className='absolute bottom-2 right-2 h-4 w-4 opacity-60 transition group-hover:-translate-y-1 group-hover:translate-x-1' />
          </span>
        </Link>
      </Card>
      <Card>
        <Link
          href='/blog'
          target='_blank'
          className='group relative flex min-h-[400px] flex-col items-center justify-between p-4 text-center'
        >
          <Image
            src='https://res.cloudinary.com/db7v5ycxn/image/upload/t_portfolio-show-image/v1702923940/my-portfolio-website/images2_wr5b36.png'
            alt='Reza Zeraatkar blog image'
            quality='95'
            priority={true}
            width={800}
            height={800}
            className='h-48 w-48 rounded-md object-cover'
          />
          <p>
            In my blog website, I will share my programming experiences, ideas,
            challenges and some learning content which would help other
            developers throughout thier journey as a react/nextjs developer.
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
