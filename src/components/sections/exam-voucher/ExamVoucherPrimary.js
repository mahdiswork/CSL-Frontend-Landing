"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import brandImage7 from "@/assets/images/brand/brand_7.png";
import gridImage11 from "@/assets/images/grid/kid_2.jpg";

const ExamVoucherPrimary = () => {
  return (
    <>
      {/*Main Wrapper*/}
      <div className="container mx-auto px-4 py-10">
        {/*Grid Layout*/}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/*Sidebar*/}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="w-full h-full border rounded-lg p-4">
              <div className="md:col-start-1 md:col-span-4 lg:col-span-3">
              <div className="flex flex-col ">
                {/* Top Certifications */}

                  <h4 className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold leading-30px mb-15px">
                    Top Certifications
                  </h4>
                  <ul className="flex flex-col gap-y-4">
                    <li>
                      <Link href="/"
                        className="
                          w-full flex justify-between items-center
                          text-sm font-medium leading-7
                          px-13px py-2
                          border border-borderColor dark:border-borderColor-dark
                          text-contentColor dark:text-contentColor-dark
                          hover:bg-primaryColor
                          hover:text-white
                          hover:border-primaryColor
                          rounded
                        "
                      >
                        Art & Design <span>05</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="
                        w-full flex justify-between items-center
                        text-sm font-medium leading-7
                        px-13px py-2
                        border border-borderColor dark:border-borderColor-dark
                        text-contentColor dark:text-contentColor-dark
                        hover:bg-primaryColor
                        hover:text-white
                        hover:border-primaryColor
                        rounded
                      ">
                        Development <span>12</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="
                        w-full flex justify-between items-center
                        text-sm font-medium leading-7
                        px-13px py-2
                        border border-borderColor dark:border-borderColor-dark
                        text-contentColor dark:text-contentColor-dark
                        hover:bg-primaryColor
                        hover:text-white
                        hover:border-primaryColor
                        rounded
                      ">
                        Marketing <span>08</span>
                      </Link>
                    </li>
                  </ul>

              </div>
            </div>

            </div>
          </div>

          {/*Course Section*/}
          <div className="md:col-span-8 lg:col-span-9">
            <div className="w-full h-full border rounded-lg p-4">
              <div className="w-full group grid-item rounded">
                <div className="tab-content-wrapper">
                  <div className="p-15px lg:pr-30px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark flex flex-wrap md:flex-nowrap rounded">
                    
                    {/* Image */}
                    <div className="relative overflow-hidden w-full md:w-30% flex items-center">
                      <Link href="/exam-voucher/1" className="w-full overflow-hidden rounded">
                        <Image
                          src={gridImage11}
                          alt="course"
                          className="w-full transition-all duration-300 scale-105 group-hover:scale-110 -mb-1"
                        />
                      </Link>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-70%">
                      <div className="pl-0 md:pl-5 lg:pl-30px">
                        {/* Title */}
                        <h4>
                          <Link
                            href="/exam-voucher/1"
                            className="text-xl 2xl:text-size-24 font-semibold text-blackColor mb-10px dark:text-blackColor-dark hover:text-primaryColor"
                          >
                          AWS DevOps Engineer Professional (C01)
                          </Link>
                        </h4>

                        {/* Price */}
                        <div className="text-lg font-medium text-black-brerry-light mb-4">
                          $49.00
                          <del className="text-sm text-lightGrey4 font-semibold">
                            / $67.00
                          </del>
                          {/* <span className="ml-6 text-base font-semibold text-greencolor">
                            Free
                          </span> */}
                        </div>

                        {/* Footer */}
                        <div className="flex flex-wrap justify-between items-center gap-y-2 pt-15px border-t border-borderColor">
                          
                          {/* Meta */}
                          <div className="grid grid-cols-2 mb-15px gap-2">
                            <div className="flex items-center">
                              <i className="icofont-book-alt pr-5px text-primaryColor text-lg"></i>
                              <span className="text-sm text-black dark:text-blackColor-dark">
                                100 Qtns
                              </span>
                            </div>
                            <div className="flex items-center">
                              <i className="icofont-clock-time pr-5px text-primaryColor text-lg"></i>
                              <span className="text-sm text-black dark:text-blackColor-dark">
                                3Hours
                              </span>
                            </div>
                          </div>

                          {/* Button */}
                          <Link
                            href="/exam-voucher/1"
                            className="text-sm lg:text-base text-blackColor hover:text-primaryColor"
                          >
                            Details <i className="icofont-arrow-right"></i>
                          </Link>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default ExamVoucherPrimary;
