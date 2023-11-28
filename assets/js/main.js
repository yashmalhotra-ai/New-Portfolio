import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));


hoverChangeExperience(
  ".AICTE",
  `I utilized Blue Prism, an RPA (Robotic Process Automation) Tool, to create process diagrams, process studios, and flowcharts that enabled software robots to perform various actions.`,
  "Robotic Process Automation Virtual Intern",
  "AICTE",
  "Mar 2022 - May 2022 (3 mos)"
);
hoverChangeExperience(
  ".EVE",
  `Reduced time to render employee attendance data by 40% by implementing an optimised approach. Implemented API integration to streamline CRUD operations on doctor's data, reducing manual data entry time by 60% and eliminating data duplication errors.Plugin Graph for accurately displaying company profit and displayed the work procedure data for admin.`,
  "FrontEnd Developer Intern",
  `EVE HealthCare Center`,
  "May 2023 - Nov 2023 (6 mos)"
);

hoverChangeExperience(
  ".GDSC",
  `Created Simple Website using HTML/CSS.
  Shortlisted participants according to the their Responses for GDSC-GU Recruitment.
  Managed Discord Server for GDSC-GU.`,
  "GDSC GU TECHNICAL TEAM MEMBER",
  "GDSC-Galgotias University",
  "Dec 2021 - Dec 2022 (1 year)"
);



hoverChangeDescription(
  ".html",
  "HTML stands for Hyper Text Markup Language · HTML is the standard markup language for creating Web pages."
);
hoverChangeDescription(
  ".css",
  "CSS stands for Cascading Style Sheets · CSS describes how HTML elements are to be displayed on screen, paper, or in other media."
);
hoverChangeDescription(
  ".js",
  "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images etc."
);
hoverChangeDescription(
  ".sass",
  "The term SCSS is an acronym for Sassy Cascading Style Sheets. It is basically a more advanced and evolved variant of the CSS language."
);
hoverChangeDescription(
  ".react",
  "It is a a development server that uses Webpack to compile React, JSX, and ES6, auto-prefix CSS files."
);
hoverChangeDescription(
  ".next",
  "Next.js is a React framework that gives you building blocks to create web applications."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces."
);
hoverChangeDescription(
  ".radix",
  "C++ is an object-oriented programming (OOP) language that is viewed by many as the best language for creating large-scale applications."
);

