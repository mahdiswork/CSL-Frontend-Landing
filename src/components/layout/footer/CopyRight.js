import Image from "next/image";
import React from "react";
import logo1 from "@/assets/images/logo/csl-logo.png";

const CopyRight = () => {
  return (
    <div>
        <div className="pt-2 text-center">

          <div className="">
            <p className="text-whiteColor">
              Copyright © <span className="text-primaryColor" id="footeryear">2026 </span> by
              CSL Training. All Rights Reserved.
            </p>
          </div>

          <div className="mt-2 flex justify-center">
            <ul className="flex gap-3 lg:gap-2 2xl:gap-3 lg:justify-center">
              <li>
                <a
                  href="https://www.facebook.com"
                  className="w-40.19px lg:w-35px 2xl:w-40.19px h-37px lg:h-35px 2xl:h-37px leading-37px lg:leading-35px 2xl:leading-37px text-whiteColor bg-whiteColor bg-opacity-10 hover:bg-primaryColor text-center"
                >
                  <i className="icofont-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  className="w-40.19px lg:w-35px 2xl:w-40.19px h-37px lg:h-35px 2xl:h-37px leading-37px lg:leading-35px 2xl:leading-37px text-whiteColor bg-whiteColor bg-opacity-10 hover:bg-primaryColor text-center"
                >
                  <i className="icofont-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.vimeo.com"
                  className="w-40.19px lg:w-35px 2xl:w-40.19px h-37px lg:h-35px 2xl:h-37px leading-37px lg:leading-35px 2xl:leading-37px text-whiteColor bg-whiteColor bg-opacity-10 hover:bg-primaryColor text-center"
                >
                  <i className="icofont-vimeo"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  className="w-40.19px lg:w-35px 2xl:w-40.19px h-37px lg:h-35px 2xl:h-37px leading-37px lg:leading-35px 2xl:leading-37px text-whiteColor bg-whiteColor bg-opacity-10 hover:bg-primaryColor text-center"
                >
                  <i className="icofont-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.skype.com"
                  className="w-40.19px lg:w-35px 2xl:w-40.19px h-37px lg:h-35px 2xl:h-37px leading-37px lg:leading-35px 2xl:leading-37px text-whiteColor bg-whiteColor bg-opacity-10 hover:bg-primaryColor text-center"
                >
                  <i className="icofont-skype"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default CopyRight;
