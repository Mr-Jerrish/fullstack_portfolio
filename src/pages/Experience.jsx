import React from "react";
import { MapPin, Check } from "lucide-react";

const experiences = [
  {
    id: 1,
    period: "Feb 2025 — Jul 2026",
    location: "Bengaluru, India",
    role: "Frontend Developer",
    company: "WhyDigit System Private Limited",
    type: "Full-time",
    description:
      "Developed responsive enterprise applications and scalable frontend workflows for business operations.",
    responsibilities: [
      "Developed dynamic and reusable UI components using React.js, TypeScript and Tailwind CSS.",
      "Implemented form validation using React Hook Form and Zod.",
      "Managed application state using Redux Toolkit.",
      "Integrated REST APIs using Axios with centralized error handling.",
      "Worked on WMS modules including GRN, Putaway and Inventory management.",
      "Collaborated with backend developers to resolve bugs and improve application performance.",
    ],
  },
  {
    id: 2,
    period: "Sep 2024 — Dec 2025",
    location: "Chennai, India",
    role: "MERN Stack Developer Intern",
    company: "FeOS Technologies Pvt. Ltd.",
    type: "Internship",
    description:
      "Worked on full-stack web development, responsive user interfaces and practical application development.",
    responsibilities: [
      "Developed responsive user interfaces using React.js and Tailwind CSS.",
      "Worked with Node.js and Express.js for backend development.",
      "Integrated REST APIs and handled application data.",
      "Worked with MongoDB for database operations.",
      "Improved frontend components and application usability.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="
        w-full overflow-hidden
        bg-[#f7f8fc]
        px-4 py-16
        transition-colors duration-300
        dark:bg-[#070a12]

        sm:px-6 sm:py-20
        md:px-8
        lg:px-12 lg:py-24
        xl:px-16
        2xl:px-20
      "
    >
      <div
        className="
          mx-auto w-full
          max-w-7xl
          2xl:max-w-[1600px]
        "
      >
        {/* Section Heading */}
        <div className="mb-8 max-w-2xl sm:mb-10 lg:mb-12 2xl:max-w-3xl">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400 sm:text-xs">
            Experience
          </p>

          <h2
            className="
            mb-3
            text-2xl font-semibold leading-tight tracking-tight
            text-slate-900 dark:text-white

            sm:text-3xl
            lg:text-4xl
            2xl:text-5xl
          "
          >
            Building for real business needs.
          </h2>

          <p
            className="
            max-w-xl
            text-xs leading-6
            text-slate-500 dark:text-slate-400

            sm:text-sm
            2xl:text-base
          "
          >
            Professional experience delivering responsive products and
            enterprise application workflows.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            className="
              absolute
              bottom-5 top-2
              left-[5px]
              w-px
              bg-slate-300
              dark:bg-slate-800

              sm:left-[6px]
              lg:left-[7px]
            "
          />

          {/* Experience Items */}
          <div className="space-y-7 sm:space-y-8 lg:space-y-10 2xl:space-y-12">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="
                  relative
                  grid grid-cols-1
                  gap-3 pl-7

                  sm:gap-4 sm:pl-8

                  md:grid-cols-[180px_minmax(0,1fr)]
                  md:gap-6 md:pl-0

                  lg:grid-cols-[200px_minmax(0,1fr)]
                  lg:gap-8

                  xl:grid-cols-[220px_minmax(0,1fr)]

                  2xl:grid-cols-[260px_minmax(0,1fr)]
                  2xl:gap-10
                "
              >
                {/* Timeline Dot */}
                <div
                  className="
                    absolute left-0 top-1.5 z-10
                    flex h-3 w-3
                    items-center justify-center
                    rounded-full
                    border border-blue-500
                    bg-[#f7f8fc]
                    dark:bg-[#070a12]

                    md:left-[1px]
                    lg:left-[2px]
                  "
                >
                  <div className="h-1 w-1 rounded-full bg-blue-500" />
                </div>

                {/* Date and Location */}
                <div
                  className="
                    min-w-0 pt-0.5

                    md:pl-8
                    lg:pl-10
                    2xl:pl-12
                  "
                >
                  <p
                    className="
                      inline-flex max-w-full
                      rounded-md
                      bg-blue-50
                      px-2 py-1
                      text-[9px] font-semibold
                      text-blue-700
                      dark:bg-blue-500/10
                      dark:text-blue-400

                      sm:text-[10px]
                      2xl:text-xs
                    "
                  >
                    {experience.period}
                  </p>

                  <div
                    className="
                      mt-2 flex items-center gap-1.5
                      text-[10px]
                      text-slate-500 dark:text-slate-400

                      2xl:text-xs
                    "
                  >
                    <MapPin size={12} className="shrink-0" />
                    <span>{experience.location}</span>
                  </div>
                </div>

                {/* Experience Card */}
                <article
                  className="
                    min-w-0
                    rounded-xl
                    border border-slate-200
                    bg-white
                    p-4
                    shadow-sm

                    transition-all duration-300

                    hover:-translate-y-1
                    hover:border-blue-400/50
                    hover:shadow-lg
                    hover:shadow-blue-500/5

                    dark:border-slate-800
                    dark:bg-[#0e1422]
                    dark:hover:border-blue-500/40

                    sm:rounded-2xl sm:p-5
                    lg:p-6
                    2xl:p-8
                  "
                >
                  {/* Card Header */}
                  <div
                    className="
                    flex flex-col items-start
                    justify-between gap-3

                    sm:flex-row sm:items-center
                  "
                  >
                    <div className="min-w-0">
                      <h3
                        className="
                        break-words
                        text-sm font-semibold
                        text-slate-900 dark:text-slate-100

                        sm:text-base
                        lg:text-lg
                        2xl:text-xl
                      "
                      >
                        {experience.role}
                      </h3>

                      <p
                        className="
                        mt-1 break-words
                        text-[11px] font-medium
                        text-blue-600 dark:text-blue-400

                        sm:text-xs
                        2xl:text-sm
                      "
                      >
                        {experience.company}
                      </p>
                    </div>

                    {/* Employment Type */}
                    <span
                      className="
                      inline-flex shrink-0
                      rounded-full
                      border border-emerald-200
                      bg-emerald-50
                      px-2.5 py-1
                      text-[9px] font-semibold
                      uppercase tracking-wide
                      text-emerald-700

                      dark:border-emerald-500/30
                      dark:bg-emerald-500/10
                      dark:text-emerald-400

                      2xl:text-[10px]
                    "
                    >
                      {experience.type}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="
                    mt-4
                    text-xs leading-6
                    text-slate-600 dark:text-slate-400

                    sm:text-sm
                    2xl:text-base
                    2xl:leading-7
                  "
                  >
                    {experience.description}
                  </p>

                  {/* Divider */}
                  <div
                    className="
                    my-4 h-px
                    bg-slate-200 dark:bg-slate-800

                    sm:my-5
                  "
                  />

                  {/* Responsibilities */}
                  <ul
                    className="
                    space-y-2.5
                    sm:space-y-3
                  "
                  >
                    {experience.responsibilities.map((item, index) => (
                      <li
                        key={index}
                        className="
                          flex items-start gap-2.5
                          text-[11px] leading-5
                          text-slate-600 dark:text-slate-400

                          sm:text-xs sm:leading-6
                          2xl:text-sm
                          2xl:leading-7
                        "
                      >
                        <Check
                          size={14}
                          className="
                            mt-0.5 shrink-0
                            text-blue-500
                            sm:size-4
                          "
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
