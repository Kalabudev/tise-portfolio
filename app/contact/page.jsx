"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+234 810 568 2653",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "olubiyioluwatise@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Lagos, Nigeria",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.1, duration: 0.3, ease: "easeInOut" },
      }}
      className="py-8 xl:py-12"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col xl:flex-row gap-[30px] xl:gap-[50px]">
          
          {/* Form Container - order-1 on mobile so users see the form immediately */}
          <div className="w-full xl:w-[54%] order-1 xl:order-none">
            <form className="flex flex-col gap-6 p-6 sm:p-10 bg-[#27272c] rounded-2xl border border-white/5 shadow-xl">
              <h3 className="text-3xl sm:text-4xl text-accent font-bold">Let's work together</h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                Reach out to discuss new projects, full-stack development opportunities, or potential collaborations.
              </p>
              
              {/* inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Input type="text" placeholder="Firstname" className="bg-primary/40 border-white/10" />
                <Input type="text" placeholder="Lastname" className="bg-primary/40 border-white/10" />
                <Input type="email" placeholder="Email address" className="bg-primary/40 border-white/10" />
                <Input type="tel" placeholder="Phone number" className="bg-primary/40 border-white/10" />
              </div>

              {/* select */}
              <Select>
                <SelectTrigger className="w-full bg-primary/40 border-white/10">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-[#27272c] border-white/10 text-white">
                  <SelectGroup>
                    <SelectLabel className="text-accent">Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="ui">UI/UX Design</SelectItem>
                    <SelectItem value="mobile">Mobile App Dev</SelectItem>
                    <SelectItem value="backend">Backend & APIs</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}
              <Textarea
                className="h-[180px] sm:h-[200px] bg-primary/40 border-white/10 resize-none"
                placeholder="Type your message here."
              />

              {/* submit button */}
              <Button size="lg" className="w-full sm:max-w-[160px] uppercase font-medium tracking-wide">
                Send message
              </Button>
            </form>
          </div>

          {/* Info Container - order-2 on mobile */}
          <div className="w-full xl:flex-1 flex items-center xl:justify-end order-2 xl:order-none my-4 xl:my-0">
            <ul className="flex flex-col gap-6 sm:gap-10 w-full">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6 p-4 sm:p-0 bg-[#27272c]/40 sm:bg-transparent rounded-xl border border-white/5 sm:border-none">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] border border-white/10 text-accent rounded-xl flex items-center justify-center shrink-0">
                      <div className="text-xl sm:text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 text-xs sm:text-sm font-light uppercase tracking-wider">{item.title}</p>
                      <h3 className="text-base sm:text-xl font-medium text-white">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;