"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: '01',
        title: 'Web Development',
        description: 'Building high-performance, scalable, and responsive full-stack web applications using modern frameworks like Next.js and React.',
        href: ""
    },
    {
        num: '02',
        title: 'UI/UX Design',
        description: 'Crafting intuitive, accessible, and visually stunning user interfaces with meticulous attention to detail and user experience.',
        href: ""
    },
    {
        num: '03',
        title: 'Mobile App Dev',
        description: 'Developing cross-platform mobile applications for iOS and Android with smooth native performance using React Native and Expo.',
        href: ""
    },
    {
        num: '04',
        title: 'Backend & APIs',
        description: 'Architecting robust backend microservices, secure database schemas, efficient caching layers, and seamless payment integrations.',
        href: ""
    },
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 0, duration: 0.3, ease: "easeInOut" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[40px] xl:gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className="flex-1 flex flex-col justify-between gap-6 group p-6 sm:p-0 rounded-2xl bg-[#27272c]/40 sm:bg-transparent"
                            >
                                {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                        {service.num}
                                    </div>
                                    <Link
                                        href={service.href || "#"}
                                        className="w-[60px] h-[60px] xl:w-[70px] xl:h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                    >
                                        <BsArrowDownRight className="text-primary text-2xl xl:text-3xl" />
                                    </Link>
                                </div>
                                {/* title */}
                                <h2 className="text-3xl sm:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                    {service.title}
                                </h2>
                                {/* description */}
                                <p className="text-white/60 text-sm sm:text-base">{service.description}</p>
                                {/* border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;