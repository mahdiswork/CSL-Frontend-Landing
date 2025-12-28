"use client";
import React, { useRef } from "react";

const FilterController3 = () => {

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };
  return (
    <div data-aos="fade-up" className="relative">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-whiteColor dark:bg-whiteColor-dark shadow rounded-full w-8 h-8 flex items-center justify-center"
      >
        ‹
      </button>

      {/* Tabs */}
      <ul
        ref={scrollRef}
        className="
          filter-controllers
          flex flex-nowrap
          overflow-x-auto
          whitespace-nowrap
          scrollbar-hide
          bg-whiteColor dark:bg-whiteColor-dark
          p-10px 3xl:px-10 py-0
          2xl:mx-50px mb-25px
          rounded
          button-group filters-button-group
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]
        "
      >
      
        <li>
          <button
            data-filter="*"
            className="is-checked relative px-10px lg:px-3 2xl:px-15px py-10px md:py-4 lg:py-3 3xl:py-22px mx-10px md:mx-2 lg:mx-3 2xl:mx-15px text-base md:text-xs lg:text-base text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor after:w-0.5 after:h-15px after:absolute after:right-[-15px] after:bottom-1/2 after:translate-y-1/2 after:bg-contentColor before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300"
          >
            All
          </button>
        </li>
        <li>
          <button
            data-filter=".filter1"
            className="relative px-10px lg:px-3 2xl:px-15px py-10px md:py-4 lg:py-3 3xl:py-22px mx-10px md:mx-2 lg:mx-3 2xl:mx-15px text-base md:text-xs lg:text-base text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor after:w-0.5 after:h-15px after:absolute after:right-[-15px] after:bottom-1/2 after:translate-y-1/2 after:bg-contentColor before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300"
          >
            Computer Science
          </button>
        </li>
        <li>
          <button
            data-filter=".filter2"
            className="relative px-10px lg:px-3 2xl:px-15px py-10px md:py-4 lg:py-3 3xl:py-22px mx-10px md:mx-2 lg:mx-3 2xl:mx-15px text-base md:text-xs lg:text-base text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor after:w-0.5 after:h-15px after:absolute after:right-[-15px] after:bottom-1/2 after:translate-y-1/2 after:bg-contentColor before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300"
          >
            Data science
          </button>
        </li>
        <li>
          <button
            data-filter=".filter3"
            className="relative px-10px lg:px-3 2xl:px-15px py-10px md:py-4 lg:py-3 3xl:py-22px mx-10px md:mx-2 lg:mx-3 2xl:mx-15px text-base md:text-xs lg:text-base text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor after:w-0.5 after:h-15px after:absolute after:right-[-15px] after:bottom-1/2 after:translate-y-1/2 after:bg-contentColor before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300"
          >
            Engineering
          </button>
        </li>
        <li>
          <button
            data-filter=".filter4"
            className="relative px-10px lg:px-3 2xl:px-15px py-10px md:py-4 lg:py-3 3xl:py-22px mx-10px md:mx-2 lg:mx-3 2xl:mx-15px text-base md:text-xs lg:text-base text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor after:w-0.5 after:h-15px after:absolute after:right-[-15px] after:bottom-1/2 after:translate-y-1/2 after:bg-contentColor before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300"
          >
            Web Development
          </button>
        </li>
        <li>
          <button
            data-filter=".filter5"
            className="relative px-10px lg:px-3 2xl:px-15px py-10px md:py-4 lg:py-3 3xl:py-22px mx-10px md:mx-2 lg:mx-3 2xl:mx-15px text-base md:text-xs lg:text-base text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor after:w-0.5 after:h-15px after:absolute after:right-[-15px] after:bottom-1/2 after:translate-y-1/2 after:bg-contentColor before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300"
          >
            Security
          </button>
        </li>
        <li>
          <button
            data-filter=".filter6"
            className="relative px-10px lg:px-3 2xl:px-15px py-10px md:py-4 lg:py-3 3xl:py-22px mx-10px md:mx-2 lg:mx-3 2xl:mx-15px text-base md:text-xs lg:text-base text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor after:w-0.5 after:h-15px after:absolute after:right-[-15px] after:bottom-1/2 after:translate-y-1/2 after:bg-contentColor before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300"
          >
            System
          </button>
        </li>
        <li>
          <button
            data-filter=".filter7"
            className="relative px-10px lg:px-3 2xl:px-15px py-10px md:py-4 lg:py-3 3xl:py-22px mx-10px md:mx-2 lg:mx-3 2xl:mx-15px text-base md:text-xs lg:text-base text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300"
          >
            Architecture
          </button>
        </li>
        
      </ul>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-whiteColor shadow rounded-full w-8 h-8 flex items-center justify-center"
      >
        ›
      </button>
    </div>
  );
};

export default FilterController3;
