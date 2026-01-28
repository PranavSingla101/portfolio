import automatedEmailOutreachImg from "@/public/Automated Email Outreach.png";
import automatedContentEngineImg from "@/public/Automated Content Engine.png";
import linkedinOutreachImg from "@/public/LINKEDIN OUTREACH IMAGE.png";
import phantombusterLogo from "@/public/Phantombuster_LOGO.png";
import duckduckgoLogo from "@/public/Duckduckgologo.png";

export const n8nWorkflowsData = [
   {
      title: "Cold Email Outreach",
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
         "AI-Driven Pipeline: Uses n8n and Google Gemini to generate hyper-personalized connection messages based on HubSpot data in real-time",
         "Multi-Platform Orchestration: Connects HubSpot, Phantombuster, Google Sheets, and Slack to automate lead extraction and campaign execution",
         "Closed-Loop Synchronization: Automatically tracks connection acceptance rates, updates lead statuses, and notifies sales teams via Slack upon conversion",
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
