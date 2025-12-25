import CourseDetailsPrimary from "@/components/sections/course-details/CourseDetailsPrimary";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import React from "react";

const CourseDetailsMain = ({ id }) => {
  return (
    <>
      <CourseDetailsPrimary id={id} />
    </>
  );
};

export default CourseDetailsMain;
