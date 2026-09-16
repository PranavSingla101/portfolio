import Header from "@/components/header";
import Footer from "@/components/footer";
import Background from "@/components/background";
import ScrollProgress from "@/components/scroll-progress";
import CursorGlow from "@/components/cursor-glow";
import {
  Inter,
  Syne,
  JetBrains_Mono,
  Instrument_Serif,
} from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-syne",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  adjustFontFallback: false,
});

export const metadata = {
  title: "Pranav Singla | Software Developer",
  description:
    "Computer Science undergraduate with expertise in Full-Stack Development and Applied AI. Building end-to-end web applications with Python, JavaScript, React, and integrating advanced AI features including multi-modal RAG systems and LLM-based workflows.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`!scroll-smooth dark ${inter.variable} ${syne.variable} ${jetbrains.variable} ${instrument.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans bg-ink-900 text-[#e7e7f0] relative grain">
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Background />
            <CursorGlow />
            <ScrollProgress />
            <Header />
            {children}
            <Footer />

            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background: "rgba(18,18,29,0.9)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                },
              }}
            />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
