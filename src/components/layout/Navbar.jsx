import React, { useState } from "react";
import { Button } from "../ui/button";
import { SunMedium, Moon, Download, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", path: "/#home" },
  { name: "About", path: "/#about" },
  { name: "Skills", path: "/#skills" },
  { name: "Experience", path: "/#experience" },
  { name: "Projects", path: "/#projects" },
  { name: "Contact", path: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-xl transition-colors duration-300 dark:border-slate-800 dark:bg-[#070a12]/90">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-10 xl:px-16 2xl:px-20">
        {/* LOGO */}
        <a
          href="/#home"
          onClick={closeMenu}
          aria-label="Sheik Dev Home"
          className="shrink-0"
        >
          <span className="text-lg font-bold tracking-wide text-[#101525] dark:text-[#f5f7ff] sm:text-xl">
            SHEIK
            <span className="text-[#79a3ff]">.DEV</span>
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-4 lg:flex xl:gap-6 2xl:gap-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="whitespace-nowrap text-xs font-semibold text-slate-500 transition-colors duration-200 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 xl:text-sm"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Theme Toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={handleTheme}
            aria-label="Toggle color theme"
            title="Toggle theme"
            className="shrink-0 rounded-lg"
          >
            {resolvedTheme === "dark" ? (
              <SunMedium size={18} />
            ) : (
              <Moon size={18} />
            )}
          </Button>

          {/* Resume */}
          <a
            href="/MERN_Stack_Developer.pdf"
            download="Sheik_Mohamed_Anzar_Resume.pdf"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 xl:text-sm"
          >
            <Download size={15} />
            Resume
          </a>
        </div>

        {/* MOBILE / TABLET ACTIONS */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Theme Toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={handleTheme}
            aria-label="Toggle color theme"
            title="Toggle theme"
            className="h-9 w-9 rounded-lg"
          >
            {resolvedTheme === "dark" ? (
              <SunMedium size={17} />
            ) : (
              <Moon size={17} />
            )}
          </Button>

          {/* Menu Toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="h-9 w-9 rounded-lg"
          >
            {isOpen ? <X size={19} /> : <Menu size={19} />}
          </Button>
        </div>
      </div>

      {/* MOBILE / TABLET MENU */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-slate-200 transition-all duration-300 ease-in-out dark:border-slate-800 lg:hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-[1800px] flex-col gap-1 px-4 py-3 sm:px-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Resume */}
          <a
            href="/MERN_Stack_Developer.pdf"
            download="Sheik_Mohamed_Anzar_Resume.pdf"
            onClick={closeMenu}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            <Download size={16} />
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
