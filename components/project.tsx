"use client";

import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
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
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
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
    <section className={`bg-gray-100 max-w-[58rem] border border-black/5 rounded-lg overflow-visible sm:pr-8 relative lg:min-h-[21rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 ${isN8NWorkflows ? 'cursor-pointer' : ''}`}>
      <div className="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 lg:max-w-[45%] flex flex-col h-full relative z-10">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <div className="flex flex-nowrap items-center gap-x-2 gap-y-1.5 mb-3 sm:mt-auto">
          <span className="font-bold text-gray-500 dark:text-white/70 whitespace-nowrap flex-shrink-0">
            Made with:{" "}
          </span>
          {icons.map((tech, iconIndex) => {
            const techName = typeof tech === 'string' ? '' : tech.name;
            const iconData = typeof tech === 'string' ? tech : tech.icon;

            if (typeof iconData === 'object' && 'src' in iconData) {
              return (
                <div key={iconIndex} className="relative w-6 h-6 flex-shrink-0" title={techName}>
                  <Image
                    src={iconData}
                    alt={techName}
                    fill
                    className="object-contain"
                    sizes="24px"
                  />
                </div>
              )
            }

            const isFastAPI = techName === 'FastAPI';
            return (
              <Icon
                key={iconIndex}
                icon={iconData as string}
                className={`${isFastAPI ? 'text-base' : 'text-lg'} flex-shrink-0 text-gray-700 dark:text-white/70`}
              />
            );
          })}
        </div>

        {/* Mobile Thumbnail Strip */}
        <div className="flex lg:hidden gap-2 overflow-x-auto pb-4 pt-1 scrollbar-hide">
          {displayImages.map((img, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border border-black/5 dark:border-white/5 transition-all hover:opacity-80 active:scale-95"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentImageIndex(index);
                setLightboxOpen(true);
              }}
            >
              <Image
                src={img}
                alt="Project thumbnail"
                quality={60}
                className="h-[60px] w-auto object-cover"
                height={60}
                width={100}
              />
            </div>
          ))}
        </div>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-3">
          {description}
        </p>
        {features && features.length > 0 && (
          <ul className="mt-3 mb-3 space-y-1.5 text-gray-700 dark:text-white/70">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-gray-500 dark:text-white/50">•</span>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="flex mt-5">
          {urlLink && (
            <a
              href={urlLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#111827] text-white py-2 px-4 mr-2 rounded-full hover:scale-105"
            >
              <BiLinkExternal className="mr-1" /> Live
            </a>
          )}

          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#111827] text-white py-2 px-4 mr-2 rounded-full hover:scale-105"
            >
              <AiFillYoutube className="mr-1" /> Demo
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center border border-[#111827] py-2 px-4 rounded-full mr-2 text-[#111827] hover:scale-105 dark:border-white dark:text-white dark:border-opacity-40"
            >
              <AiFillGithub className="mr-1 opacity-70" />{" "}
              <span className="opacity-70">GitHub</span>
            </a>
          )}
        </div>
      </div>

      {isN8NWorkflows && (
        <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-gray-800 bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700/50 rounded-full shadow-sm backdrop-blur-[2px] transition-all group-hover:shadow-md group-hover:bg-white dark:group-hover:bg-gray-800 dark:text-gray-200">
          <span>View Workflows</span>
          <BsChevronRight className="text-xs sm:text-sm transition-transform group-hover:translate-x-1" />
        </div>
      )}

      <div
        className="absolute hidden lg:block top-[50%] -translate-y-[50%] right-0 translate-x-[15%] w-[35rem] max-h-[30rem] rounded-t-lg shadow-2xl group/image overflow-visible z-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="w-full h-full rounded-t-lg overflow-hidden bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700"
          initial={{ scale: 0.9, opacity: 0.8, y: 20 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Image
                src={displayImages[currentImageIndex]}
                alt="Project I worked on"
                quality={95}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {displayImages.length > 1 && (
          <>
            <motion.button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-2 shadow-lg z-10 hover:bg-white dark:hover:bg-gray-800"
              aria-label="Previous image"
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 0 : -10
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <BsChevronLeft className="text-gray-900 dark:text-white text-xl" />
            </motion.button>

            <motion.button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-2 shadow-lg z-10 hover:bg-white dark:hover:bg-gray-800"
              aria-label="Next image"
              initial={{ opacity: 0, x: 10 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 0 : 10
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <BsChevronRight className="text-gray-900 dark:text-white text-xl" />
            </motion.button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {displayImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-200 ${index === currentImageIndex
                    ? 'w-6 bg-white dark:bg-white'
                    : 'w-1.5 bg-white/50 dark:bg-white/50'
                    } ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );

  return (
    <motion.div
      ref={ref}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      {isN8NWorkflows ? (
        <Link
          href="/n8n-workflows"
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setLightboxOpen(false);
            }}
          >
            <button
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors bg-white/10 rounded-full z-[10000]"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxOpen(false);
              }}
            >
              <IoMdClose size={24} />
            </button>

            <div
              className="relative w-full max-w-5xl max-h-[85vh] flex items-center justify-center p-2"
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
                  quality={95}
                  priority
                  className="w-full h-full max-h-[85vh] object-contain rounded-md shadow-2xl"
                />
              </motion.div>

              {displayImages.length > 1 && (
                <>
                  <button
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition backdrop-blur-md border border-white/10 z-[10000]"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage(e);
                    }}
                  >
                    <BsChevronLeft size={20} />
                  </button>
                  <button
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition backdrop-blur-md border border-white/10 z-[10000]"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage(e);
                    }}
                  >
                    <BsChevronRight size={20} />
                  </button>

                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                    {displayImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(idx);
                        }}
                        className={`h-2 rounded-full transition-all ${idx === currentImageIndex
                          ? "w-6 bg-white"
                          : "w-2 bg-white/40 hover:bg-white/60"
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
    </motion.div >
  );
}
