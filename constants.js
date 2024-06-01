export const METADATA = {
    author: "Fajar Dimar Habibi",
    title: "Portfolio | Fajar Dimar Habibi",
    description:
        "Fajar Dimar Habibi is a Software Engineer from Jakarta Indonesia, interested in problem solving and crafting functional software applications.",
    siteUrl: "https://fdimarh.ngecamp.co.id",
    twitterHandle: "@shubh731",
    keywords: [
        "Software Engineer",
        "Mobile Engineer",
        "Backend Engineer",
        "Data Science",
        "Entrepreneur",
        "Portfolio",
    ].join(", "),
    image:
        "https://res.cloudinary.com/dywdhyojt/image/upload/v1690572126/preview.png",
    language: "English",
};

export const MENULINKS = [
    {
        name: "Home",
        ref: "home",
    },
    {
        name: "Skills",
        ref: "skills",
    },
    {
        name: "Projects",
        ref: "projects",
    },
    {
        name: "Work",
        ref: "work",
    },
    {
        name: "Contact",
        ref: "contact",
    },
];

export const TYPED_STRINGS = [
    "A pragmatic Software Engineer",
    "I build things for solving problems",
    "I create software with heart and passion",
];

export const NARATIVE_DESCRIPTIONS = [
    "I craft top-notch software applications, seamlessly blending creativity and precision to bring innovative digital solutions to life",
    "My expertise lies in engineering high-quality code that transforms complex ideas into user-friendly and impactful experiences."
];

export const SOCIAL_LINKS = [
    {
        name: "mail",
        url: "mailto: fajar.dimar@ngecamp.co.id",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/fdimarh/",
    },
    {
        name: "github",
        url: "https://github.com/fdimarh",
    },
];

export const SKILLS = {
    languagesAndFrameworks: [
        "rust",
        "java",
        "kotlin",
        "javascript",
        "typescript",
        "python",
        "php",
        "nodejs",
        "react",
        "android",
        "linux",
        "open-source",
        "homebrew",
        "npm",
        "yarn",
        "pypi",
        "material-ui",
        "arduino",
        "cplusplus",
        "go",
    ],
    tools: [
        "figma",
        "docker",
        "nginx",
        "visual-studio-code",
        "intellij-idea",
        "github-copilot",
        "jetbrains",
        "chrome",
        "zeplin",
        "acrobat-reader",
        "gitlab",
        "github",
        "bitbucket",
        "kubernetes",
        "kafka",
        "sentry",
        "firebase",
        "postman",
        "curl",
        "httpie",
    ],
    databases: [
        "mysql",
        "maria-db",
        "postgresql",
    ],
    infrastructure: [
        "heroku",
        "digitalocean",
        "aws",
    ],
};

export const PROJECTS = [
    // {
    //   name: "Shotime",
    //   image: "",
    //   blurImage: "",
    //   description:
    //     "Developed with complete E-commerce functionality and User Authentication 🛍️",
    //   gradient: ["#FFCF1B", "#FF881B"],
    //   url: "https://shubh73-shotime.vercel.app/",
    //   tech: ["react", "tailwindcss", "redux", "mongodb", "stripe"],
    // },
    {
        name: "Airbnb",
        image: "/projects/airbnb.webp",
        blurImage: "/projects/blur/airbnb-blur.webp",
        description: "Airbnb UI clone using NextJS + Tailwind CSS 🛏️",
        gradient: ["#F14658", "#DC2537"],
        url: "#",
        tech: ["react", "nextjs", "tailwindcss", "mapbox"],
    },
    {
        name: "Medium",
        image: "/projects/medium.webp",
        blurImage: "/projects/blur/medium-blur.webp",
        description: "Medium UI clone using NextJS + Tailwind CSS ✍🏻",
        gradient: ["#FFA62E", "#EA4D2C"],
        url: "#",
        tech: ["typescript", "react", "nextjs", "tailwindcss", "sanity.io"],
    },
    {
        name: "Inshorts",
        image: "/projects/inshorts.webp",
        blurImage: "/projects/blur/airbnb-blur.webp",
        description:
            "Conversational Voice Controlled React News Application using Alan AI 🎙",
        gradient: ["#000066", "#6699FF"],
        url: "#",
        tech: ["react", "chakra-ui", "alan"],
    },
    {
        name: "Tesla",
        image: "/projects/tesla.webp",
        blurImage: "/projects/blur/tesla-blur.webp",
        description: "A Tesla React Native App 🏎️",
        gradient: ["#142D46", "#2E4964"],
        url: "#",
        tech: ["react"],
    },
];

export const WORK = [
    {
        id: 1,
        company: "Government",
        title: "Software Engineer",
        location: "Jakarta, Indonesia",
        range: "September 2017 - Current",
        responsibilities: [
            "Develop and maintain a robust electronic signature system to ensure seamless accessibility and functionality",
            "Implement security protocols to safeguard electronic signatures, guaranteeing their integrity and confidentiality",
            "Collaborate with cross-functional teams to integrate electronic signature features into various software applications",
            "Conduct regular audits and testing to identify and address potential vulnerabilities in the electronic signature infrastructure",
            "Stay updated on industry standards and regulations related to electronic signatures, ensuring compliance in all aspects of the system",
            "Troubleshoot and resolve any issues related to electronic signature availability promptly, minimizing downtime",
            "Optimize and streamline electronic signature processes for efficiency and user-friendly experiences",
            "Provide technical support and training to users, ensuring they can effectively utilize electronic signature functionalities",
            "Collaborate with legal and compliance teams to ensure the software aligns with relevant laws and regulations governing electronic signatures",
            "Continuously monitor and assess the performance of the electronic signature system, implementing improvements as needed to enhance reliability and availability"
        ],
        url: "https://bsre.bssn.go.id",
        video: "/work/spacenos.mp4",
    }
];

export const GTAG = "G-5HCTL2TJ5W";
