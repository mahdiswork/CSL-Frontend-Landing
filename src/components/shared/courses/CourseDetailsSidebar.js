import BlogContactForm from "../blogs/BlogContactForm";
import BlogSocials from "../blogs/BlogSocials";
import BlogTags from "../blogs/BlogTags";
import CourseEnroll from "../course-details/CourseEnroll";
import PopularCoursesMini from "../course-details/PopularCoursesMini";
import PayMethod from "./PayMethod";

const CourseDetailsSidebar = ({ type, course }) => {
  return (
    <div className="flex flex-col">
      {/* enroll section  */}
      <CourseEnroll type={type} course={course} />
      <PayMethod/>
    </div>
  );
};

export default CourseDetailsSidebar;
