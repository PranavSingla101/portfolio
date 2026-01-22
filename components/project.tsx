"use client";

import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Icon } from "@iconify/react";

type ProjectProps = {
  title: string;
  description: string;
  features?: readonly string[];
  tags: readonly string[];
  icons: readonly (string | { name: string; icon: string })[];
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
  
  const displayImages = images && images.length > 0 ? images : [imageUrl];
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
  };
  
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  return (
    <motion.div
      ref={ref}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[58rem] border border-black/5 rounded-lg overflow-visible sm:pr-8 relative lg:min-h-[21rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 lg:max-w-[45%] flex flex-col h-full relative z-10">
          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          <div className="flex flex-nowrap items-center gap-x-2 gap-y-1.5 mb-3 sm:mt-auto">
            <span className="font-bold text-gray-500 dark:text-white/70 whitespace-nowrap flex-shrink-0">
              Made with:{" "}
            </span>
            {icons.map((tech, iconIndex) => {
              const techName = typeof tech === 'string' ? '' : tech.name;
              const isFastAPI = techName === 'FastAPI';
              return (
                <Icon 
                  key={iconIndex} 
                  icon={typeof tech === 'string' ? tech : tech.icon} 
                  className={`${isFastAPI ? 'text-base' : 'text-lg'} flex-shrink-0 text-gray-700 dark:text-white/70`} 
                />
              );
            })}
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
                    className={`h-1.5 rounded-full transition-all duration-200 ${
                      index === currentImageIndex
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
    </motion.div>
  );
}
