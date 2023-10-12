// Project detailed data.

const projectDetails = [
  {
    id: "BwvyCzNoQpRiy-a2MCyGL",
    language: ["Java", "SQL"],
    tech: ["Spring Boot", "MySQL", "MyBatis Plus", "Redis", "Nginx"],
    description: `Protigue Eats is an online food ordering web app featuring 
      Frontend Backend Separation.
      There are management webpages for restaurants and ordering webpages for mobile clients.
      I built the backend server with Java and Spring Boot framework.
      To improved development efficiency and connection speed of database,
      I used MyBatis-Plus as development tool and Druid as datasource.
      I also optimized ordering experience with Redis caching popular meals.`,
  },
  {
    id: "UuuWhnI7t4uazccrKcTUF",
    language: ["Java", "C"],
    tech: [
      "Distributed System",
      "System Design",
      "Two Phase Commit",
      "Cache Consistency",
      "Java RMI",
    ],
    description: `I developed a Linux-based distributed file system from scratch, using Java and C. 
      A main focus was the implementation of on-demand Least Recently Used (LRU) caching mechanism. 
      This approach led to a remarkable reduction in storage space utilization, 
      outperforming popular solutions such as Dropbox.
      I also incorporated a two-phase commit protocol.to ensures that data consistency is 
      maintained across the distributed master servers. 
      Additionally, I leveraged a log-based recovery system, enhancing the overall resilience 
      and fault tolerance.
      Furthermore, to enable a seamless integration at OS-level, 
      I crafted a C shared library to handle Input/Output (IO) calls. `,
  },
  {
    id: "RRYqReDPFjaKoJbmyTXQE",
    language: ["React", "Javascript", "HTML", "CSS"],
    tech: ["React.js", "Tailwind CSS"],
    src: "https://github.com/sunnynano/react-portfolio",
    demo: "https://sguan.netlify.app/",
    description: `This portfolio is a Single Page Application and features responsive design.
    I developed it on React.js and utilized React-Router to handle transitions between different views.
    I also used Tailwind CSS to beautify the webpage and switch between dark and light modes.`,
  },
  {
    id: "9KXXHkHmXkYhmvbf-IsH1",
    language: ["Java", "SQL", "Vue", "Javascript", "Shell"],
    tech: ["Spring Boot", "Spring Security", "MySQL", "MyBatis Plus", "Vue.js"],
    description: `S-Log is my personal blog. It is still under construction. 
    I am building this blog's frontend on Vue.js and backend on Spring Boot.`,
  },
  {
    id: "qYizQ4ibA1FcBj4KpnKEa",
    language: ["Python"],
    tech: ["OpenCV", "NumPy"],
    src: "https://github.com/sunnynano/Dirt-Drift",
    description: `Dirt Drift is a Python racing game featuring real-world physics simulation.
      To allow users to create and import custom racing tracks,
      I utilized OpenCV to process track images into game data.
      I also implemented a game AI based on a backtracking algorithm and used NumPy
      module to accelerate collision calculation.`,
  },
  {
    id: "8nRxyG6vSV5YqV7oPwbaY",
    language: ["C", "Shell"],
    tech: ["POSIX Threads", "TCP/IP"],
    description: `I wrote this Linux proxy server in C and based on TCP/IP. 
    To enable concurrent client visits, I implemented multi-threading with POSIX Threads.
    I also tested this proxy on real-world browsers such as Firefox`,
  },
];

export default projectDetails;
