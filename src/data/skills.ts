export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { category: "Languages", items: ["Python", "SQL", "Java", "JavaScript"] },
  { category: "Machine Learning", items: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost"] },
  { category: "Data Analytics", items: ["Power BI", "Pandas", "NumPy", "Excel"] },
  { category: "Visualization", items: ["Power BI", "Matplotlib", "Plotly", "Seaborn"] },
  { category: "Backend", items: ["Flask", "FastAPI", "REST APIs"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { category: "Tools", items: ["Git", "GitHub", "Docker", "Linux"] },
  { category: "Cloud", items: ["Azure"] },
];
