import React from "react";

import {
  Card as UiCard,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const Card = ({ id, title, skills = [] }) => {
  return (
    <UiCard
      className="
        group flex h-full min-w-0 w-full flex-col
        overflow-hidden rounded-2xl

        border border-slate-200 bg-white shadow-sm
        transition-all duration-300

        hover:-translate-y-1
        hover:border-blue-400/50
        hover:shadow-xl hover:shadow-blue-500/10

        dark:border-slate-800 dark:bg-[#0e1422]
        dark:hover:border-blue-500/40
      "
    >
      {/* Header */}
      <CardHeader
        className="
        shrink-0
        px-4 py-4
        sm:px-5
        2xl:px-6 2xl:py-5
      "
      >
        <CardTitle
          className="
          text-sm font-semibold
          text-slate-900 dark:text-white
          sm:text-base
        "
        >
          {title}
        </CardTitle>
      </CardHeader>

      {/* Divider */}
      <div className="h-px shrink-0 bg-slate-200 dark:bg-slate-800" />

      {/* Skills */}
      <CardContent
        className="
        flex flex-1 flex-wrap content-start
        gap-2.5
        p-4

        sm:gap-3 sm:p-5
        2xl:gap-3.5 2xl:p-6
      "
      >
        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="
              inline-flex h-9
              max-w-full min-w-0
              items-center justify-center gap-2

              rounded-lg
              border border-slate-200
              bg-slate-50 px-2.5

              transition-all duration-200

              hover:border-blue-400/50
              hover:bg-blue-50

              dark:border-slate-700
              dark:bg-slate-800/70
              dark:hover:border-blue-500/40
              dark:hover:bg-blue-500/10
            "
          >
            {Icon && (
              <Icon
                size={14}
                className="
                  shrink-0
                  text-slate-500
                  dark:text-slate-400
                "
              />
            )}

            <span
              className="
              whitespace-nowrap
              text-[10px] font-medium
              text-slate-700 dark:text-slate-300
              sm:text-xs
            "
            >
              {name}
            </span>
          </div>
        ))}
      </CardContent>
    </UiCard>
  );
};

export default Card;
