"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight, BsArrowRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import Card from "./card";

type ProjectProps = {
  title: string;
  description: string;
  badge?: string;
  features?: readonly string[];
  tags: readonly string[];
  icons: readonly (string | { name: string; icon: string | StaticImageData })[];
  imageUrl: StaticImageData;
  images?: readonly StaticImageData[];
  githubLink?: string;
  demoLink?: string;
  urlLink?: string;
  liveDemo?: string;
  /** Zero-based position in the grid, rendered as "01", "02", … */
  index?: number;
};

const primaryBtn =
  "group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full py-2 text-sm font-semibold text-white transition-transform active:scale-[0.97] px-5";
const ghostBtn =
  "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-semibold text-white/80 transition-all hover:border-white/25 hover:bg-white/[0.08] hover:text-white active:scale-[0.97]";

function PrimaryButton({
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { children: React.ReactNode }) {
  return (
    <a className={primaryBtn} {...rest}>
      <span className="absolute inset-0 bg-gradient-to-r from-aurora-violet via-aurora-fuchsia to-aurora-cyan bg-[length:200%_100%] animate-gradient-shift" />
      <span className="absolute inset-[1.5px] rounded-full bg-ink-800 transition-opacity duration-300 group-hover/btn:opacity-0" />
      <span className="relative flex items-center gap-2">{children}</span>
    </a>
  );
}

export default function Project({
  title,
  description,
  badge,
  features,
  tags,
  icons,
  imageUrl,
  images,
  githubLink,
  demoLink,
  urlLink,
  liveDemo,
  index,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const displayImages = images && images.length > 0 ? images : [imageUrl];
  const isN8NWorkflows = title === "N8N Workflows";

  const nextImage = (e?: React.SyntheticEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
  };

  const prevImage = (e?: React.SyntheticEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  // Escape to close, arrow keys to navigate, and lock background scroll
  // while the lightbox is open.
  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, displayImages.length]);

  // Swipe support — the dot indicators imply swipeability on touch devices.
  const touchStartX = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || displayImages.length < 2) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      delta < 0 ? nextImage() : prevImage();
    }
    touchStartX.current = null;
  };

  const cardContent = (
    <Card
      radius="3xl"
      elevation="high"
      hover="lift"
      className="group h-full w-full"
    >
      {/* ── Image ── */}
      <div
        className="relative w-full overflow-hidden cursor-zoom-in aspect-[16/10] bg-ink-950"
        onClick={() => setLightboxOpen(true)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Tinted backdrop so letterboxed screenshots don't sit on flat black */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.18),transparent_60%)]" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-4 z-[1] overflow-hidden rounded-xl ring-1 ring-white/10 bg-ink-900/70 shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.025]"
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

        {/* Bottom fade into the card body */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-16 bg-gradient-to-t from-ink-900/80 to-transparent" />

        {/* Index tag */}
        {typeof index === "number" && (
          <span className="absolute left-5 top-5 z-[3] font-mono text-[0.65rem] tracking-[0.25em] text-white/60 rounded-full border border-white/10 bg-ink-900/60 backdrop-blur-md px-2.5 py-1">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}

        {/* Navigation arrows */}
        {displayImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Previous screenshot"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-[4] grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-ink-900/60 text-white backdrop-blur-md transition-all duration-300 hover:bg-ink-900/90 lg:opacity-0 lg:group-hover:opacity-100 lg:-translate-x-2 lg:group-hover:translate-x-0"
            >
              <BsChevronLeft className="text-sm" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next screenshot"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-[4] grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-ink-900/60 text-white backdrop-blur-md transition-all duration-300 hover:bg-ink-900/90 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-x-2 lg:group-hover:translate-x-0"
            >
              <BsChevronRight className="text-sm" />
            </button>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[4] flex gap-1.5 rounded-full border border-white/10 bg-ink-900/60 px-2 py-1.5 backdrop-blur-md">
              {displayImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                  aria-label={`Go to screenshot ${idx + 1}`}
                  aria-current={idx === currentImageIndex}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex
                      ? "w-5 bg-gradient-to-r from-aurora-violet to-aurora-cyan"
                      : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* ── Content ── */}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <h3 className="font-display text-2xl sm:text-[1.7rem] font-bold tracking-tight text-white leading-tight">
            {title}
          </h3>
          {badge && (
            <span className="rounded-full border border-aurora-fuchsia/30 bg-aurora-fuchsia/10 px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-aurora-fuchsia">
              {badge}
            </span>
          )}
        </div>

        {/* Stack */}
        <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="flex items-center gap-3 shrink-0">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.25em] text-white/40">
              Stack
            </span>
            <span className="h-px w-4 bg-white/15" aria-hidden />
          </span>
          <div className="flex flex-wrap items-center gap-1.5">
            {icons.map((tech, iconIndex) => {
              const techName = typeof tech === "string" ? "" : tech.name;
              const iconData = typeof tech === "string" ? tech : tech.icon;

              return (
                <div
                  key={iconIndex}
                  title={techName}
                  className="group/icon relative flex h-8 min-w-[2rem] shrink-0 items-center justify-center rounded-lg px-2 border border-white/[0.07] bg-white/[0.03] transition-all duration-300 hover:border-aurora-violet/40 hover:bg-aurora-violet/10 hover:-translate-y-0.5"
                >
                  {typeof iconData === "object" && "src" in iconData ? (
                    <div className="relative h-4 w-4">
                      <Image src={iconData} alt={techName} fill className="object-contain" />
                    </div>
                  ) : (
                    <Icon icon={iconData as string} height={18} className="text-white/80" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <p className="mb-5 text-sm sm:text-[0.95rem] leading-relaxed text-white/60">
          {description}
        </p>

        {features && features.length > 0 && (
          <ul className="mb-6 space-y-2.5" role="list">
            {features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm sm:text-[0.95rem] leading-relaxed text-white/75"
              >
                <span
                  className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-aurora-violet to-aurora-cyan shadow-[0_0_10px_rgba(139,92,246,0.7)]"
                  aria-hidden
                />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Actions */}
        <div className="mt-auto flex flex-wrap gap-2.5 pt-2">
          {liveDemo && (
            <PrimaryButton href={liveDemo} target="_blank" rel="noopener noreferrer">
              <BiLinkExternal /> Live Demo
            </PrimaryButton>
          )}
          {urlLink && (
            <PrimaryButton href={urlLink} target="_blank" rel="noopener noreferrer">
              <BiLinkExternal /> Live
            </PrimaryButton>
          )}
          {demoLink && (
            <PrimaryButton href={demoLink} target="_blank" rel="noopener noreferrer">
              <AiFillYoutube /> Demo
            </PrimaryButton>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className={ghostBtn}>
              <AiFillGithub /> GitHub
            </a>
          )}
          {isN8NWorkflows && (
            <Link
              href="/n8n-workflows"
              onClick={() => {
                setActiveSection("Projects");
                setTimeOfLastClick(Date.now());
              }}
              className={primaryBtn}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-aurora-violet via-aurora-fuchsia to-aurora-cyan bg-[length:200%_100%] animate-gradient-shift" />
              <span className="absolute inset-[1.5px] rounded-full bg-ink-800 transition-opacity duration-300 group-hover/btn:opacity-0" />
              <span className="relative flex items-center gap-2">
                View Workflows
                <BsArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </span>
            </Link>
          )}
        </div>
      </div>
    </Card>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="h-full w-full"
    >
      {cardContent}

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-xl sm:p-8"
            onClick={() => setLightboxOpen(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} screenshots`}
          >
            <button
              className="absolute right-4 top-4 z-[10000] grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white/80 transition hover:bg-white/15 hover:text-white"
              aria-label="Close image viewer"
              autoFocus
              onClick={(e) => {
                e.stopPropagation();
                setLightboxOpen(false);
              }}
            >
              <IoMdClose size={22} />
            </button>

            <div className="absolute left-6 top-6 hidden sm:block font-mono text-xs uppercase tracking-[0.3em] text-white/40">
              {title}
              {displayImages.length > 1 && (
                <span className="ml-3 text-white/25">
                  {currentImageIndex + 1} / {displayImages.length}
                </span>
              )}
            </div>

            <div
              className="relative flex max-h-[90vh] w-full max-w-6xl items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", damping: 26, stiffness: 300 }}
                className="relative flex h-full w-full items-center justify-center"
              >
                <Image
                  src={displayImages[currentImageIndex]}
                  alt="Project screenshot"
                  quality={100}
                  priority
                  className="max-h-[85vh] w-auto rounded-2xl object-contain shadow-glow-lg ring-1 ring-white/10"
                  style={{ maxWidth: "100%" }}
                  width={1600}
                  height={1000}
                />
              </motion.div>

              {displayImages.length > 1 && (
                <>
                  <button
                    className="absolute left-0 top-1/2 z-[10000] grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-ink-900/70 text-white backdrop-blur-md transition hover:bg-ink-800 sm:-left-16"
                    aria-label="Previous screenshot"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage(e);
                    }}
                  >
                    <BsChevronLeft size={20} />
                  </button>
                  <button
                    className="absolute right-0 top-1/2 z-[10000] grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-ink-900/70 text-white backdrop-blur-md transition hover:bg-ink-800 sm:-right-16"
                    aria-label="Next screenshot"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage(e);
                    }}
                  >
                    <BsChevronRight size={20} />
                  </button>

                  <div className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 gap-2">
                    {displayImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(idx);
                        }}
                        aria-label={`Go to screenshot ${idx + 1}`}
                        aria-current={idx === currentImageIndex}
                        className={`h-1.5 rounded-full transition-all ${
                          idx === currentImageIndex
                            ? "w-7 bg-gradient-to-r from-aurora-violet to-aurora-cyan"
                            : "w-1.5 bg-white/30 hover:bg-white/60"
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
