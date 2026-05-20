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
    description: "Real-time collaborative system design tool where multiple users share a live canvas with synchronized cursors, presence avatars, and node/edge editing.",
    features: [
      "Collaborative Canvas: Real-time multi-user design sharing with synchronized cursors, presence avatars, and node/edge editing via Liveblocks and React Flow",
      "AI Generator: Converts natural language prompts into structured diagrams using Gemini 3.0 Flash and Trigger.dev for background progress streaming",
      "Spec Pipeline: Serializes canvas graphs into Markdown technical specifications persisted to Vercel Blob with per-project access control",
      "Full-Stack System: Clerk authentication, Prisma collaborator invitations, canvas autosave with debounced writes, and starter template library",
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
    description: "Cloud-based personal e-library web app that lets users upload, manage, and read EPUB books from any device with progress synced cross-device via CFI string tracking.",
    features: [
      "Secure File Pipeline: Private Supabase Storage buckets proxied exclusively via authenticated Next.js API routes to hide raw storage URLs",
      "Isolated Epub Reader: Foliate-js inside an iframe with closed shadow DOM communicating via postMessage to prevent style leaks",
      "Progress Sync: Debounced reading progress sync with last-write-wins conflict resolution (409 on stale writes) via CFI tracking",
      "State Management: Zustand + localStorage client-side read cache with Supabase PostgreSQL as sole source of truth",
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
    description: "Production-grade automation workflows built with n8n. Fully automated end-to-end pipelines.",
    features: [
      "Advanced LLM integration for conversational voice bots and autonomous content engines",
      "Cross-platform scraping and data enrichment pipelines (LinkedIn, X, Apollo)",
      "Production-ready state management connecting CRM webhooks with real-time outreach",
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
    title: "RAG PDF Assistant",
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
    githubLink: "https://github.com/PranavSingla101/pdf_rag_chatbot",
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
