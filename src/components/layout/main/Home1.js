import Hero6 from "@/components/sections/hero-banners/Hero6";
import FeatureCourses from "@/components/sections/featured-courses/FeatureCourses";
import PopularSubjects2 from "@/components/sections/popular-subjects/PopularSubjects2";
import PopularSubjects3 from "@/components/sections/popular-subjects/PopularSubjects3";
import Registration from "@/components/sections/registrations/Registration";
import Counter2 from "@/components/sections/sub-section/Counter2";
import Instructors2 from "@/components/sections/instructors/Instructors2";
import Brands from "@/components/sections/brands/Brands";

import React from "react";
const Home1 = () => {
  return (
    <>
      <Hero6 />
      <PopularSubjects2 />
      <PopularSubjects3 />
      <FeatureCourses title={"Our online courses"} />
      <Counter2 />
      <Instructors2 />
      <Brands />
      <Registration />
    </>
  );
};

export default Home1;
