// personal experience data
import OdooLogo from "../assets/images/odoo-logo.png";
import oneTwelveLogo from "../assets/images/112-logo.png";
import CMULogo from "../assets/images/cmu-logo.png";
import NFLSLogo from "../assets/images/nfls-logo.jpg";
import RobinhoodLogo from "../assets/images/robinhood-logo.png";

const experiences = [
  {
    id: "Tmmhj8BwtrB65bTUMO7B6",
    title: "Security Software Intern",
    startDate: "May 2024 - Aug 2024",
    detail: [
      `Implemented a Go-based microservice and initiated multiple gRPC endpoints to track 1 million users' GPS locations
      and lockout users in restricted regions`,
      `Achieved 99% cache hit rate by designing new cache policies and 90% cost reduction through switching to AWS
      Location Service`,
      `Developed automated test probes for services across the team, successfully identifying issues in legacy services`,
      `Crafted password validators in Django, ensuring compliance with password security requirements.`,
    ],
    imgSrc: RobinhoodLogo,
    website: "https://www.robinhood.com",
  },
  {
    id: "5gFRXlbvRjYXFenbA9Fh9",
    title: "Full Stack Developer Intern",
    startDate: "Jun 2023 - Aug 2023",
    detail: [
      `Integrated ChatGPT into Odoo CRM system, 
    a framework empowered by Python, PostgreSQL and Javascript.`,
      `Optimized customer service pipeline by enabling ChatGPT to categorize and tag incoming help tickets, 
    leading to a 20% increase in the number of tickets resolved per day.`,
      `Fine-tuned ChatGPT using prompt engineering to improve tagging accuracy from 67% to 89.5%.`,
    ],
    imgSrc: OdooLogo,
    website: "https://www.odoo.com",
  },
  {
    id: "6775KQtbhgvuIM-P0_Gq-",
    title: "112 (Python) Teaching Assistant",
    startDate: "Aug 2022 - Dec 2022",
    detail: [
      `Led recitations and office hours for 15-112, a Python course with 500+ students.`,
      `Crafted Python scripts to automatically monitor student attendance and 
      send students feedback via email, leading to a 200-300% increase in productivity.`,
      `Utilized open source projects such as Viztracer to visualize Python code.`,
    ],
    imgSrc: oneTwelveLogo,
    website: "https://www.cs.cmu.edu/~112/index.html",
  },
  {
    id: "spQpiW_uCvXd9QHmfY2_D",
    title: "Carnegie Mellon University",
    startDate: "Aug 2021 - May 2025",
    detail: ["B.S. in Computer Science, concentration in Machine Learning"],
    imgSrc: CMULogo,
    website: "https://www.cmu.edu",
  },
  {
    id: "dS0uTd-SaqiMl_1OTNPr7",
    title: "Nanjing Foreign Language School",
    startDate: "Sep 2015 - Jun 2021",
    detail: ["Middle School and High School Diploma"],
    imgSrc: NFLSLogo,
    website: "http://www.nfls.com.cn",
  },
];

export default experiences;
