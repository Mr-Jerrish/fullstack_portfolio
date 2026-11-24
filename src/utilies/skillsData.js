import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  // SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiRedux,
  SiGit,
  SiGithub,
  SiPostman,
  SiShadcnui,
  SiVite,
  SiNpm,
} from "react-icons/si";

import {
  FaCode,
  FaServer,
  FaDatabase,
  FaLayerGroup,
  FaWpforms,
  FaTools,
  FaLock,
  FaExchangeAlt,
  FaProjectDiagram,
  FaReact,
} from "react-icons/fa";

import { SiZod, SiAxios, SiJsonwebtokens } from "react-icons/si";

import { MdOutlineApi, MdOutlineSecurity } from "react-icons/md";

export const skillsData = [
  {
    id: 1,
    title: "Frontend Development",
    icon: FaCode,
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiHtml5 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    icon: FaServer,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "RESTful APIs", icon: MdOutlineApi },
      { name: "CRUD Operations", icon: FaDatabase },
      { name: "Middleware", icon: FaLayerGroup },
      { name: "JWT Authentication", icon: SiJsonwebtokens },
    ],
  },
  {
    id: 3,
    title: "Database",
    icon: FaDatabase,
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongoose },
      { name: "Schema Design", icon: FaProjectDiagram },
    ],
  },
  {
    id: 4,
    title: "State Management",
    icon: FaLayerGroup,
    skills: [
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "React Context API", icon: FaReact },
    ],
  },
  {
    id: 5,
    title: "UI & Forms",
    icon: FaWpforms,
    skills: [
      { name: "shadcn/ui", icon: SiShadcnui },
      { name: "React Hook Form", icon: FaWpforms },
      { name: "useFieldArray", icon: FaWpforms },
      { name: "Zod", icon: SiZod },
      { name: "Lucide React", icon: FaCode },
    ],
  },
  {
    id: 6,
    title: "Tools & Technologies",
    icon: FaTools,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Vite", icon: SiVite },
      { name: "npm", icon: SiNpm },
      { name: "VS Code", icon: SiTypescript },
    ],
  },
];
