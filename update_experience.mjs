import fs from 'fs';

let content = fs.readFileSync('components/Experience.tsx', 'utf8');

// 1. Replace the timelineData array completely
const timelineDataRegex = /const timelineData = \[[\s\S]*?\];/;
const newTimelineData = `const timelineData = [
  {
    id: 1,
    role: "FullStack AI Engineer",
    company: "ForaSoftware",
    period: "Mar 2026 — Present",
    isCurrent: true,
    accent: "#CBACF9",
    logo: "/exp1.svg",
    description:
      "FullStack AI Engineer specialising in DevOps, managing infrastructure and deployments across various teams with a focus on automation, monitoring, and AI integrations.",
    impacts: [
      "Successful deployments, infrastructure monitoring, and versioning.",
      "Managed CI/CD pipelines, DevOps, and Infrastructure as Code (IaC).",
      "Wrote shell scripting to automate deployments and system management."
    ],
    tools: ["Python", "FastAPI", "React", "RAG", "LLMs", "Docker", "Terraform"],
  },
  {
    id: 2,
    role: "AI/ML Intern",
    company: "ForaSoftware",
    period: "Sep 2025 — Mar 2026",
    isCurrent: false,
    accent: "#CBACF9",
    logo: "/exp4.svg",
    description:
      "Developing AI-driven platform using Azure AI Foundry with RAG pipelines and full-stack integration.",
    impacts: [
      "Built RAG pipeline processing 500+ queries/day with Azure AI Foundry",
      "Automated CI/CD workflows via Azure DevOps, cutting deploy time by 40%",
      "Architected FastAPI + React stack serving real-time AI responses",
    ],
    tools: ["Azure", "FastAPI", "React", "RAG", "CI/CD"],
  },
  {
    id: 3,
    role: "IT Intern",
    company: "TruKKer",
    period: "Jun 2023 — Dec 2023",
    isCurrent: false,
    accent: "#6CB4EE",
    logo: "/exp2.svg",
    description:
      "Developed internal tools and managed department-wide design systems for the logistics platform.",
    impacts: [
      "Built asset analysis software used across 3 departments daily",
      "Created internal React dashboard for real-time fleet monitoring",
      "Managed department-wide design system, improving UI consistency",
    ],
    tools: ["React", "JavaScript", "UI/UX", "Analytics"],
  },
];`;

content = content.replace(timelineDataRegex, newTimelineData);

// 2. Add isLast prop to TimelineCard
content = content.replace(
  `}) => (
  <motion.div`,
  `  isLast?: boolean;
}) => (
  <motion.div`
);

// 3. Update the vertical line logic to use isLast
content = content.replace(
  `      style={{
        background: index === timelineData.length - 1
          ? \`linear-gradient(180deg, \${item.accent}40, transparent)\`
          : \`\${item.accent}25\`,
      }}`,
  `      style={{
        background: (isLast ?? index === timelineData.length - 1)
          ? \`linear-gradient(180deg, \${item.accent}40, transparent)\`
          : \`\${item.accent}40\`,
      }}`
);

// 4. Update the Experience component rendering
const experienceRegex = /const Experience = \(\) => {[\s\S]*?};/;
const newExperience = `const Experience = () => {
  const fullStackItem = timelineData[0];
  const aimlInternItem = timelineData[1];
  const trukkerItem = timelineData[2];

  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 px-5">
        
        {/* Left Column: TruKKer */}
        <div className="flex flex-col">
          <TimelineCard item={trukkerItem} index={0} isLast={true} />
        </div>

        {/* Right Column: ForaSoftware (Promotion track) */}
        <div className="flex flex-col">
          <TimelineCard item={aimlInternItem} index={1} isLast={false} />
          
          <div className="-mt-4">
            <TimelineCard item={fullStackItem} index={2} isLast={true} />
          </div>
        </div>

      </div>
    </div>
  );
};`;

content = content.replace(experienceRegex, newExperience);

fs.writeFileSync('components/Experience.tsx', content);
