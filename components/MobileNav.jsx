"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "@/components/ui/button";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center p-2 focus:outline-none">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      
      <SheetContent className="flex flex-col justify-between py-12 px-8 bg-[#1c1c22] border-l border-white/10">
        
        {/* Top Logo */}
        <div className="mt-8 text-center">
          <SheetClose asChild>
            <Link href="/">
              <h1 className="text-3xl font-bold tracking-tight text-white">
                Oluwatise<span className="text-accent">.</span>
              </h1>
            </Link>
          </SheetClose>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col justify-center items-center gap-6 my-auto">
          {links.map((link, index) => {
            const isActive = link.path === pathname;
            return (
              <SheetClose asChild key={index}>
                <Link
                  href={link.path}
                  className={`${
                    isActive
                      ? "text-accent border-b-2 border-accent pb-1 font-semibold"
                      : "text-white/80 hover:text-accent font-medium"
                  } text-xl capitalize transition-all duration-300`}
                >
                  {link.name}
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        {/* Bottom CTA Button */}
        <div className="w-full flex justify-center pb-4">
          <SheetClose asChild>
            <Link href="/contact" className="w-full">
              <Button className="w-full bg-accent hover:bg-accent-hover text-primary font-semibold py-6 rounded-xl">
                Hire me
              </Button>
            </Link>
          </SheetClose>
        </div>

      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;