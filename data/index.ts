export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Insight", link: "#testimonials" },
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
    img: "/Self.jpeg",
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
    title: "StackForge-Terraform-Infra",
    des: "An AWS EKS-based infrastructure built with Terraform. Features modular architecture, automated Jenkins setup, and CI/CD pipeline for seamless Kubernetes deployments.",
    img: "",
    iconLists: ["terraform.png","aws.png","Jenkins.svg","YAML logo.png"],
    link: "https://github.com/TheKunalBose/StackForge-Terraform-Infra",
  },
  {
    id: 2,
    title: "StackForge-k8s-Deployement ",
    des: "Production-grade Kubernetes deployment for StackForge on AWS EKS with secure secrets, PostgreSQL, Ingress routing, health checks, and rolling updates.",
    img: "",
    iconLists: ["k8s.png","EKS.png","aws.png","re.svg","Node.png","Redis.png","PostgreSQL.png"],
    link: "https://github.com/TheKunalBose/StackForge-k8s-Deployement",
  },
  {
    id: 3,
    title: "AWS Multi-Region Architecture",
    des: "an active-active AWS multi-region architecture using Terraform. It includes modular infrastructure, automated Jenkins installation, and a CI/CD pipeline for seamless deployment",
    img: "awsbg.jpg",
    iconLists: ["aws.png", "terraform.png", "Jenkins.svg", "Bash.svg", "/Ubuntu.png"],
    link: "https://github.com/TheKunalBose/AWS-Architechure-MultiRegion",
  },
  {
    id: 4,
    title: "Shoppy_dashboard",
    des: "Fully responsive and customisable Admin dashboard created using advanced Reactjs, React Context APIs, Syncfusion and Tailwind CSS",
    img: "Shoppy.png",
    iconLists: ["re.svg", "/tail.svg", "JavaScript.svg", "Syncfusion.png"],
    link: "https://github.com/TheKunalBose/Shoppy_dashboard",
  },
  {
    id: 5,
    title: "Terraform-CI-CD-Pipeline-Azure",
    des: "The terraform-CICD repository automates infrastructure deployment using Terraform, streamlining provisioning and management. It defines network resources as code, ensuring consistency, scalability, and efficient CI/CD workflows. The project enhances infrastructure automation by reducing manual effort and enabling seamless deployments",
    img: "azurebg.png",
    iconLists: ["terraform.png", "Azure.png", "Bash.svg", "Ubuntu.png"],
    link: "https://github.com/TheKunalBose/Terraform-CI-CD-Pipeline-Azure",
  },
  {
    id: 6,
    title: "Credit Card Fraud Detectector",
    des: "Prediction model which predicts the safety of the transaction with some user input.",
    img: "ccfdbg.jpg",
    iconLists: ["python.png", "Scikit-learn.svg", "Pandas.png", "NumPy.svg", "Matplotlib.svg"],
    link: "https://github.com/TheKunalBose/Credit-Card-Fraud-Detector-",
  },
];

export const testimonials = [
  {
    quote:
      "Full-Stack Web Development",
    name: "Proficient in building scalable web applications using React.js for the frontend and Node.js for the backend, following modular and RESTful architecture.",
    title: "experience in internship, small scale events and University level activities",
   
  },
  { 
    quote:
      "Infrastructure as Code (IaC)",
    name: "Experienced in using Terraform to provision and manage cloud infrastructure declaratively, ensuring consistency and repeatability.",
    title: ".",
  },
  { 
    quote:
      "Containerization & Orchestration",
    name: "Hands-on expertise with Docker for containerizing applications and Kubernetes for orchestrating multi-container workloads in cloud environments.",
    title: "experience in internship, small scale events and University level activities",
    
  },
  { 
    quote:
      "CI/CD Automation",
    name: "Implemented automated deployment pipelines using Jenkins, enabling continuous integration and delivery across development workflows.",
    title: "experience in internship, small scale events and University level activities",
   
  },
  { 
    quote:
      "Cloud Platforms (AWS & Azure)",
    name: "Worked with both AWS and Azure platforms for deploying infrastructure and applications; experienced with services like EC2, S3, EKS, IAM (AWS) and Azure Resource Manager, AKS, and DevOps Pipelines (Azure).",
    title: "experience in internship, small scale events and University level activities",
   
  },
  { 
    quote:
      "Version Control (Git & GitHub)",
    name: "Proficient in using Git for source code management and GitHub for collaborative development and CI/CD integration.",
    title: "experience in internship, small scale events and University level activities",
    
  },
  { 
    quote:
      "Monitoring & Logging",
    name: "Integrated basic monitoring tools and logging solutions to track application performance and ensure system reliability.",
    title: "experience in internship, small scale events and University level activities",
    
  },
  {
    quote:
      "Creative",
    name: "Possesses intermediate proficiency in design and editing, with hands-on experience using tools such as DaVinci Resolve, Figma, and Canva",
    title: "experience in internship, small scale events and University level activities",
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
    name: "jenkins",
    img: "/Jenkins.svg",
    nameImg: "/Jenkins.svg",
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
  {
    id: 6,
    name: "kubernetes",
    img: "/k8s.png",
    nameImg:"/k8s.png"
  },
  {
    id: 3,
    name: "azure",
    img: "/Azure.png",
    nameImg: "/Azure.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "IT Intern @ TruKKer\nJune 2023 - December 2023",
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
