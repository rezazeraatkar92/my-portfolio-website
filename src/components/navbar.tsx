import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface InavbarProps {}

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-10 bg-slate-600 p-4 drop-shadow-xl'>
      <div className='prose prose-xl mx-auto flex flex-col items-center justify-between gap-2 sm:flex-row md:px-6'>
        <Link
          href='/'
          target='_blank'
          className='flex items-center gap-1 text-white/90 no-underline hover:text-white'
        >
          <div className='flex h-14 w-14 items-center justify-center rounded-full border-[1px] border-black object-cover shadow-xl dark:border-slate-500'>
            <Image
              src='https://res.cloudinary.com/db7v5ycxn/image/upload/v1702675742/my-portfolio-website/gyhsu0fs1l6kfocafwcg.jpg'
              alt='Reza Zeraatkar'
              quality='95'
              priority={true}
              width={500}
              height={500}
              className=' rounded-full'
            />
          </div>
          <span className='whitespace-nowrap text-3xl lg:text-4xl'>
            Reza Zeraatkar
          </span>
        </Link>
        <div className='flex flex-row justify-center gap-4 align-middle text-4xl text-white sm:justify-evenly lg:text-5xl'>
          <Link
            href='https://github.com/RezaZeraatkar'
            target='_blank'
            className='text-white/90 hover:text-white'
          >
            <FaGithub />
          </Link>
          <Link
            href='https://linkedin.com/in/reza-zeraatkar'
            target='_blank'
            className='text-white/90 hover:text-white'
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </nav>
  );
}
