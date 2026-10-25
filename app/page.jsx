import Link from "next/link";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import { Button } from "@/components/ui/button";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import Stats from "@/components/Stats";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb } from "react-icons/si";

const techStack = [
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <SiMongodb />, name: "MongoDB" },
];

const Home = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-16">
      <div className="container mx-auto px-4 sm:px-6 h-full">
        
        {/* Hero Main Grid */}
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-12 gap-12 xl:gap-8">

          {/* text content */}
          <div className="text-center xl:text-left order-1 xl:order-none max-w-2xl">
            
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#232329] border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-xs sm:text-sm text-white/80 font-medium">Available for Full-Stack Roles & Freelance</span>
            </div>

            <span className="text-xl sm:text-2xl text-white/90 font-light block mb-2">Full-Stack Software Engineer</span>
            
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
              Hi, I'm <span className="text-accent">Olubiyi Oluwatise</span>
            </h1>

            <p className="max-w-[540px] mb-8 text-white/70 mx-auto xl:mx-0 text-base sm:text-lg leading-relaxed">
              I specialize in architecting high-performance web applications, scalable backend microservices, and cross-platform mobile experiences with clean code and modern UIs.
            </p>

            {/* CTA Buttons & Socials */}
            <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4 mb-10">
              <Link href="/work">
                <Button className="bg-accent hover:bg-accent-hover text-primary font-semibold px-8 py-6 rounded-xl flex items-center gap-2 w-full sm:w-auto">
                  <span>Explore Work</span>
                  <FiArrowRight className="text-xl" />
                </Button>
              </Link>

              <Link href="/assets/resume/olubiyi-oluwatise-cv.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 hover:border-accent text-white px-8 py-6 rounded-xl uppercase flex items-center gap-2 w-full sm:w-auto"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center xl:justify-start gap-6">
              <span className="text-xs text-white/40 uppercase tracking-widest font-medium">Follow me</span>
              <div className="h-[1px] w-12 bg-white/10"></div>
              <Social
                containerStyles="flex gap-4"
                iconStyles="w-10 h-10 border border-white/10 bg-[#232329] rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-300"
              />
            </div>

          </div>

          {/* photo */}
          <div className="order-2 xl:order-none my-4 xl:my-0">
            <Photo />
          </div>

        </div>

        {/* Tech Stack Bar / Ticker section */}
        <div className="mt-12 pt-12 border-t border-white/10">
          <p className="text-center xl:text-left text-xs uppercase tracking-widest text-white/40 mb-6 font-semibold">
            Core Technologies & Stack
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#232329]/50 border border-white/5 hover:border-accent/40 transition-all duration-300 group"
              >
                <span className="text-xl text-accent group-hover:scale-110 transition-transform">{tech.icon}</span>
                <span className="text-xs sm:text-sm font-medium text-white/80">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Stats Counter Section */}
      <div className="mt-16">
        <Stats />
      </div>
    </section>
  );
};

export default Home;