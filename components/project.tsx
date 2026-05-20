"use client";

import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight, BsArrowRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";

type ProjectProps = {
  title: string;
  description: string;
  features?: readonly string[];
  tags: readonly string[];
  icons: readonly (string | { name: string; icon: string | StaticImageData })[];
  imageUrl: StaticImageData;
  images?: readonly StaticImageData[];
  githubLink?: string;
  demoLink?: string;
  urlLink?: string;
  liveDemo?: string;
};

export default function Project({
  title,
  description,
  features,
  tags,
  icons,
  imageUrl,
  images,
  githubLink,
  demoLink,
  urlLink,
  liveDemo,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const displayImages = images && images.length > 0 ? images : [imageUrl];
  const isN8NWorkflows = title === "N8N Workflows";

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  const cardContent = (
    <div className="group flex flex-col gap-0 w-full h-full rounded-3xl overflow-hidden border border-slate-600/40 bg-gradient-to-b from-slate-900 to-slate-950 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04)_inset] transition-all duration-300 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:border-slate-500/50">
      {/* ── Image ── */}
      <div
        className="relative w-full overflow-hidden cursor-zoom-in bg-slate-950 flex items-center justify-center aspect-[16/9] p-3"
        onClick={() => setLightboxOpen(true)}
      >
        {/* Main image — contain so nothing gets cropped; mobile-optimized aspect + padding */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute inset-3 z-[1] flex items-center justify-center rounded-xl ring-1 ring-slate-600/40 shadow-inner bg-slate-900/80 overflow-hidden"
          >
            <Image
              src={displayImages[currentImageIndex]}
              alt="Project screenshot"
              quality={100}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 55vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows — desktop only on mobile show in lightbox */}
        {displayImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm text-white rounded-full p-2.5 z-[4] opacity-0 group-hover:opacity-100 hover:bg-black/60 transition-all duration-200 border border-white/10 hidden lg:flex"
            >
              <BsChevronLeft className="text-base" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm text-white rounded-full p-2.5 z-[4] opacity-0 group-hover:opacity-100 hover:bg-black/60 transition-all duration-200 border border-white/10 hidden lg:flex"
            >
              <BsChevronRight className="text-base" />
            </button>

            {/* Dot indicators — show on all breakpoints so mobile users see there are more images / can swipe in lightbox */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-[4]">
              {displayImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                  className={`rounded-full transition-all duration-300 ${idx === currentImageIndex
                    ? "w-5 h-2 bg-white shadow-md"
                    : "w-2 h-2 bg-white/50 hover:bg-white/80"
                    }`}
                />
              ))}
            </div>
          </>
        )}

      </div>

      {/* ── Content ── */}
      <div className="w-full p-6 sm:p-8 flex flex-col flex-1 border-t border-slate-600/40">
        {/* Title row */}
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">
            {title}
          </h3>
        </div>

        {/* "Made with" tech icons */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 mb-5">
          <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
            Made with
          </span>
          <div className="flex flex-wrap gap-2.5 items-center">
            {icons.map((tech, iconIndex) => {
              const techName = typeof tech === "string" ? "" : tech.name;
              const iconData = typeof tech === "string" ? tech : tech.icon;

              if (typeof iconData === "object" && "src" in iconData) {
                return (
                  <div key={iconIndex} className="relative w-8 h-8 flex-shrink-0" title={techName}>
                    <Image src={iconData} alt={techName} fill className="object-contain" />
                  </div>
                );
              }

              const isFastAPI = techName === "FastAPI";
              return (
                <div key={iconIndex} title={techName} className="flex-shrink-0">
                  <Icon
                    icon={iconData as string}
                    className={`${isFastAPI ? "text-[1.25rem]" : "text-[1.5rem]"} text-slate-300`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Description */}
        <p className="leading-relaxed text-slate-300 mb-5 text-sm sm:text-base">
          {description}
        </p>

        {/* Feature bullets */}
        {features && features.length > 0 && (
          <ul className="mb-5 space-y-2" role="list">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-300 leading-relaxed">
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-300 ring-2 ring-indigo-300/40" aria-hidden />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2.5 mt-auto pt-1">
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-indigo-500 text-white py-2 px-4 rounded-xl text-sm font-semibold hover:bg-indigo-400 transition active:scale-[0.98]"
            >
              <BiLinkExternal /> Live Demo
            </a>
          )}

          {urlLink && (
            <a
              href={urlLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-indigo-500 text-white py-2 px-4 rounded-xl text-sm font-semibold hover:bg-indigo-400 transition active:scale-[0.98]"
            >
              <BiLinkExternal /> Live
            </a>
          )}

          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-indigo-500 text-white py-2 px-4 rounded-xl text-sm font-semibold hover:bg-indigo-400 transition active:scale-[0.98]"
            >
              <AiFillYoutube /> Demo
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 border border-slate-500/50 py-2 px-4 rounded-xl text-sm font-semibold text-slate-200 hover:bg-slate-700/50 hover:border-slate-400 transition active:scale-[0.98]"
            >
              <AiFillGithub /> GitHub
            </a>
          )}

          {isN8NWorkflows && (
            <span className="flex items-center gap-1.5 bg-indigo-500 text-white py-2 px-4 rounded-xl text-sm font-semibold hover:bg-indigo-400 transition cursor-pointer active:scale-[0.98]">
              View Workflows <BsArrowRight />
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full h-full"
    >
      {isN8NWorkflows ? (
        <Link
          href="/n8n-workflows"
          className="block w-full h-full"
          onClick={() => {
            setActiveSection("Projects");
            setTimeOfLastClick(Date.now());
          }}
        >
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 p-2.5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full z-[10000] transition border border-white/10"
              onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
            >
              <IoMdClose size={22} />
            </button>

            <div
              className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <Image
                  src={displayImages[currentImageIndex]}
                  alt="Project screenshot"
                  quality={100}
                  priority
                  className="max-h-[85vh] w-auto object-contain rounded-xl shadow-2xl ring-1 ring-white/10"
                  style={{ maxWidth: "100%" }}
                  width={1600}
                  height={1000}
                />
              </motion.div>

              {displayImages.length > 1 && (
                <>
                  <button
                    className="absolute left-0 sm:-left-14 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition backdrop-blur-md border border-white/10 z-[10000]"
                    onClick={(e) => { e.stopPropagation(); prevImage(e); }}
                  >
                    <BsChevronLeft size={20} />
                  </button>
                  <button
                    className="absolute right-0 sm:-right-14 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition backdrop-blur-md border border-white/10 z-[10000]"
                    onClick={(e) => { e.stopPropagation(); nextImage(e); }}
                  >
                    <BsChevronRight size={20} />
                  </button>

                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                    {displayImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                        className={`h-2 rounded-full transition-all ${idx === currentImageIndex ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                          }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
