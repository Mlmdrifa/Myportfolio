/* eslint-disable @next/next/no-img-element */
// /* eslint-disable @next/next/no-img-element */
// // /* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

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
      <div>
        <div
          className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-twe-carousel-indicators
        >
          {items.map((_, index) => (
            <button
              key={index}
              data-twe-target="#carouselExampleIndicators"
              data-twe-slide-to={index}
              data-twe-carousel-active={activeIndex === index}
              className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${
                activeIndex === index ? "opacity-100" : ""
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
              } w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
              data-twe-carousel-item
              onClick={() => goToSlide(index)}
              aria-current={activeIndex === index ? "true" : "false"}
            >
              <img src={item.src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
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
              className="h-6 w-6"
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
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
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
              className="h-6 w-6"
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
  );
}
