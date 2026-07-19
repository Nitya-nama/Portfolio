export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: string;
  completed: boolean;
  date: string | null;
  status: "Completed" | "In Progress";
  credentialUrl: string | null;
}

export const certifications: Certification[] = [
  {
    id: "microsoft-ai-ml-engineering",
    title: "Microsoft AI/ML Engineering Professional",
    issuer: "Microsoft",
    category: "Machine Learning",
    completed: true,
    date: "Dec 2025",
    status: "Completed",
    credentialUrl: "/certificates/microsoft-ai-ml-engineering.pdf",
  },
  {
    id: "stanford-ml-specialization",
    title: "Machine Learning Specialization",
    issuer: "Stanford University · Coursera",
    category: "Machine Learning",
    completed: true,
    date: "Jul 2025",
    status: "Completed",
    credentialUrl: "/certificates/stanford-ml-specialization.pdf",
  },
  {
    id: "google-cloud-generative-ai",
    title: "Generative AI",
    issuer: "Google Cloud",
    category: "Cloud",
    completed: true,
    date: "Feb 2025",
    status: "Completed",
    credentialUrl: "/certificates/google-cloud-generative-ai.pdf",
  },
  {
    id: "python-for-data-science",
    title: "Python for Data Science",
    issuer: "Skill India Digital",
    category: "Programming",
    completed: true,
    date: "Mar 2025",
    status: "Completed",
    credentialUrl: "/certificates/python-for-data-science.pdf",
  },
  {
    id: "microsoft-power-bi-professional",
    title: "Microsoft Power BI Professional Certificate",
    issuer: "Microsoft",
    category: "Business Intelligence",
    completed: false,
    date: null,
    status: "In Progress",
    credentialUrl: null,
  },
];
