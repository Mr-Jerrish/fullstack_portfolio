import {
  ArrowRight,
  Download,
  Mail,
  BriefcaseBusiness,
  Layers,
  Code2,
  Sparkles,
} from "lucide-react";

import { SiReact, SiJavascript, SiNodedotjs, SiMongodb } from "react-icons/si";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { Button } from "@/components/ui/button";

// Developer image
const img = "/img1.png";

// Social Links
const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Mr-Jerrish",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sheik07",
    icon: FaLinkedinIn,
  },
  {
    name: "Email",
    href: "mailto:sheikmohamedanzar@gmail.com",
    icon: Mail,
  },
];

// Statistics
const stats = [
  {
    id: 1,
    icon: BriefcaseBusiness,
    value: "1.6+",
    label: "Years Professional Experience",
  },
  {
    id: 2,
    icon: Layers,
    value: "2",
    label: "Professional Experiences",
  },
  {
    id: 3,
    icon: Code2,
    value: "2",
    label: "Featured Projects",
  },
  {
    id: 4,
    icon: Sparkles,
    value: "MERN",
    label: "Full-Stack Development",
  },
];

// Technology badges
const technologies = [
  {
    name: "React",
    icon: SiReact,
    color: "text-cyan-500",
    position: "left-0 top-[12%] sm:-left-5",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-500",
    position: "right-0 top-[30%] sm:-right-5",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-emerald-500",
    position: "left-0 bottom-[25%] sm:-left-5",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-green-500",
    position: "right-0 bottom-[12%] sm:-right-5",
  },
];

