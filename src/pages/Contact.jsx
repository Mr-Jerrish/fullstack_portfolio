import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, ExternalLink, Send } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must contain at least 3 characters")
    .max(50, "Name cannot exceed 50 characters"),

  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  subject: z
    .string()
    .trim()
    .min(3, "Subject must contain at least 3 characters")
    .max(100, "Subject cannot exceed 100 characters"),

  message: z
    .string()
    .trim()
    .min(10, "Message must contain at least 10 characters")
    .max(1000, "Message cannot exceed 1000 characters"),
});

const contactInfo = [
  {
    id: 1,
    label: "Email",
    value: "sheikmohamedanzar@gmail.com",
    href: "mailto:sheikmohamedanzar@gmail.com",
    icon: Mail,
  },
  {
    id: 2,
    label: "Phone",
    value: "+91 9629295177",
    href: "tel:+919629295177",
    icon: Phone,
  },
  {
    id: 3,
    label: "GitHub",
    value: "github.com/Mr-Jerrish",
    href: "https://github.com/Mr-Jerrish",
    icon: FaGithub,
  },
  {
    id: 4,
    label: "LinkedIn",
    value: "linkedin.com/in/sheik07",
    href: "https://linkedin.com/in/sheik07",
    icon: FaLinkedin,
  },
  {
    id: 5,
    label: "Location",
    value: "India",
    href: null,
    icon: MapPin,
  },
];

