import Image from "next/image";
import React from "react";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import brand1 from "@/assets/images/brand/brand_1.png";
import brand2 from "@/assets/images/brand/brand_2.png";
import brand3 from "@/assets/images/brand/brand_3.png";
import brand4 from "@/assets/images/brand/brand_4.png";
import brand5 from "@/assets/images/brand/brand_5.png";


const BrandHero = () => {
  const brands = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
  ];
  
  return (
    <section className="bg-white dark:bg-lightGrey10-dark">
      <div className="container pt-60px pb-60px">
        {/* Brands Heading  */}
        <div className="mb-5 md:mb-10" data-aos="fade-up">
          <HeadingPrimary text="center">
            Our Corporate Clients
          </HeadingPrimary>
        </div>
        {/* brands  */}
        <div className="flex flex-wrap justify-center items-center">
          {brands.map((brand, idx) => (
            <div
            key={idx}
              className="basis-1/2 md:basis-1/4 lg:basis-1/5"
              data-aos="fade-up"
            >
            <a href="#" className="pt-25px pb-45px text-center w-full flex justify-center">
                <Image src={brand} alt="" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandHero;
