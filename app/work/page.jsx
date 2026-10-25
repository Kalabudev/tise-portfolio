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

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "full-stack",
    title: "E-Commerce Marketplace",
    description:
      "A high-performance multi-vendor e-commerce platform featuring secure payment processing, automated split escrow, and a comprehensive admin management dashboard.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Node.js" }, { name: "MongoDB" }],
    image: "/assets/work/thumb1.png",
    live: "https://shopstero.com",
    github: "https://github.com",
  },
  {
    num: "02",
    category: "full-stack",
    title: "SaaS Analytics Dashboard",
    description:
      "A feature-rich analytics platform providing real-time data visualization, user activity tracking, role-based access control, and dynamic metric reporting.",
    stack: [{ name: "React" }, { name: "TypeScript" }, { name: "Tailwind CSS" }, { name: "Express" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "Modern Portfolio & Blog",
    description:
      "An immersive, dark-themed personal portfolio and developer blog built with fluid animations, optimized asset loading, and responsive layouts.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Framer Motion" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
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
        transition: { delay: 0.1, duration: 0.3, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-8 xl:py-12 xl:px-0"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] gap-8">
          
          {/* Swiper Image Container (Top on mobile for immediate visual context) */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] relative"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[280px] sm:h-[360px] xl:h-[460px] relative group flex justify-center items-center bg-[#232329] rounded-xl overflow-hidden border border-white/5">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-4 xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none px-4 xl:px-0"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-md transition-all"
              />
            </Swiper>
          </div>

          {/* Project Info Container */}
          <div className="w-full xl:w-[50%] flex flex-col justify-between">
            <div className="flex flex-col gap-5 sm:gap-[24px]">
              {/* outline num & Title */}
              <div className="flex items-baseline gap-4">
                <div className="text-6xl sm:text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold leading-tight text-white capitalize">
                  {project.title}
                </h2>
              </div>

              {/* project category subhead */}
              <p className="text-accent text-sm sm:text-base font-medium uppercase tracking-wider">
                {project.category} project
              </p>

              {/* project description */}
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              {/* stack list - clean responsive pills */}
              <ul className="flex flex-wrap gap-2 sm:gap-3 my-1">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-xs sm:text-sm text-accent bg-[#232329] px-3 py-1.5 rounded-lg border border-white/5 font-medium"
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border-b border-white/10 w-full my-1"></div>

              {/* action buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.live || "#"} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] rounded-full bg-white/5 border border-white/10 flex justify-center items-center group hover:border-accent transition-all duration-300">
                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent transition-all duration-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github || "#"} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] rounded-full bg-white/5 border border-white/10 flex justify-center items-center group hover:border-accent transition-all duration-300">
                        <BsGithub className="text-white text-2xl group-hover:text-accent transition-all duration-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Work;