const Contact = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      // We pass the data directly to EmailJS.
      // These keys (name, email, subject, message, time) must match the {{variables}} in your EmailJS template.
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        time: new Date().toLocaleString(),
      };

      await emailjs.send(
        "service_tczkr0s",
        "template_g1u1uco",
        templateParams,
        "BLAhxBQyCR2NhR5PY",
      );

      toast.success("Message sent successfully!");

      reset();
    } catch (error) {
      toast.error("Contact form error:", error);
    }
  };

  const inputClass = (error) => `
    h-11 w-full rounded-lg border px-3 text-xs
    outline-none transition-all duration-200

    bg-slate-50 text-slate-900
    placeholder:text-slate-400

    dark:bg-[#090e19] dark:text-white
    dark:placeholder:text-slate-500

    ${
      error
        ? "border-red-500 focus:ring-2 focus:ring-red-500/10 dark:border-red-500"
        : "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-slate-800"
    }
  `;

  const labelClass = `
    mb-2 block text-[10px] font-semibold uppercase
    tracking-wide text-slate-500 dark:text-slate-400
  `;

  const renderError = (error) => {
    if (!error) return null;

    return (
      <p role="alert" className="mt-1.5 text-[10px] font-medium text-red-500">
        {error.message}
      </p>
    );
  };

  return (
    <section
      id="contact"
      className="
        w-full overflow-hidden
        bg-[#f7f8fc] px-4 py-16
        text-slate-900
        transition-colors duration-300

        dark:bg-[#070a12] dark:text-white

        sm:px-6 sm:py-20
        md:px-8 md:py-24
        lg:px-12
        xl:px-16
        2xl:px-24
      "
    >
      <div
        className="
          mx-auto grid w-full max-w-[1600px]
          grid-cols-1 items-center gap-10

          md:gap-12
          lg:grid-cols-2 lg:gap-10
          xl:gap-16
          2xl:gap-24
        "
      >
        <div className="w-full min-w-0">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400 sm:text-xs">
            Let's connect
          </p>

          <h2
            className="
              mb-5 max-w-2xl
              text-3xl font-semibold
              leading-[1.15] tracking-tight
              text-slate-900 dark:text-white

              min-[400px]:text-4xl
              sm:text-5xl
              xl:text-[52px]
              2xl:text-6xl
            "
          >
            Let's build something
            <span className="block bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              great together.
            </span>
          </h2>

          <p
            className="
              mb-7 max-w-xl
              text-xs leading-6
              text-slate-600 dark:text-slate-400
              sm:text-sm sm:leading-7
              2xl:text-base
            "
          >
            I'm currently looking for opportunities as a React.js Developer or
            MERN Stack Developer. Feel free to contact me for job opportunities,
            collaborations or interesting projects.
          </p>

          {/* CONTACT INFORMATION */}

          <div
            className="
              grid w-full max-w-2xl
              grid-cols-1 gap-3

              min-[420px]:grid-cols-2
              sm:gap-3
              2xl:gap-4
            "
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;

              const content = (
                <>
                  <div
                    className="
                      flex h-9 w-9 shrink-0
                      items-center justify-center
                      rounded-lg bg-blue-500/10
                      text-blue-600 dark:text-blue-400
                      sm:h-10 sm:w-10
                    "
                  >
                    <Icon size={17} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-[9px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>

                    <p className="truncate text-[10px] font-semibold text-slate-800 dark:text-slate-200 sm:text-xs">
                      {item.value}
                    </p>
                  </div>

                  {item.href && (
                    <ExternalLink
                      size={13}
                      className="shrink-0 text-slate-400 transition-colors group-hover:text-blue-500"
                    />
                  )}
                </>
              );

              const commonClass = `
                flex min-w-0 items-center gap-3
                rounded-xl border p-3
                transition-all duration-300

                border-slate-200 bg-white
                hover:border-blue-400/50
                hover:bg-blue-50/50

                dark:border-slate-800
                dark:bg-[#0e1422]
                dark:hover:border-blue-500/40
                dark:hover:bg-blue-500/5

                2xl:p-4
              `;

              return item.href ? (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.id >= 3 ? "_blank" : undefined}
                  rel={item.id >= 3 ? "noopener noreferrer" : undefined}
                  className={`group ${commonClass}`}
                >
                  {content}
                </a>
              ) : (
                <div key={item.id} className={commonClass}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        {/* =================================
            RIGHT CONTACT FORM
        ================================== */}

        <div
          className="
            w-full min-w-0
            rounded-2xl border
            border-slate-200 bg-white
            p-4 shadow-sm
            transition-colors duration-300

            dark:border-slate-800
            dark:bg-[#101525]

            sm:p-6
            lg:p-5
            xl:p-7
            2xl:p-9
          "
        >
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-4 sm:space-y-5"
          >
            {/* NAME AND EMAIL */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* NAME */}

              <div className="min-w-0">
                <label htmlFor="contact-name" className={labelClass}>
                  Full Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  {...register("name")}
                  aria-invalid={!!errors.name}
                  className={inputClass(errors.name)}
                />

                {renderError(errors.name)}
              </div>

              {/* EMAIL */}

              <div className="min-w-0">
                <label htmlFor="contact-email" className={labelClass}>
                  Email Address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  {...register("email")}
                  aria-invalid={!!errors.email}
                  className={inputClass(errors.email)}
                />

                {renderError(errors.email)}
              </div>
            </div>

            {/* SUBJECT */}

            <div>
              <label htmlFor="contact-subject" className={labelClass}>
                Subject
              </label>

              <input
                id="contact-subject"
                type="text"
                placeholder="Job opportunity or project"
                {...register("subject")}
                aria-invalid={!!errors.subject}
                className={inputClass(errors.subject)}
              />

              {renderError(errors.subject)}
            </div>

            {/* MESSAGE */}

            <div>
              <label htmlFor="contact-message" className={labelClass}>
                Message
              </label>

              <textarea
                id="contact-message"
                rows={5}
                placeholder="Tell me a little about your opportunity..."
                {...register("message")}
                aria-invalid={!!errors.message}
                className={`
                  min-h-[140px] w-full resize-y
                  rounded-lg border px-3 py-3
                  text-xs leading-6 outline-none
                  transition-all duration-200

                  bg-slate-50 text-slate-900
                  placeholder:text-slate-400

                  dark:bg-[#090e19] dark:text-white
                  dark:placeholder:text-slate-500

                  ${
                    errors.message
                      ? "border-red-500 focus:ring-2 focus:ring-red-500/10"
                      : "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-slate-800"
                  }
                `}
              />

              {renderError(errors.message)}
            </div>

            {/* SUBMIT BUTTON */}

            <button
              type="submit"
              disabled={isSubmitting}
              className="
                flex h-11 w-full
                items-center justify-center gap-2
                rounded-xl

                bg-gradient-to-r
                from-blue-600 via-indigo-600 to-purple-600

                text-xs font-semibold text-white
                shadow-lg shadow-blue-500/20
                transition-all duration-300

                hover:-translate-y-0.5
                hover:shadow-xl hover:shadow-blue-500/30

                active:translate-y-0

                disabled:cursor-not-allowed
                disabled:opacity-60

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500
                focus-visible:ring-offset-2
              "
            >
              {isSubmitting ? "Sending..." : "Send Message"}

              <Send size={15} />
            </button>

            {/* FORM STATUS */}

            <p className="text-center text-[9px] leading-5 text-slate-400 dark:text-slate-500">
              Your default email client will open to send your message. No
              message data is stored by this form.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
