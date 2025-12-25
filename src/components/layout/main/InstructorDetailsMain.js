import Testimonials3 from "@/components/sections/testimonials/Testimonials3";
import React from "react";

const InstructorDetailsMain = ({ id }) => {
  return (
    <>
      <Testimonials3 id={id} isInsTructorDetails={true} />
    </>
  );
};

export default InstructorDetailsMain;
