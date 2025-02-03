'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: '01',
    title: 'Khanbogd Cashmere SCM',
    description:
      'A specialized system for managing and tracking cashmere production and manufacturing resources, optimizing supply chain efficiency and resource allocation.',
    stack: [
      { name: 'Express.js' },
      { name: 'GraphQL' },
      { name: 'Sequelize' },
      { name: 'PostgreDB' },
      { name: 'Next.js' },
      { name: 'React' },
      { name: 'Tailwind.css' },
    ],
    image: '/assets/work/project1.jpg',
    live: 'https://cashmere.everestapp.mn/',
    github: '',
  },
  {
    num: '02',
    title: 'Cashmere Tracking App',
    description:
      'A mobile app that scans QR codes on cashmere sacks to fulfill tracking information, access historical tracking data, and retrieve detailed cashmere information.',
    stack: [{ name: 'React Native' }, { name: 'Expo' }, { name: 'GraphQL' }],
    image: '/assets/work/project2.jpg',
    live: 'https://apps.apple.com/mn/app/nutag-by-ezen/id6740554003',
    github: '',
  },
  {
    num: '03',
    title: 'Government Portal Website',
    description:
      'A centralized portal providing comprehensive information on government services, news, employee directories, discussions, and request management.',
    stack: [
      { name: 'Express.js' },
      { name: 'GraphQL' },
      { name: 'Sequelize' },
      { name: 'PostgreDB' },
      { name: 'Next.js' },
      { name: 'SEO' },
      { name: 'Tailwind.css' },
    ],
    image: '/assets/work/project3.jpg',
    live: 'https://www.gov.mn/en',
    github: '',
  },
  {
    num: '04',
    title: 'Nice Leasing',
    description:
      'An advanced fintech loan app offering seamless online contract execution, streamlining the borrowing process and eliminating the need for time-consuming branch visits.',
    stack: [
      { name: 'React Native' },
      { name: 'Tailwind.css' },
      { name: 'Typescript' },
    ],
    image: '/assets/work/project4.jpg',
    live: 'https://apps.apple.com/mn/app/nice-leasing/id6739874097',
    github: '',
  },
  {
    num: '05',
    title: 'Tamir DMB',
    description:
      'An advanced fintech loan app offering seamless online contract execution, streamlining the borrowing process and eliminating the need for time-consuming branch visits.',
    stack: [
      { name: 'React Native' },
      { name: 'Tailwind.css' },
      { name: 'Typescript' },
    ],
    image: '/assets/work/project5.jpg',
    live: 'https://apps.apple.com/mn/app/tamir/id6596741060',
    github: '',
  },
  {
    num: '06',
    title: 'Spacetime',
    description:
      'A location-based mobile app for employees to register work hours and submit work requests. Managers can efficiently oversee and manage their teams, enhancing productivity and coordination.',
    stack: [{ name: 'Xamarin Forms' }, { name: '.NET' }, { name: 'C#' }],
    image: '/assets/work/project6.jpg',
    live: 'https://apps.apple.com/mn/app/spacetime-mn/id6446931509',
    github: '',
  },
  {
    num: '07',
    title: 'RedRock Catering',
    description:
      'A specialized app for mine workers to book restrooms and pre-order meals, ensuring convenience and efficiency in remote work environments.',
    stack: [{ name: 'Xamarin Forms' }, { name: '.NET' }, { name: 'C#' }],
    image: '/assets/work/project10.jpg',
    live: 'https://play.google.com/store/apps/details?id=mn.everestsolution.rrc',
    github: '',
  },
  {
    num: '08',
    title: 'Khanguud',
    description:
      'An advanced fintech loan app offering seamless online contract execution, streamlining the borrowing process and eliminating the need for time-consuming branch visits.',
    stack: [{ name: '.NET MAUI' }, { name: 'C#' }],
    image: '/assets/work/project7.jpg',
    live: 'https://apps.apple.com/mn/app/khanguud/id6471460747',
    github: '',
  },
  {
    num: '09',
    title: 'Unipay',
    description:
      'An advanced fintech loan app offering seamless online contract execution, streamlining the borrowing process and eliminating the need for time-consuming branch visits.',
    stack: [{ name: '.NET MAUI' }, { name: 'C#' }],
    image: '/assets/work/project9.jpg',
    live: 'https://apps.apple.com/mn/app/unipay-mn/id6460586807',
    github: '',
  },
  {
    num: '10',
    title: 'Easy Fintech',
    description:
      'An advanced fintech loan app offering seamless online contract execution, streamlining the borrowing process and eliminating the need for time-consuming branch visits.',
    stack: [{ name: '.NET MAUI' }, { name: 'C#' }],
    image: '/assets/work/project8.jpg',
    live: 'https://apps.apple.com/mn/app/easy-fintech/id6473011080',
    github: '',
  },
  {
    num: '11',
    title: 'TCash.mn',
    description:
      'An advanced fintech loan app offering seamless online contract execution, streamlining the borrowing process and eliminating the need for time-consuming branch visits.',
    stack: [{ name: '.NET MAUI' }, { name: 'C#' }],
    image: '/assets/work/project11.jpg',
    live: 'https://apps.apple.com/mn/app/tcash-mn/id6448323144',
    github: '',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="flex min-h-[80vh] flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="order-2 flex w-full flex-col xl:order-none xl:h-[460px] xl:w-[50%] xl:justify-between">
            <div className="flex h-[50%] flex-col gap-[30px]">
              <div className="text-outline text-8xl font-extrabold leading-none text-transparent">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold capitalize leading-none text-white transition-all duration-500 group-hover:text-accent">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/5">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/5">
                          <BsGithub className="text-3xl text-white group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="group relative flex h-[460px] items-center justify-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute bottom-0 top-0 z-10 h-full w-full bg-black/10"></div>
                      {/* image */}
                      <div className="relative h-full w-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
