import Hero6 from "@/components/sections/hero-banners/Hero6";
import FeatureCourses from "@/components/sections/featured-courses/FeatureCourses";
import PopularSubjects2 from "@/components/sections/popular-subjects/PopularSubjects2";
import InstructorsPrimary from "@/components/sections/instructors/InstructorsPrimary";
import Brands from "@/components/sections/brands/Brands";
import BrandHero from "@/components/sections/sub-section/BrandHero";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import VideoReview from "@/components/sections/Video Review/VideoReview";
import CoursesFilter3 from "@/components/sections/courses/CoursesFilter3";

import React from "react";
const Home1 = () => {
  return (
    <>
      <Hero6 />
      <PopularSubjects2 />
      <CoursesFilter3/>
      <Brands />
      <BrandHero />
      <Testimonials />
      <VideoReview />
    </>
  );
};

export default Home1;
