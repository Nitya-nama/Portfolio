export interface Article {
  tag: string;
  title: string;
  desc: string;
  date: string;
  url: string;
}

export const writing: Article[] = [
  {
    tag: "Case Study",
    title: "How I Built a Production-Ready ERP System with React & Flask",
    desc: "A breakdown of the architecture, authentication, database design and deployment process behind CineRent ERP.",
    date: "Jun 2026",
    url: "https://medium.com/@nityanama101/how-i-built-a-production-ready-erp-system-with-react-flask-b4ee7bc1d407",
  },
  {
    tag: "Data Science",
    title: "What Processing 20,000+ Records Taught Me About Machine Learning",
    desc: "Lessons learned from feature engineering, data cleaning, model evaluation and working with real-world datasets.",
    date: "May 2026",
    url: "https://medium.com/@nityanama101/what-processing-20-000-records-taught-me-about-machine-learning-8c1f3c8c44de",
  },
  {
    tag: "AI Engineering",
    title: "Why Every AI Engineer Should Understand RAG",
    desc: "Retrieval-Augmented Generation, vector databases, embeddings and modern AI system design.",
    date: "Apr 2026",
    url: "https://medium.com/@nityanama101/why-every-ai-engineer-should-understand-rag-52b8ff9a56fd",
  },
  {
    tag: "Data Analytics",
    title: "5 SQL Techniques That Instantly Improved My Data Analysis Skills",
    desc: "Real-world SQL concepts that helped me write faster, cleaner and more efficient analytical queries.",
    date: "Mar 2026",
    url: "https://medium.com/@nityanama101/5-sql-techniques-that-instantly-improved-my-data-analysis-skills-90eb8ede6155",
  },
];
