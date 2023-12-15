"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        While studying at{" "}
        <span className='font-medium'>
          Iran University of Science and Technology{" "}
        </span>
        for my master's degree in{" "}
        <span className='font-medium'> Information Technology (IT)</span>, I
        decided to pursue my passion for programming. During my bachelor’s
        degree, I enrolled in a coding bootcamp, learned{" "}
        <span className='font-medium'>
          full-stack web development, and earned my CIW certificate.
        </span>{" "}
        So, I had a taste of web development even before starting my master’s
        degree. 😊!
        <span className='italic'> My favorite aspect of programming</span> is
        problem-solving. I <span className='underline'>love</span> the feeling
        of finally figuring out a solution to a problem. My core stack includes{" "}
        <span className='font-medium'>
          React, Next.js, Node.js, and MongoDB,
        </span>{" "}
        and I am also familiar with{" "}
        <span className='font-medium'>TypeScript</span> and{" "}
        <span className='font-medium'>Docker</span>. I am always eager to learn
        new technologies. I' also familiar with some concepts in Artificial
        Inteligence (AI) like natural language processing, neural networks and
        coding{" "}
        <Link
          href='https://github.com/RezaZeraatkar/digiWebScraper'
          className='text-blue-500 underline'
          target='_blank'
        >
          crawlers
        </Link>{" "}
        . I am currently seeking a{" "}
        <span className='font-medium'>full-time or remote position</span> as a
        front-end web developer.
      </p>

      <p>
        <span className='italic'>When I'm not coding</span>, I enjoy playing
        video games or going out and joining english free discussion groups. I
        also enjoy <span className='font-medium'>learning new things</span>. I
        am currently learning about{" "}
        <span className='font-medium'>history, economic and politics</span>. I'm
        also learning how to play the{" "}
        <span className='font-medium'>guitar</span>.
      </p>
    </motion.section>
  );
}
