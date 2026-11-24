import React from "react";
import { skillsData } from "@/utilies/skillsData.js";
import Card from "@/utilies/Card.jsx";

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        w-full
        bg-[#eff2f8] dark:bg-[#0b101c]
        px-4 py-14
        transition-colors duration-300

        sm:px-6 sm:py-16
        md:px-8 md:py-20
        lg:px-10 lg:py-24
        xl:px-14
        2xl:px-20 2xl:py-28
      "
    >
      <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="mb-8 max-w-2xl sm:mb-10 lg:mb-12">
          <p
            className="
            mb-3
            text-[10px] font-bold uppercase tracking-[0.25em]
            text-blue-600 dark:text-blue-400
            sm:text-xs
          "
          >
            Technical Skills
          </p>

          <h2
            className="
            mb-3
            text-2xl font-semibold leading-tight tracking-tight
            text-slate-900 dark:text-white

            sm:text-3xl
            md:text-4xl
            xl:text-5xl
            2xl:text-6xl
          "
          >
            Developer by craft.
            <span className="block">Problem-solver by nature.</span>
          </h2>

          <p
            className="
            max-w-xl
            text-xs leading-6
            text-slate-600 dark:text-slate-400

            sm:text-sm
            lg:text-base
          "
          >
            Tools and technologies I use to build polished interfaces and
            resilient full-stack products.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          className="
          grid w-full
          grid-cols-1
          items-stretch
          gap-4
          auto-rows-fr

          sm:grid-cols-2 sm:gap-5
          lg:grid-cols-3 lg:gap-6
          2xl:gap-8
        "
        >
          {skillsData.map((category) => (
            <Card
              key={category.id}
              id={category.id}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
