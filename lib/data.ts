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
import n8nWorkflowCover from "@/public/N8N workflow cover.png";
import booklyLandingImg from "@/public/Bookly_landing.png";
import booklyLibraryImg from "@/public/Bookly_library.png";
import sysdesLandingImg from "@/public/sysdes-landing-page-readme.png";
import sysdesEditorImg from "@/public/sysdes-editor-project-readme.png";
import claudeCoworkOutreachImg from "@/public/Claude_cowork_outreach.png";

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
    title: "AI Automation Developer",
    location: "Freelance",
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
    title: "SYSDES",
    description: "AI-powered collaborative system design canvas.",
    features: [
      "Real-time multiplayer editing via Liveblocks + React Flow",
      "Generate diagrams from natural language → structured graph, with non-blocking background streaming via Trigger.dev",
      "Export architecture specs instantly",
    ],
    tags: ["Next.js", "TypeScript", "React Flow", "Liveblocks", "Trigger.dev", "Gemini API", "Prisma", "Clerk"],
    icons: [
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "React Flow", icon: "material-symbols:account-tree" },
      { name: "Liveblocks", icon: "material-symbols:groups" },
      { name: "Trigger.dev", icon: "material-symbols:bolt" },
      { name: "Gemini API", icon: "material-symbols:auto-awesome" },
      { name: "Prisma", icon: "simple-icons:prisma" },
      { name: "Clerk", icon: "simple-icons:clerk" },
    ],
    liveDemo: "https://sysdes202.vercel.app",
    imageUrl: sysdesLandingImg,
    images: [sysdesLandingImg, sysdesEditorImg],
  },
  {
    title: "Bookly",
    description: "Personal cloud EPUB library with synced reading progress across devices.",
    features: [
      "Upload and read EPUB books anywhere",
      "Real-time reading progress sync",
      "Sandboxed reader preventing UI/style conflicts, using Foliate-js",
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "Clerk", "Zustand", "Tailwind CSS"],
    icons: [
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Supabase", icon: "logos:supabase-icon" },
      { name: "Clerk", icon: "simple-icons:clerk" },
      { name: "Foliate-js", icon: "material-symbols:menu-book" },
      { name: "Zustand", icon: "material-symbols:database" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    ],
    imageUrl: booklyLandingImg,
    images: [booklyLandingImg, booklyLibraryImg],
  },
  {
    title: "N8N Workflows",
    description: "Production automation systems and AI agents built for real client operations and outreach pipelines.",
    features: [
      "AI agents for voice, content, and workflow automation",
      "Multi-platform lead scraping and enrichment pipelines",
      "CRM-integrated outreach systems with real-time webhook orchestration",
    ],
    tags: ["n8n", "Automation", "LLM", "API Integration", "Webhooks", "CRM"],
    icons: [
      { name: "n8n", icon: "simple-icons:n8n" },
      { name: "Automation", icon: "material-symbols:auto-awesome" },
      { name: "API", icon: "material-symbols:api" },
      { name: "Webhooks", icon: "material-symbols:webhook" },
      { name: "Database", icon: "material-symbols:database" },
    ],
    imageUrl: n8nWorkflowCover,
    images: [n8nWorkflowCover],
  },
  {
    title: "Claude B2B Outreach Pipeline",
    description: "Autonomous AI outreach system for lead enrichment, personalization, and cold email automation.",
    features: [
      "Processes and enriches 50+ leads daily",
      "Sends 300+ personalized outreach emails monthly",
      "Custom Claude AI agents orchestrating the entire pipeline autonomously",
    ],
    tags: ["Claude Cowork", "Apollo", "Clay", "Lemlist"],
    icons: [
      { name: "Claude Cowork", icon: "simple-icons:anthropic" },
      { name: "Apollo", icon: "material-symbols:rocket-launch" },
      { name: "Clay", icon: "material-symbols:layers" },
      { name: "Lemlist", icon: "material-symbols:mail" },
    ],
    imageUrl: claudeCoworkOutreachImg,
    images: [claudeCoworkOutreachImg],
  },
  {
    title: "RAG PDF Assistant",
    description: "AI-powered document assistant enabling natural language conversations with PDF files using semantic search and retrieval using LangChain.",
    features: [
      "Semantic PDF search with context-aware responses with ChromaDB",
      "Retrieval pipeline powered by vector embeddings (Gemini)",
      "Real-time document processing and interactive Q&A",
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
    githubLink: "https://github.com/PranavSingla101/pdf_rag_chatbot",
  },
  {
    title: "Project AWARE",
    description: "ML-powered waterborne disease predictor for real-time monitoring of water-bodies.",
    features: [
      "Random Forest model achieving 82% accuracy in disease risk prediction",
      "Built real-time sensor using synthetic dataset",
      "Gemini AI integration for personalized health recommendations",
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
    description: "AI-powered platform for generating custom logos from natural language prompts using HuggingFace Image model (Flux).",
    features: [
      "AI-generated logo prompts optimized for brand styles",
      "Multi-model logo generation with Hugging Face and Replicate",
      "User dashboard with authentication, credits, and logo management using Firebase",
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
      { name: "Claude", icon: "simple-icons:anthropic" },
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
      { name: "Clay", icon: "material-symbols:layers" },
      { name: "Make.com", icon: "simple-icons:make" },
      { name: "Python Scripting", icon: "logos:python" },
      { name: "API Integration", icon: "material-symbols:api" },
      { name: "Webhooks", icon: "material-symbols:webhook" },
      { name: "JSON Parsing", icon: "material-symbols:code" },
      { name: "Chatbot Integration", icon: "material-symbols:smart-toy" },
      { name: "MCP", icon: "material-symbols:link" },
      { name: "Trigger.dev", icon: "material-symbols:bolt" },
      { name: "Data Pipelines", icon: "material-symbols:route" },
    ],
  },
  {
    category: "Libraries & Frameworks",
    skills: [
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Liveblocks", icon: "material-symbols:groups" },
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
      { name: "Prisma", icon: "simple-icons:prisma" },
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
