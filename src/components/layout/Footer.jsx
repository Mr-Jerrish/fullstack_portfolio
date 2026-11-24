import React from "react";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
        w-full border-t border-slate-200
        bg-white px-4 py-2
        transition-colors duration-300
        dark:border-slate-800 dark:bg-[#070a12]
        sm:px-6 sm:py-2
        md:px-8
        lg:px-12 lg:py-3
        xl:px-16
        2xl:px-20
      "
    >
      <div
        className="
          mx-auto flex w-full max-w-7xl
          flex-col items-center justify-between
          gap-4
          sm:flex-row sm:gap-6
          2xl:max-w-[1440px]
        "
      >
        {/* Left Side */}
        <div className="flex min-w-0 flex-col items-center gap-1 text-center sm:items-start sm:text-left">
          <a
            href="/#home"
            aria-label="Go to homepage"
            className="transition-opacity hover:opacity-80"
          >
            <span className="text-base font-bold tracking-wide text-slate-900 dark:text-white sm:text-lg">
              SHEIK
              <span className="text-blue-500">.DEV</span>
            </span>
          </a>

          <p className="text-[10px] leading-relaxed text-slate-500 dark:text-slate-400 sm:text-xs">
            © 2026 Sheik Mohamed Anzar. All rights reserved.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center gap-4 sm:gap-5 md:gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/Mr-Jerrish"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="
              rounded-lg p-2
              text-slate-500
              transition-all duration-200
              hover:bg-blue-50 hover:text-blue-600
              dark:text-slate-400
              dark:hover:bg-blue-500/10
              dark:hover:text-blue-400
            "
          >
            <FaGithub className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/sheik07"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="
              rounded-lg p-2
              text-slate-500
              transition-all duration-200
              hover:bg-blue-50 hover:text-blue-600
              dark:text-slate-400
              dark:hover:bg-blue-500/10
              dark:hover:text-blue-400
            "
          >
            <FaLinkedin className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
          </a>

          {/* Divider */}
          <div className="h-5 w-px bg-slate-200 dark:bg-slate-800" />

          {/* Back To Top */}
          <a
            href="/#home"
            className="
              group flex items-center gap-1.5
              rounded-lg px-2 py-2
              text-[11px] font-semibold
              text-slate-500
              transition-all duration-200
              hover:bg-blue-50 hover:text-blue-600
              dark:text-slate-400
              dark:hover:bg-blue-500/10
              dark:hover:text-blue-400
              sm:text-xs
            "
          >
            Back to top
            <ArrowUp
              size={14}
              className="transition-transform duration-200 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