const Home = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section
        id="home"
        aria-labelledby="hero-title"
        className="
          relative isolate overflow-hidden
          border-b border-slate-200
          bg-[#f7f8fc] text-slate-900
          transition-colors duration-300
          dark:border-slate-800
          dark:bg-[#070a12] dark:text-white
        "
      >
        {/* Background Effects */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -left-32 top-10
            h-64 w-64 rounded-full
            bg-blue-500/10 blur-[100px]
            sm:h-80 sm:w-80 sm:blur-[120px]
            2xl:h-[500px] 2xl:w-[500px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -right-32 bottom-0
            h-72 w-72 rounded-full
            bg-purple-500/10 blur-[110px]
            sm:h-96 sm:w-96 sm:blur-[130px]
            2xl:h-[550px] 2xl:w-[550px]
          "
        />

        {/* Main Container */}
        <div
          className="
            relative mx-auto grid
            w-full max-w-7xl
            grid-cols-1 items-center
            gap-12 px-5
            pb-16 pt-18 

            sm:px-8 sm:pb-20 sm:pt-32
            md:gap-14
            lg:grid-cols-2 lg:gap-12
            lg:px-12 lg:py-24
            xl:max-w-[1400px] xl:gap-20
            xl:px-16
            2xl:max-w-[1700px]
            2xl:gap-28 2xl:px-24
            2xl:py-32
          "
        >
          {/* ================= LEFT CONTENT ================= */}

          <div className="flex min-w-0 flex-col items-start gap-5">
            {/* Availability Badge */}
            <div
              className="
                inline-flex max-w-full items-center gap-2
                rounded-full border border-emerald-500/20
                bg-emerald-500/5 px-3 py-2
              "
            >
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-500" />

              <span
                className="
                  text-[9px] font-semibold uppercase
                  tracking-wider text-emerald-600
                  dark:text-emerald-400
                  sm:text-[10px]
                "
              >
                Available for immediate joining
              </span>
            </div>

            {/* Introduction */}
            <div className="w-full space-y-3">
              <p
                className="
                  text-xs font-medium text-blue-600
                  dark:text-blue-400
                  sm:text-sm
                  2xl:text-base
                "
              >
                Hi, I'm Sheik Mohamed Anzar
              </p>

              <h1
                id="hero-title"
                className="
                  text-4xl font-extrabold
                  leading-[1.08] tracking-tight
                  sm:text-5xl
                  md:text-6xl
                  lg:text-5xl
                  xl:text-6xl
                  2xl:text-8xl
                "
              >
                MERN Stack
                <span
                  className="
                    block bg-gradient-to-r
                    from-blue-600 via-indigo-500
                    to-purple-600 bg-clip-text
                    text-transparent
                  "
                >
                  Developer.
                </span>
              </h1>

              <h2
                className="
                  text-xs font-medium
                  text-slate-700 dark:text-slate-300
                  sm:text-sm md:text-base
                  2xl:text-xl
                "
              >
                React.js Developer
                <span className="mx-2 text-slate-400">/</span>
                Frontend Engineer
              </h2>
            </div>

            {/* Description */}
            <p
              className="
                max-w-xl text-xs leading-6
                text-slate-500 dark:text-slate-400
                sm:text-sm sm:leading-7
                lg:text-sm
                2xl:max-w-2xl 2xl:text-base
                2xl:leading-8
              "
            >
              I build modern, scalable and responsive web applications using
              React.js, Node.js, Express.js and MongoDB. Passionate about clean
              interfaces and efficient backend solutions.
            </p>

            {/* Action Buttons */}
            <div
              className="
                flex w-full flex-wrap items-center
                gap-3 pt-1
                sm:w-auto
              "
            >
              {/* Projects */}
              <Button
                asChild
                className="
                  h-10 rounded-xl
                  bg-gradient-to-r from-blue-600 to-indigo-600
                  px-4 text-[11px] font-semibold text-white
                  shadow-lg shadow-blue-500/20
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-blue-500/40
                  sm:h-11 sm:px-5 sm:text-xs
                  2xl:h-14 2xl:px-7 2xl:text-sm
                "
              >
                <a href="/#projects" className="flex items-center gap-2">
                  View My Projects
                  <ArrowRight size={16} />
                </a>
              </Button>

              {/* Resume */}
              <Button
                asChild
                variant="outline"
                className="
                  h-10 rounded-xl
                  border-slate-300 bg-white
                  px-4 text-[11px] font-semibold
                  text-slate-900 transition-all
                  hover:border-blue-500 hover:bg-slate-100
                  dark:border-slate-700 dark:bg-slate-900
                  dark:text-white dark:hover:bg-slate-800
                  sm:h-11 sm:px-5 sm:text-xs
                  2xl:h-14 2xl:px-7 2xl:text-sm
                "
              >
                <a
                  href="../../public/MERN_Stack_Developer.pdf"
                  download="Sheik_Mohamed_Anzar_Resume.pdf"
                  className="flex items-center gap-2"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span
                className="
                  mr-1 text-[9px] font-bold
                  tracking-[0.2em] text-slate-500
                "
              >
                CONNECT
              </span>

              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target={name === "Email" ? undefined : "_blank"}
                  rel={name === "Email" ? undefined : "noopener noreferrer"}
                  aria-label={`Visit my ${name}`}
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-lg border border-slate-200
                    bg-white text-slate-600
                    transition-all duration-300
                    hover:-translate-y-1 hover:border-blue-500
                    hover:text-blue-600 hover:shadow-md
                    dark:border-slate-800 dark:bg-slate-900
                    dark:text-slate-300
                    dark:hover:text-blue-400
                    2xl:h-11 2xl:w-11
                  "
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}

          <div
            className="
              relative mx-auto flex w-full
              max-w-[400px] items-center justify-center
              px-4
              sm:max-w-[460px]
              lg:max-w-none lg:px-5
              xl:px-8
              2xl:px-12
            "
          >
            {/* Background Glow */}
            <div
              className="
                absolute h-64 w-64 rounded-full
                bg-blue-500/20 blur-[90px]
                sm:h-80 sm:w-80
                lg:h-96 lg:w-96
                2xl:h-[550px] 2xl:w-[550px]
              "
            />

            {/* Image Container */}
            <div
              className="
                relative w-full overflow-hidden
                rounded-[1.5rem]
                border border-blue-500/20
                bg-slate-950 p-1.5
                shadow-2xl shadow-blue-900/30
                transition-transform duration-500
                hover:-translate-y-2
                sm:rounded-[2rem] sm:p-2
              "
            >
              <img
                src={img}
                alt="MERN Stack Developer workspace illustration"
                loading="eager"
                className="
                  aspect-[4/5] w-full
                  rounded-[1.2rem] object-cover
                  sm:rounded-[1.5rem]
                "
              />
            </div>

            {/* Floating Technology Badges */}
            {technologies.map(({ name, icon: Icon, color, position }) => (
              <div
                key={name}
                className={`
                  absolute ${position}
                  flex items-center gap-1.5
                  rounded-lg border border-slate-700
                  bg-slate-900/95 px-2 py-2
                  text-[10px] font-semibold
                  shadow-xl backdrop-blur-md
                  transition-transform duration-300
                  hover:scale-105
                  sm:gap-2 sm:px-3
                  sm:text-xs
                  2xl:px-4 2xl:py-3
                  2xl:text-sm
                `}
              >
                <Icon size={14} className={`${color} shrink-0`} />
                <span className={color}>{name}</span>
              </div>
            ))}

            {/* Bottom Info */}
            <div
              className="
                absolute -bottom-5 left-5
                max-w-[calc(100%-2.5rem)]
                rounded-xl border border-slate-700
                bg-slate-900/95 px-3 py-2.5
                shadow-xl backdrop-blur-md
                sm:left-8 sm:px-4 sm:py-3
                2xl:bottom-[-2rem] 2xl:left-12
              "
            >
              <p className="text-[9px] uppercase tracking-wider text-slate-400">
                Currently building
              </p>

              <p className="mt-1 text-[11px] font-bold text-white sm:text-xs">
                Production-ready apps
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATISTICS SECTION ================= */}

      <section
        className="
          border-b border-slate-200
          bg-[#eef1f8]
          transition-colors duration-300
          dark:border-slate-800 dark:bg-[#0b1020]
        "
      >
        <div
          className="
            mx-auto grid max-w-7xl
            grid-cols-2
            sm:grid-cols-2
            md:grid-cols-4
            xl:max-w-[1400px]
            2xl:max-w-[1700px]
          "
        >
          {stats.map(({ id, icon: Icon, value, label }) => (
            <div
              key={id}
              className="
                flex min-w-0 flex-col gap-2
                border-slate-300 px-4 py-5
                transition-colors
                hover:bg-white/50
                dark:border-slate-800
                dark:hover:bg-white/5
                sm:px-7 sm:py-6
                md:border-r
                md:last:border-r-0
                xl:px-10 xl:py-8
                2xl:px-14 2xl:py-10
              "
            >
              <Icon size={18} className="text-blue-600 dark:text-blue-400" />

              <h3
                className="
                  text-xl font-bold tracking-tight
                  text-slate-900 dark:text-white
                  sm:text-2xl
                  2xl:text-4xl
                "
              >
                {value}
              </h3>

              <p
                className="
                  text-[8px] font-medium uppercase
                  leading-4 tracking-wider
                  text-slate-500 dark:text-slate-400
                  sm:text-[9px]
                  2xl:text-xs
                "
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
