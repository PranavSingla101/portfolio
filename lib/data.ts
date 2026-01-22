import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import fradleLogo from "@/public/Fradle logo.png";
import freelancerLogo from "@/public/Freelancer logo.png";
import researchLogo from "@/public/research logo.png";
import aiLogoGenDashboard from "@/public/AI logo gen Dashboard.png";
import aiLogoGenSS from "@/public/AI Logo Gen SS.png";
import awareSS from "@/public/Aware Updated ss.png";
import awarePic2 from "@/public/Aware pic2.png";
import ragChatPDF from "@/public/chatwithyourpdfrag.jpg";
import ragProcess from "@/public/RAG process.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelance Workflow Automation Developer",
    location: "",
    description: [
      "Designed and deployed production-grade n8n automation workflows to fully automate lead sourcing, qualification, outreach, and CRM synchronization",
      "Developed LLM-driven lead qualification agents with API enrichment, prompt-based scoring, and conditional routing",
      "Automated multi-step cold email sequences with state-aware logic, processing 100+ leads/week with zero human intervention",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "December 2025 - January 2026",
    logo: freelancerLogo,
  },
  {
    title: "UG Research Assistant",
    location: "Punjab Engineering College",
    description: [
      "Developing data anonymization using Format Preserving Encryption (FPE) to secure 50k+ records",
      "Applied Isolation Forest, DBSCAN, and KNN on 10+ telecom features, improving fraud detection with 15% higher recall",
      "Analyzed fraud patterns to develop and refine models, contributing to reducing false positives by 20%",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "September 2025 - January 2026",
    logo: researchLogo,
  },
  {
    title: "AI/ML Engineering Intern",
    location: "Fradle Corporation",
    description: [
      "Improved multi-modal RAG-based chatbot by incorporating multi-query capabilities to enhance interaction features",
      "Utilized OpenAI's GPT-4o, LangChain, and PostgreSQL (pgvector) to optimize model performance",
      "Enhanced chatbot service in help request module by developing backend logic and integrating Google Gemini API with frontend",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "April 2025 - September 2025",
    logo: fradleLogo,
  },
] as const;

export const projectsData = [
  {
    title: "RAG-Powered Document Assistant",
    description: "Intelligent document Q&A system using Retrieval-Augmented Generation to enable natural language queries over PDF documents with semantic search and context-aware responses.",
    features: [
      "LangChain-powered RAG pipeline with ChromaDB vector store for semantic document retrieval",
      "Google Gemini API integration (gemini-2.5-flash-lite) with text-embedding-004 for embeddings",
      "Streamlit web interface with real-time PDF processing and interactive Q&A capabilities",
    ],
    tags: ["Python", "Streamlit", "LangChain", "Google Gemini", "ChromaDB"],
    icons: [
      { name: "Python", icon: "logos:python" },
      { name: "Streamlit", icon: "simple-icons:streamlit" },
      { name: "LangChain", icon: "material-symbols:link" },
      { name: "Gemini AI", icon: "material-symbols:auto-awesome" },
      { name: "ChromaDB", icon: "material-symbols:database" },
    ],
    imageUrl: ragChatPDF,
    images: [ragChatPDF, ragProcess],
  },
  {
    title: "Project AWARE",
    description: "ML-powered waterborne disease predictor for real-time monitoring of water-bodies.",
    features: [
      "Random Forest model achieving 82% accuracy in disease risk prediction",
      "Built real-time sensor using synthetic dataset",
      "Google Gemini AI integration for personalized health recommendations",
    ],
    tags: ["React", "FastAPI", "Firebase", "Google Gemini AI", "scikit-learn"],
    icons: [
      { name: "React", icon: "logos:react" },
      { name: "FastAPI", icon: "logos:fastapi" },
      { name: "Firebase", icon: "logos:firebase" },
      { name: "Gemini AI", icon: "material-symbols:auto-awesome" },
      { name: "ML", icon: "material-symbols:psychology" },
    ],
    imageUrl: awareSS,
    images: [awareSS, awarePic2],
    githubLink: "https://github.com/PranavSingla101/AWARE",
  },
  {
    title: "AI Logo Generator",
    description: "Full-stack AI-powered platform that generates custom logos using Google Gemini for prompt generation and multiple AI models (Hugging Face, Replicate) for logo creation.",
    features: [
      "AI-powered prompt generation using Google Gemini for optimized logo creation",
      "Multi-model logo generation with free (Hugging Face) and premium (Replicate) tiers",
      "User dashboard with credit system, authentication, and logo management via Firebase",
    ],
    tags: ["Next.js", "React", "Firebase", "Google Gemini AI", "Hugging Face", "Clerk"],
    icons: [
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "React", icon: "logos:react" },
      { name: "Firebase", icon: "logos:firebase" },
      { name: "Gemini AI", icon: "material-symbols:auto-awesome" },
      { name: "Hugging Face", icon: "simple-icons:huggingface" },
      { name: "Clerk", icon: "simple-icons:clerk" },
    ],
    imageUrl: aiLogoGenSS,
    images: [aiLogoGenSS, aiLogoGenDashboard],
    githubLink: "https://github.com/PranavSingla101/AI_Logo_Website",
  },
] as const;

export const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: "logos:python" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "SQL", icon: "material-symbols:database" },
      { name: "HTML", icon: "logos:html-5" },
      { name: "CSS", icon: "logos:css-3" },
    ],
  },
  {
    category: "AI & LLMs",
    skills: [
      { name: "LangChain", icon: "material-symbols:link" },
      { name: "Hugging Face Transformers", icon: "simple-icons:huggingface" },
      { name: "OpenAI GPT-4o", icon: "material-symbols:auto-awesome" },
      { name: "Google Gemini API", icon: "material-symbols:auto-awesome" },
      { name: "RAG Systems", icon: "material-symbols:database" },
      { name: "Prompt Engineering", icon: "material-symbols:edit" },
    ],
  },
  {
    category: "Automation & Workflows",
    skills: [
      { name: "N8N Workflows", icon: "simple-icons:n8n" },
      { name: "Make.com", icon: "simple-icons:make" },
      { name: "Python Scripting", icon: "logos:python" },
      { name: "API Integration", icon: "material-symbols:api" },
      { name: "Webhooks", icon: "material-symbols:webhook" },
      { name: "JSON Parsing", icon: "material-symbols:code" },
      { name: "Chatbot Integration", icon: "material-symbols:smart-toy" },
      { name: "MCP", icon: "material-symbols:link" },
      { name: "Data Pipelines", icon: "material-symbols:route" },
    ],
  },
  {
    category: "Libraries & Frameworks",
    skills: [
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "React.js", icon: "logos:react" },
      { name: "FastAPI", icon: "logos:fastapi" },
      { name: "TensorFlow", icon: "logos:tensorflow" },
      { name: "Scikit-Learn", icon: "logos:scikit-learn" },
      { name: "Pandas", icon: "logos:pandas" },
      { name: "NumPy", icon: "logos:numpy" },
    ],
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "Firebase", icon: "logos:firebase" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MySQL", icon: "logos:mysql" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "Postman", icon: "logos:postman-icon" },
    ],
  },
  {
    category: "CS Fundamentals",
    skills: [
      { name: "Data Structures and Algorithms", icon: "material-symbols:account-tree" },
      { name: "Object Oriented Programming", icon: "material-symbols:code" },
      { name: "Computer Networks", icon: "material-symbols:network-node" },
    ],
  },
];
