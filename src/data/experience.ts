export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  bullets: string[];
  tags: string[];
  certificate: string;
}

export const experience: ExperienceItem[] = [
  {
    period: "Jan — May 2026",
    role: "Data Science Intern",
    company: "QSpiders (a unit of Test Yantra Software Solutions Ltd.), Bengaluru",
    bullets: [
      "Conducted exploratory data analysis and data cleaning across structured datasets, identifying patterns that improved downstream model performance.",
      "Built and evaluated machine learning models in Python using Scikit-learn, engineering features that measurably improved model performance.",
      "Designed data visualisations to communicate model evaluation results and analytical findings to technical and non-technical stakeholders.",
    ],
    tags: ["Python", "EDA", "Data Cleaning", "Machine Learning", "Feature Engineering", "Scikit-learn"],
    certificate: "https://github.com/Nitya-nama/Certificates/blob/main/PYSPIDERS.pdf",
  },
  {
    period: "Feb — Mar 2025",
    role: "AI/ML Intern",
    company: "Happy Inbox",
    bullets: [
      "Engineered supervised machine learning models on 20,000+ user interaction logs using Scikit-learn, improving recommendation accuracy by 65%.",
      "Automated data preprocessing and feature engineering pipelines with Pandas and NumPy, reducing model training time by 40%.",
      "Optimised model performance through reproducible experiments, documenting results for team review.",
    ],
    tags: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Feature Engineering"],
    certificate: "https://github.com/Nitya-nama/Certificates/blob/main/happyinbox.png",
  },
  {
    period: "Mar — Apr 2025",
    role: "Data Analyst Associate",
    company: "Excelerate",
    bullets: [
      "Designed interactive Power BI and Looker Studio dashboards, enabling stakeholders to monitor KPIs and improving reporting visibility by 35%.",
      "Optimised complex SQL queries and normalised data models in MySQL, reducing report generation time by 40%.",
      "Developed statistical trend analysis across departments to support data-driven stakeholder decision-making.",
    ],
    tags: ["Power BI", "SQL", "Data Analysis", "MySQL", "Looker Studio", "Business Intelligence"],
    certificate: "https://github.com/Nitya-nama/Certificates/blob/main/Excelerate.png",
  },
];
