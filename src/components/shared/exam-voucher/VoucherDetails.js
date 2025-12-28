"use client";
import Link from "next/link";
import Countdown from "../countdown/Countdown";
import { useState } from "react";
import getAllProducts from "@/libs/getAllProducts";
import Image from "next/image";
import productImage8 from "@/assets/images/products/8.jpg";

const VoucherDetails = ({ id }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-30px">
        {/* delails left  */}
        <div className="relative">
          <div className="md:sticky top-[100px]">
            {/* Swiper  */}
            <div className="border border-borderColor dark:border-borderColor-dark w-[500px]">
              <Image src={productImage8} alt="" className="w-full h-[500px]" placeholder="blur" />
            </div>
          </div>
        </div>
        {/* details right  */}
        <div>
          <div className="text-balckColor dark:text-blackColor-dark">
            {/* title  */}
            <p className="text-lg leading-1.2 text-blackColor dark:text-blackColor-dark mb-15px mt-1">
              Amazon
            </p>
            <h4
              className={`text-size-21 md:text-size-26 lg:text-4xl font-bold $  mb-5 `}
            >

            <span className="leading-1.2 text-size-25 text-blackColor dark:text-blackColor-dark">
            AWS DevOps Engineer Professional (C01)
            </span>

            </h4>
            {/* price  */}
            <div className="flex items-center mb-5">
              <p className="text-lg leading-1.8 text-blackColor dark:text-blackColor-dark mr-6px">
                <del>$112 </del>
              </p>
              <p className="text-lg leading-1.8 text-blackColor dark:text-blackColor-dark mr-6px">
                111
              </p>
              <p className="text-size-15 leading-1.8 text-whiteColor mr-6px px-10px bg-primaryColor rounded">
                New
              </p>
              <p className="text-size-15 leading-1.8 text-whiteColor dark:text-whiteColor-dark mr-6px px-10px bg-blackColor dark:bg-blackColor-dark rounded">
                -27%
              </p>
            </div>
            <ul className="mb-15px">
              <li>✔ 90 Days validity</li>
              <li>✔ Exam Materials</li>
            </ul>
            {/* action button  */}
            <div>
              <button className="text-whiteColor dark:text-whiteColor-dark dark:hover:text-whiteColor leading-1.8 px-60px md:px-90px lg:px-110px py-3 md:py-15px bg-blackColor dark:bg-blackColor-dark hover:bg-primaryColor dark:hover:bg-primaryColor rounded-full">
                By it now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VoucherDetails;
