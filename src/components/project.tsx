"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  demoUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className='group mb-3 last:mb-0 sm:mb-8'
    >
      <section className='relative max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:h-[37rem] sm:pr-8 sm:group-even:pl-8'>
        <div className='flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <div className='flex items-center justify-between'>
            <Link
              className='text-blue-500 underline'
              href={githubUrl}
              target='_blank'
            >
              github
            </Link>
            {demoUrl && (
              <Link
                className='text-blue-500 underline'
                href={demoUrl}
                target='_blank'
              >
                Demo
              </Link>
            )}
          </div>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>
            {description}
          </p>
          <ul className='mt-4 flex flex-wrap gap-2 sm:mt-auto'>
            {tags.map((tag, index) => (
              <li
                className='rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70'
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          width={1000}
          height={1000}
          alt='Project I worked on'
          quality={95}
          className='relative top-8 self-center rounded-t-lg shadow-2xl transition sm:absolute
        sm:-right-40 
        sm:block
        sm:w-[28.25rem]
        sm:group-even:-left-40
        sm:group-even:right-[initial]
        sm:group-hover:-translate-x-3

        sm:group-hover:translate-y-3
        sm:group-hover:-rotate-2
        sm:group-hover:scale-[1.04]

        sm:group-even:group-hover:translate-x-3 sm:group-even:group-hover:translate-y-3 sm:group-even:group-hover:rotate-2'
        />
      </section>
    </motion.div>
  );
}
