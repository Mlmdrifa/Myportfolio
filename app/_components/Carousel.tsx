/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Section } from "./Section";
import { Spacing } from "./Spacing";

export default function Carousel({ items }: { items: { src: string }[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goToPreviousSlide = () => {
    const newIndex = (activeIndex - 1 + items.length) % items.length;
    setActiveIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (activeIndex + 1) % items.length;
    setActiveIndex(newIndex);
  };

  return (
    <div>
      <Section>
        <div
          id="carouselExampleIndicators"
          data-twe-carousel-init
          data-twe-ride="carousel"
        >
          <div
            className="flex justify-center space-x-2 mb-4 md:mb-0"
            data-twe-carousel-indicators
          >
            {items.map((_, index) => (
              <button
                key={index}
                data-twe-target="#carouselExampleIndicators"
                data-twe-slide-to={index + 1}
                data-twe-carousel-active={activeIndex === index}
                className={`
                  mx-1
                  h-2
                  w-2
                  rounded-full
                  bg-white
                  border
                  border-solid
                  border-transparent
                  focus:outline-none
                  focus:border-gray-500
                  transition-opacity
                  duration-300  
                  mb-8

                            ${
                              activeIndex === index
                                ? "opacity-100 active"
                                : "opacity-50"
                            }`}
                aria-label={`Slide ${index + 1}`}
                onClick={() => goToSlide(index)}
                aria-current={activeIndex === index ? "true" : "false"}
              />
            ))}
          </div>
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {items.map((item, index) => (
              <div
                key={index}
                data-twe-slide-to={index}
                data-twe-carousel-active={activeIndex === index}
                data-twe-target="#carouselExampleIndicators"
                className={`relative float-left ${
                  activeIndex === index ? "opacity-100" : "hidden"
                } w-full transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none`}
                data-twe-carousel-item
                onClick={() => goToSlide(index)}
                aria-current={activeIndex === index ? "true" : "false"}
              >
                <img src={item.src} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start space-y-5 md:space-y-0 mt-6 ">
            <div className="flex space-x-56">
              <button
                type="button"
                data-twe-target="#carouselExampleCaptions"
                data-twe-slide="prev"
                onClick={goToPreviousSlide}
              >
                <span className="inline-block h-8 w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="ml-1 absolute h-7 w-7  z-[1] opacity-90 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.25 19.5l-7.5-7.5 7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
              <button
                type="button"
                data-twe-target="#carouselExampleCaptions"
                data-twe-slide="next"
                onClick={goToNextSlide}
              >
                <span className="inline-block h-8 w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="mr-4 absolute h-7 w-7  z-[1] opacity-90 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
