import automatedEmailOutreachImg from "@/public/Automated Email Outreach.png";
import automatedContentEngineImg from "@/public/Automated Content Engine.png";
import linkedinOutreachImg from "@/public/LINKEDIN OUTREACH IMAGE.png";
import phantombusterLogo from "@/public/Phantombuster_LOGO.png";
import duckduckgoLogo from "@/public/Duckduckgologo.png";

import voiceAgentImg from "@/public/Voice-Agent-Productivity Assistant.png";
import vapiSSImg from "@/public/VAPI SS.png";
import mcpSSImg from "@/public/MCP SS.png";
import icebreakerGeneratorImg from "@/public/ICEBREAKER GENERATOR.png";

export const n8nWorkflowsData = [
   {
      title: "Cold Email Outreach Engine",
      description: "AI-powered outbound system for lead qualification, personalized outreach, and automated campaign execution.",
      features: [
         "Automatically qualifies and enriches high-intent leads from Hubspot",
         "AI agents generate personalized outreach via Smartlead and contextual icebreakers",
         "CRM-integrated campaign execution with Slack and Gmail alerts",
      ],
      tags: ["Smartlead", "N8N", "Hubspot", "Gemini", "Slack"],
      icons: [
         { name: "N8N", icon: "simple-icons:n8n" },
         { name: "HubSpot", icon: "logos:hubspot" },
         { name: "Gemini", icon: "logos:google-gemini" },
         { name: "Slack", icon: "logos:slack-icon" },
         { name: "Smartlead", icon: "material-symbols:mail" },
      ],
      imageUrl: automatedEmailOutreachImg,
      images: [automatedEmailOutreachImg],
   },
   {
      title: "AI Website Scraper & Icebreaker",
      description: "AI agent that researches company websites and generates personalized outreach icebreakers from real business signals.",
      features: [
         "Crawls and analyzes company websites for key insights",
         "Extracts product, hiring, and growth signals using AI",
         "Generates personalized outreach openers from real company context",
      ],
      tags: ["n8n", "Apollo", "Firecrawl", "Gemini 2.5 Pro", "Sheets", "Gmail"],
      icons: [
         { name: "n8n", icon: "simple-icons:n8n" },
         { name: "Apollo", icon: "material-symbols:rocket-launch" },
         { name: "Firecrawl", icon: "material-symbols:local-fire-department" },
         { name: "Gemini (2.5 Pro)", icon: "logos:google-gemini" },
         { name: "Sheets", icon: "logos:google-sheets" },
         { name: "Gmail", icon: "logos:google-gmail" },
      ],
      imageUrl: icebreakerGeneratorImg,
      images: [icebreakerGeneratorImg],
   },
   {
      title: "Voice Agent Assistant",
      description: "AI voice agent that manages tasks, calendars, and workflow automation through natural conversation.",
      features: [
         "Real-time voice interactions with low-latency responses using VAPI",
         "AI agents triggering automated workflows and task execution via MCP",
         "Google Calendar integration for scheduling and information retrieval",
      ],
      tags: ["n8n", "Vapi", "OpenAI", "Google Calendar"],
      icons: [
         { name: "n8n", icon: "simple-icons:n8n" },
         { name: "Vapi", icon: "mdi:microphone" },
         { name: "OpenAI", icon: "simple-icons:openai" },
         { name: "Calendar", icon: "logos:google-calendar" },
      ],
      imageUrl: mcpSSImg,
      images: [mcpSSImg, voiceAgentImg, vapiSSImg],
   },
   {
      title: "X Content AI Agent",
      description: "AI-powered content system that researches, drafts, and schedules posts for X automatically.",
      features: [
         "System automatically pulls context from manual inputs and scrapes relevant industry news via RSS feeds and DuckDuckgo",
         "AI agents generating platform-specific content and hooks",
         "Scheduled content with logs on Google Sheets",
      ],
      tags: ["n8n", "Gemini", "Google Sheets", "X (Twitter)", "RSS"],
      icons: [
         { name: "N8N", icon: "simple-icons:n8n" },
         { name: "Gemini", icon: "logos:google-gemini" },
         { name: "Google Sheets", icon: "logos:google-sheets" },
         { name: "X", icon: "simple-icons:x" },
         { name: "DuckDuckGo", icon: duckduckgoLogo },
         { name: "RSS", icon: "material-symbols:rss-feed" },
      ],
      imageUrl: automatedContentEngineImg,
      images: [automatedContentEngineImg],
   },
   {
      title: "LinkedIn Outreach Agent",
      description: "AI-powered LinkedIn prospecting system built for automated lead generation and personalized outreach.",
      features: [
         "AI agents generating personalized connection messages from CRM data (Hubspot)",
         "Automated lead extraction and campaign orchestration across multiple platforms (Gemini, HubSpot, Phantombuster, Google Sheets, and Slack)",
         "Real-time CRM sync with engagement tracking and Slack notifications",
      ],
      tags: ["n8n", "HubSpot", "Phantombuster", "Gemini", "Slack", "Google Sheets"],
      icons: [
         { name: "N8N", icon: "simple-icons:n8n" },
         { name: "HubSpot", icon: "logos:hubspot" },
         { name: "Phantombuster", icon: phantombusterLogo },
         { name: "Gemini", icon: "logos:google-gemini" },
         { name: "Slack", icon: "logos:slack-icon" },
         { name: "Google Sheets", icon: "logos:google-sheets" },
      ],
      imageUrl: linkedinOutreachImg,
      images: [linkedinOutreachImg],
   },
] as const;
