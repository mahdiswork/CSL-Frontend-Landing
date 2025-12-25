import React from "react";
import Image from "next/image";
import wesupport from "@/assets/images/payment/payment-122.jpg";

const PayMethod = () => {
  return (
    <div className="p-2 shadow-event mb-30px bg-whiteColor dark:bg-whiteColor-dark rounded-md"
      data-aos="fade-up">
      <div className="overflow-hidden relative">
        <Image
            src={wesupport}
            alt=""
            className="w-full"
            placeholder="blur"
        />
      </div>
    </div>
  );
};

export default PayMethod;