import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-6 xl:py-10 text-white border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Oluwatise<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent-hover text-primary font-medium px-6 py-2.5 rounded-full transition-all">
              Hire me
            </Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;