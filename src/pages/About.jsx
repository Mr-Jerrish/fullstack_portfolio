import React from "react";
import { Card } from "@/components/ui/card";
import Profile from "../../public/ProfileImg.png";

const About = () => {
  return (
    <section
      id="about"
      className="
        w-full overflow-hidden
        bg-[#f7f8fc] text-slate-900
        px-4 py-14
        transition-colors duration-300

        dark:bg-[#070a12] dark:text-white

        sm:px-6 sm:py-16
        md:px-8 md:py-20
        lg:px-12 lg:py-24
        xl:px-16
        2xl:px-24 2xl:py-28
      "
    >
      <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1600px]">
        {/* SECTION HEADER */}
        <div className="mb-8 max-w-3xl sm:mb-10 lg:mb-12">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400 sm:text-xs">
            About Me
          </p>

          <h2 className="mb-3 text-2xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
            Developer by craft. Problem-solver by nature.
          </h2>

          <p className="max-w-2xl text-xs leading-6 text-slate-600 dark:text-slate-400 sm:text-sm">
            I turn business requirements into dependable, maintainable digital
            products.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div
          className="
          grid grid-cols-1 items-center gap-8

          md:grid-cols-2 md:gap-8
          lg:gap-12
          xl:gap-16
          2xl:gap-24
        "
        >
          {/* LEFT - ABOUT DESCRIPTION */}
          <div className="relative w-full rounded-xl py-2 pl-4 sm:pl-5">
            {/* Gradient Border */}
            <div
              className="
              absolute bottom-0 left-0 top-0
              w-[3px] rounded-full
              bg-gradient-to-b
              from-blue-500 via-purple-500 to-cyan-500
            "
            />

            <p
              className="
              text-xs leading-7
              text-slate-600
              dark:text-slate-400

              sm:text-sm sm:leading-8
              lg:text-[13px]
              xl:text-sm
              2xl:text-base 2xl:leading-9
            "
            >
              I'm a MERN Stack Developer with{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                1 year and 6 months
              </span>{" "}
              of professional experience developing responsive business
              applications and enterprise solutions. My work spans React.js
              frontend development, REST API integration, Node.js backend
              development, MongoDB operations and reusable component
              architecture. I have worked on Warehouse Management System modules
              and developed full-stack applications with authentication, CRUD
              operations, dynamic forms and inventory dashboards. I'm passionate
              about learning new technologies and building practical, scalable
              web applications.
            </p>
          </div>

          {/* RIGHT - PROFILE CARD */}
          <div className="flex w-full justify-center md:justify-end">
            <Card
              className="
              relative w-full max-w-xl
              overflow-hidden rounded-2xl
              border border-slate-200
              bg-white p-4
              shadow-lg shadow-blue-950/5
              transition-all duration-300
              hover:border-blue-400/40

              dark:border-slate-800
              dark:bg-[#0e1422]
              dark:shadow-black/20

              sm:rounded-3xl sm:p-5
              lg:p-6
              2xl:max-w-2xl 2xl:p-8
            "
            >
              {/* PROFILE HEADER */}
              <div
                className="
                mb-6 flex items-center gap-3
                sm:gap-4
              "
              >
                {/* Profile Image */}
                <div
                  className="
                  h-16 w-16 shrink-0 overflow-hidden
                  rounded-2xl border border-slate-200
                  bg-slate-100 p-1

                  dark:border-slate-700 dark:bg-slate-800

                  sm:h-20 sm:w-20
                  2xl:h-24 2xl:w-24
                "
                >
                  <img
                    src={Profile}
                    alt="Sheik Mohamed Anzar"
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>

                {/* Profile Details */}
                <div className="min-w-0">
                  <p className="mb-1 text-[9px] font-semibold uppercase tracking-wider text-slate-400 sm:text-[10px]">
                    Professional Profile
                  </p>

                  <h3
                    className="
                    truncate text-sm font-semibold
                    text-slate-900 dark:text-white
                    sm:text-base
                  "
                  >
                    Sheik Mohamed Anzar
                  </h3>

                  <p className="mt-1 text-xs font-medium text-blue-600 dark:text-blue-400 sm:text-sm">
                    MERN Stack Developer
                  </p>
                </div>
              </div>

              {/* PROFILE INFORMATION */}
              <div className="mb-5 space-y-4">
                {/* Location */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Location
                  </span>

                  <span className="text-right text-xs font-semibold text-slate-800 dark:text-slate-200">
                    Bengaluru, India
                  </span>
                </div>

                {/* Experience */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Experience
                  </span>

                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    1.6 Years
                  </span>
                </div>

                {/* Availability */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Availability
                  </span>

                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-500">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                    Immediate Joiner
                  </span>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="mb-5 border-t border-slate-200 dark:border-slate-800" />

              {/* PREFERRED LOCATIONS */}
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                  Preferred Locations
                </p>

                <p className="text-xs font-medium leading-6 text-slate-700 dark:text-slate-300 sm:text-sm">
                  Bengaluru · Chennai · Coimbatore · Madurai · Kochi
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
