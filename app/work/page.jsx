"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Image from "next/image";
import Link from "next/link";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "ProShop (ECommerce App)",
    description:
      "A MERN stack e-commerce app to provide a seamless online shopping experience. It manages products, user authentication, orders, and payments, ensuring efficient performance and a user-friendly interface.",
    stack: [
      { name: "MongoDB" },
      { name: "ExpressJS" },
      { name: "ReactJS" },
      { name: "NodeJS" },
      { name: "Redux" },
    ],
    image: "/assets/work/ProShop.png",
    live: "https://proshop-eizm.onrender.com",
    github: "https://github.com/Nonganba/proshop",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "ShareMe (Online Pic Sharing App)",
    description:
      "A mesmerizing single-page social media web app, where the user can create a post, save a post and comment on a post to interact with other users. User can also search a post based on the post name or category name.",
    stack: [
      { name: "ReactJS" },
      { name: "TailwindCSS" },
      { name: "Sanity (CMS)" },
    ],
    image: "/assets/work/shareme.png",
    live: "https://nongpok-share-me.netlify.app/",
    github: "https://github.com/Nonganba/share-me-app",
  },
  {
    num: "03",
    category: "frontend",
    title: "Shoppy (Ecommerce Dashboard App)",
    description:
      "An Ecommerce Admin Dashboard App with Theming (light and dark with multiple color options), Tables, Charts, Calendar, Kanban, Text Editor and more. Additional features include Pagination, Profile, Cart and Notification section.",
    stack: [
      { name: "ReactJS" },
      { name: "TailwindCSS" },
      { name: "Syncfusion" },
    ],
    image: "/assets/work/shoppy.png",
    live: "https://nongpok-shoppy.netlify.app/",
    github: "https://github.com/Nonganba/shoppy-dashboard",
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
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-6xl leading-none text-transparent font-extrabold text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live buttons */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </a>
                {/* github repo button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-contain"
                          alt=""
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
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
