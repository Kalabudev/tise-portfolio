"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaServer,
  FaDatabase,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { TbBrandTypescript, TbBrandReactNative } from "react-icons/tb";

// about data
const about = {
  title: "About me",
  description:
    "Full-stack software engineer and computer science graduate focused on building scalable web applications, cross-platform mobile apps, and reliable backend systems.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Olubiyi Oluwatise",
    },
    {
      fieldName: "Phone",
      fieldValue: "+234 814 860 2296",
    },
    {
      fieldName: "Location",
      fieldValue: "Lagos, Nigeria",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "https://www.linkedin.com/in/oluwatise-olubiyi-2a4841218",
      href: "https://www.linkedin.com/in/oluwatise-olubiyi-2a4841218",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian",
    },
    {
      fieldName: "Email",
      fieldValue: "oluwatiseolubiyi@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Hands-on experience architecting multi-vendor platforms, full-stack web apps, mobile applications, and distributed backend services.",
  items: [
    {
      company: "Shopstero",
      position: "Founder & Full-Stack Engineer",
      duration: "Sep 2025 - Present",
    },
    {
      company: "Upwork",
      position: "Full-Stack Software Engineer",
      duration: "May 2026 - Present",
    },
    {
      company: "New Horizons Nigeria",
      position: "SIWES Industrial Trainee",
      duration: "2025 (22 Weeks)",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Undergraduate computer science education paired with practical systems engineering, networking, and full-stack software development.",
  items: [
    {
      institution: "Babcock University",
      degree: "B.Sc. (Hons) Computer Science",
      duration: "Graduated Jul 2026",
    },
    {
      institution: "New Horizons Nigeria",
      degree: "SIWES — Network+ & Security+ Track",
      duration: "2025",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Frontend, mobile, backend, and distributed systems technologies I use to build scalable, production-ready applications.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <TbBrandTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <TbBrandReactNative />,
      name: "React Native / Expo",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js & Express",
    },
    {
      icon: <FaServer />,
      name: "Microservices",
    },
    {
      icon: <FaDatabase />,
      name: "PostgreSQL & MongoDB",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.1, duration: 0.3, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto px-4 sm:px-0">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* Exact original top UI unchanged */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mx-auto w-full">
                  {experience.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[150px] sm:h-[184px] py-4 px-6 sm:px-10 rounded-xl flex flex-col justify-center items-center xl:items-start gap-1 w-full"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[40px] sm:min-h-[60px] text-center xl:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mx-auto w-full">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[150px] sm:h-[184px] py-4 px-6 sm:px-10 rounded-xl flex flex-col justify-center items-center xl:items-start gap-1 w-full"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[40px] sm:min-h-[60px] text-center xl:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[130px] xl:h-[155px] bg-[#232329] rounded-xl flex flex-col justify-center items-center gap-3 px-3 group">
                              <div className="text-4xl xl:text-5xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                              <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300 text-center">
                                {skill.name}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 xl:gap-y-6 max-w-[780px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex flex-wrap items-center justify-center xl:justify-start gap-2 sm:gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm sm:text-base xl:text-lg text-accent hover:underline break-all"
                          >
                            {item.fieldValue}
                          </a>
                        ) : (
                          <span className="text-base sm:text-lg xl:text-xl">
                            {item.fieldValue}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;