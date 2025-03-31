export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Updates", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning and exploring new technologies",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Get in touch with just a click!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-0",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AWS Multi-Refion Architecture",
    des: "an active-active AWS multi-region architecture using Terraform. It includes modular infrastructure, automated Jenkins installation, and a CI/CD pipeline for seamless deployment",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/TheKunalBose/AWS-Architechure-MultiRegion",
  },
  {
    id: 2,
    title: "Shoppy",
    des: "Fully responsive and customisable Admin dashboard created using advanced Reactjs, React Context APIs, Syncfusion and Tailwind CSS",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/TheKunalBose/Shoppy",
  },
  {
    id: 3,
    title: "GitReverb",
    des: "Backend is developed with Flask the python library and GitHub APIs have been used and the front-end has been made with html css",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Credit Card Fraud Detectector",
    des: "Prediction model which predicts the safety of the transaction with some user input.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "ANALYSIS DOMAIN",
    name: "Working on a project in the analysis domain, leveraging data insights and statistical modeling to drive informed decision-making.",
    title: ".",
  },
  { 
    quote:
      "ClOUD DOMAIN",
    name: "Exploring and learning about new cloud domains to enhance my expertise in cloud technologies and services.",
    title: ".",
  },
  {
    quote:
      "DESIGN DOMAIN",
    name: "Diving into emerging design technologies to refine my expertise in modern creative solutions and UI/UX innovation.",
    title: ".",
  },
  // {
  //   quote:
  //     "Update 4",
  //   name: "Michael Johnson44",
  //   // title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Update 5",
  //   name: "Michael Johnson55",
  //   // title: "Director of AlphaStream Technologies",
  // },
];

export const companies = [
  {
    id: 1,
    name: "AWS",
    img: "/aws.png",
    nameImg: "/AWS.svg",
  },
  {
    id: 2,
    name: "python",
    img: "/python.png",
    nameImg: "/python.svg",
  },
  {
    id: 3,
    name: "git",
    img: "/git.png",
    nameImg: "/hostNAME.svg",
  },
  {
    id: 4,
    name: "terraform",
    img: "/terraform.png",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Information Technology Intern",
    desc: "Developed asset analysis software, an internal React dashboard, and department-wide designs while handling daily tasks.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },

];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg", link:"https://github.com/TheKunalBose"
  },
  {
    id: 2,
    img: "/twit.svg", link: "https://x.com/KunalBo88979391"
  },
  {
    id: 3,
    img: "/link.svg", link: "https://www.linkedin.com/in/kunal-bose-b5b2aa249/"
  },
];
