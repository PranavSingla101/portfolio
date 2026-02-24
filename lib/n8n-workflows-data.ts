import automatedEmailOutreachImg from "@/public/Automated Email Outreach.png";
import automatedContentEngineImg from "@/public/Automated Content Engine.png";
import linkedinOutreachImg from "@/public/LINKEDIN OUTREACH IMAGE.png";
import phantombusterLogo from "@/public/Phantombuster_LOGO.png";
import duckduckgoLogo from "@/public/Duckduckgologo.png";

import voiceAgentImg from "@/public/Voice-Agent-Productivity Assistant.png";
import vapiSSImg from "@/public/VAPI SS.png";
import mcpSSImg from "@/public/MCP SS.png";
import n8nWorkflowCover from "@/public/N8N workflow cover.png";

export const n8nWorkflowsData = [
   {
      title: "Cold Email Outreach Engine",
      description: "This project automates intelligent email outreach by retrieving Lead data from HubSpot and using Gemini to generate hyper-personalized, industry-specific messages, before pushing campaigns to Smartlead for execution.",
      features: [
         "Lead Qualification: Automatically pulls high-intent leads from HubSpot",
         "AI Personalization: Uses an LLM agent to write unique, contextual icebreakers for every prospect",
         "Campaign Execution: Pushes leads directly into Smartlead and logs in Google Sheet",
         "The Closer: When a lead replies? The system detects it, updates the CRM, and instantly alerts the sales team on Slack and Gmail",
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
      description: "Built an AI workflow that writes personalized icebreakers using real company data, not templates. It crawls key pages, extracts meaningful signals, and aggregates context to generate specific, relevant openers.",
      features: [
         "Company Research: Crawl key pages (home, about, product, blog) and extract meaningful signals",
         "AI Summarization: Convert pages into usable insights (product, growth, hiring, messaging)",
         "Context Aggregation: Combine everything into a clean company profile, focusing only on what’s relevant",
         "Icebreaker Generation: Generate multi-line personalized openers based on actual insights",
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
      imageUrl: n8nWorkflowCover,
      images: [n8nWorkflowCover],
   },
   {
      title: "Voice Agent Assistant",
      description: "A voice assistant that eliminates manual tasks. This workflow manages calendars, creates tasks, and retrieves information, responding instantly with minimal latency.",
      features: [
         "Real-time Voice AI: Leverages Vapi for natural, conversational interactions",
         "Contextual Action: Intelligently parses intent to trigger n8n workflows via MCP depending on tasks",
         "Personal Knowledge Base: Connects to Google Calendar to read/write data seamlessly",
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
      title: "X Content Engine",
      description: "A fully automated content engine that sources, drafts, and schedules posts for X (Twitter). It combines industry news scraping with AI-driven research to maintain an active social presence on autopilot",
      features: [
         "The Trigger & Input: System automatically pulls context from manual inputs and scrapes relevant industry news via RSS feeds",
         "AI Agent: Powered by Gemini and DuckDuckGo to research unique hooks and draft high-conversion posts",
         "Storage: Drafted content is formatted and automatically saved to Google Sheets for review",
         "Distribution: Daily automated retrieval and posting of approved content to X",
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
      title: "LinkedIn Outreach",
      description: "Designed and deployed an end-to-end automated prospecting workflow that integrates HubSpot CRM with AI-powered content generation to streamline LinkedIn outreach. The system manages the entire lifecycle: from identifying new leads and sending personalized invites to syncing acceptance data back to the CRM, significantly reducing manual effort while increasing engagement rates.",
      features: [
         "AI-Driven Pipeline: Uses Gemini 2.5 pro API to generate hyper-personalized connection messages based on HubSpot data in real-time",
         "Multi-Platform Orchestration: Connects HubSpot, Phantombuster, Google Sheets, and Slack to automate lead extraction and campaign execution",
         "Sync: Automatically tracks connection acceptance rates, updates lead statuses, and notifies sales teams via Slack",
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
