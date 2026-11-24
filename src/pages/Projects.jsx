import React from "react";
import { CheckCircle2 } from "lucide-react";

const projectsData = [
  {
    id: 1,
    category: "Enterprise Business Application",
    title: "Warehouse Management System",
    description:
      "An enterprise warehouse management application designed to manage inventory operations, GRN, putaway processes, and warehouse workflows.",
    skills: [
      "React.js",
      "JavaScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "shadcn/ui",
      "React Hook Form",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    highlights: [
      "Developed reusable and responsive UI components.",
      "Implemented dynamic forms with React Hook Form and Zod.",
      "Integrated REST APIs using Axios.",
      "Managed application state using Redux Toolkit.",
      "Worked on GRN, Putaway and Inventory modules.",
    ],
    type: "Professional Project",
  },
  {
    id: 2,
    category: "MERN Stack Full-Stack Application",
    title: "Expense Tracker",
    description:
      "A full-stack expense management application to track transactions, analyze spending patterns, and manage financial activities.",
    skills: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Redux Toolkit",
      "Chart.js",
    ],
    highlights: [
      "Implemented secure authentication using JWT.",
      "Developed REST APIs using Node.js and Express.js.",
      "Integrated MongoDB for expense management.",
      "Created interactive financial charts and reports.",
      "Implemented transaction management and filtering.",
    ],
    type: "Personal Project",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        w-full overflow-hidden
        bg-[#eff2f8] dark:bg-[#0b101c]
        px-4 py-16
        transition-colors duration-300
        sm:px-6 sm:py-20
        md:px-8
        lg:px-10 lg:py-24
        xl:px-14
        2xl:px-20
      "
    >
      {/* Main Container */}
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Section Heading */}
        <div className="mb-8 max-w-2xl sm:mb-10 lg:mb-12">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400 sm:text-xs">
            Selected Work
          </p>

          <h2
            className="
            mb-3
            text-2xl font-semibold tracking-tight
            text-slate-900 dark:text-white
            sm:text-3xl
            md:text-4xl
            xl:text-5xl
          "
          >
            Featured projects.
          </h2>

          <p
            className="
            max-w-xl
            text-xs leading-6
            text-slate-600 dark:text-slate-400
            sm:text-sm sm:leading-7
            lg:text-base
          "
          >
            A closer look at the systems, interfaces and business workflows I
            have built.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className="
          grid grid-cols-1 items-stretch gap-4
          sm:gap-5
          md:grid-cols-2 md:gap-5
          lg:gap-6
          xl:gap-7
          2xl:gap-8
        "
        >
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="
                group flex h-full min-w-0 flex-col
                rounded-xl border
                border-slate-200 bg-white
                p-4 shadow-sm

                transition-all duration-300
                hover:-translate-y-1
                hover:border-blue-400/50
                hover:shadow-xl hover:shadow-blue-500/5

                dark:border-slate-800
                dark:bg-[#0e1422]
                dark:hover:border-blue-500/40

                sm:rounded-2xl sm:p-5
                lg:p-6
                xl:p-7
                2xl:p-8
              "
            >
              {/* Project Header */}
              <div
                className="
                mb-4 flex flex-col items-start gap-3
                sm:flex-row sm:items-start sm:justify-between
              "
              >
                <div className="min-w-0 flex-1">
                  <p
                    className="
                    mb-2 text-[9px] font-semibold uppercase
                    tracking-[0.15em]
                    text-blue-600 dark:text-blue-400
                    sm:text-[10px] sm:tracking-widest
                  "
                  >
                    {project.category}
                  </p>

                  <h3
                    className="
                    break-words
                    text-base font-semibold
                    text-slate-900 dark:text-white
                    sm:text-lg
                    xl:text-xl
                  "
                  >
                    {project.title}
                  </h3>
                </div>

                <span
                  className="
                  inline-flex shrink-0 items-center
                  rounded-full border
                  border-emerald-200 bg-emerald-50
                  px-2.5 py-1
                  text-[9px] font-semibold
                  text-emerald-700

                  dark:border-emerald-500/30
                  dark:bg-emerald-500/10
                  dark:text-emerald-400
                "
                >
                  {project.type}
                </span>
              </div>

              {/* Description */}
              <p
                className="
                mb-5
                text-xs leading-6
                text-slate-600 dark:text-slate-400
                sm:text-sm sm:leading-7
              "
              >
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-5">
                <p
                  className="
                  mb-3 text-xs font-semibold
                  text-slate-800 dark:text-slate-200
                  sm:text-sm
                "
                >
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        inline-flex min-h-8 max-w-full
                        items-center justify-center
                        rounded-lg border
                        border-slate-200 bg-slate-50
                        px-2.5 py-1.5
                        text-[10px] font-medium
                        text-slate-700
                        transition-colors duration-200
                        hover:border-blue-400/50
                        hover:bg-blue-50

                        dark:border-slate-700
                        dark:bg-slate-800/70
                        dark:text-slate-300
                        dark:hover:border-blue-500/40
                        dark:hover:bg-blue-500/10

                        sm:px-3 sm:text-xs
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div
                className="
                mb-5 h-px w-full
                bg-slate-200 dark:bg-slate-800
              "
              />

              {/* Highlights */}
              <div className="flex-1">
                <p
                  className="
                  mb-3 text-xs font-semibold
                  text-slate-800 dark:text-slate-200
                  sm:text-sm
                "
                >
                  Key Highlights
                </p>

                <ul className="space-y-2.5">
                  {project.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="
                        flex items-start gap-2
                        text-[11px] leading-5
                        text-slate-600 dark:text-slate-400
                        sm:text-xs sm:leading-6
                      "
                    >
                      <CheckCircle2
                        size={15}
                        className="
                          mt-0.5 shrink-0
                          text-blue-500
                        "
                      />

                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Footer */}
              <div
                className="
                mt-6 flex items-center justify-between
                border-t border-slate-200
                pt-4 dark:border-slate-800
              "
              >
                <span
                  className="
                  text-[10px] font-medium
                  text-slate-500 dark:text-slate-400
                  sm:text-xs
                "
                >
                  {project.type}
                </span>

                <span
                  className="
                  text-[10px] font-medium
                  text-blue-600 dark:text-blue-400
                  sm:text-xs
                "
                >
                  {String(project.id).padStart(2, "0")} / 02
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
