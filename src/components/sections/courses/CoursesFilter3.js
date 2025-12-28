import FilterCards from "@/components/shared/courses/FilterCards";
import FilterController3 from "@/components/shared/courses/FilterController3";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import SectionName from "@/components/shared/section-names/SectionName";
import FilterControllerWrapper from "@/components/shared/wrappers/FilterControllerWrapper";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const CoursesFilter3 = ({ type }) => {
  return (
    <section>
      <div className="pt-50px pb-10 md:pt-70px md:pb-50px lg:pt-20 2xl:pt-100px 2xl:pb-70px  dark:bg-lightGrey7-dark">
        <div
          className={`filter-container ${
            type ? "container-fluid-2" : " container"
          }`}
        >
          {/* courses Heading */}
          <div className="mb-5 md:mb-10" data-aos="fade-up">

            <HeadingPrimary text="center">
              Our courses
            </HeadingPrimary>
          </div>

          {/* courses tabs */}
          <FilterControllerWrapper>
            <FilterController3 />
          </FilterControllerWrapper>
          {/* course cards */}

          <FilterCards type={type} />
          <div className="text-center">
            <ButtonPrimary color="primaryColor" path="/courses">
              View all <i className="icofont-long-arrow-right"></i>
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesFilter3;
