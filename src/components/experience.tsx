"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { useTheme } from 'next-themes';

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.45);
  const { theme } = useTheme();

  return (
    <section id='experience' ref={ref} className='mb-28 scroll-mt-28 sm:mb-40'>
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className='font-semibold capitalize'>{item.title}</h3>
              <p className='!mt-0 font-normal'>{item.location}</p>
              <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
                {item.description}
              </p>
              <div className='flex flex-col items-center justify-between gap-1 text-center sm:flex-row'>
                {item.githubUrl && (
                  <Link
                    href={item.githubUrl}
                    className='text-blue-500 underline'
                  >
                    Github
                  </Link>
                )}
                {item.demoUrl && (
                  <Link href={item.demoUrl} className='text-blue-500 underline'>
                    Demo({item.metaData})
                  </Link>
                )}
              </div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
