import CourseDetailsSidebar from "@/components/shared/courses/CourseDetailsSidebar";
import Image from "next/image";
import blogImag8 from "@/assets/images/blog/blog_8.png";
import BlogTagsAndSocila from "@/components/shared/blog-details/BlogTagsAndSocila";
import ClientComment from "@/components/shared/blog-details/ClientComment";
import CommentFome from "@/components/shared/forms/CommentFome";
import CourseDetailsTab from "@/components/shared/course-details/CourseDetailsTab";
import InstrutorOtherCourses from "@/components/shared/course-details/InstrutorOtherCourses";
import getAllCourses from "@/libs/getAllCourses";
let cid = 0;
const CourseDetailsPrimary = ({ id: currentId, type }) => {
  const allCourses = getAllCourses();
  const course = allCourses?.find(({ id }) => parseInt(currentId) === id);
  const { title, price, lesson, insName, categories, id } = course || {};
  cid = id;
  cid = cid % 6 ? cid % 6 : 6;

  return (
    <section>
      <div className="container py-10 md:py-50px lg:py-60px 2xl:py-100px">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-30px">
          <div className="lg:col-start-1 lg:col-span-8 space-y-[35px]">
            {/* course 1  */}
            <div data-aos="fade-up">
              {/* course thumbnail  */}
              {type === 2 || type === 3 ? (
                ""
              ) : (
                <div className="overflow-hidden relative mb-5">
                  <Image
                    src={blogImag8}
                    alt=""
                    className="w-full"
                    placeholder="blur"
                  />
                </div>
              )}
              {/* course content  */}
              <div>
                {type === 2 || type === 3 ? (
                  ""
                ) : (
                  <>
                    {/* titile  */}
                    <h4
                      className="text-size-32 md:text-4xl font-bold text-blackColor dark:text-blackColor-dark mb-15px leading-43px md:leading-14.5"
                      data-aos="fade-up"
                    >
                      {title || "Making Music with Other People"}
                    </h4>
                    {/* price and rating  */}
                    <p
                      className="text-sm md:text-lg text-contentColor dark:contentColor-dark mb-25px !leading-30px"
                      data-aos="fade-up"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur vulputate vestibulum rhoncus, dolor eget viverra
                      pretium, dolor tellus aliquet nunc, vitae ultricies erat
                      elit eu lacus. Vestibulum non justo consectetur, cursus
                      ante, tincidunt sapien. Nulla quis diam sit amet turpis
                      interd enim. Vivamus faucibus ex sed nibh egestas
                      elementum. Mauris et bibendum dui. Aenean consequat
                      pulvinar luctus. Suspendisse consectetur tristique
                    </p>
                  </>
                )}
                {/* course tab  */}
                <CourseDetailsTab id={cid} type={type} />
                {/* tag and share   */}

                <BlogTagsAndSocila />
                {/* other courses  */}
                <InstrutorOtherCourses />
                {/* previous comment area  */}
                {/* <ClientComment /> */}
                {/* write comment area  */}
                {/* <CommentFome /> */}
              </div>
            </div>
          </div>
          {/* course sidebar  */}
          <div
            className={`lg:col-start-9 lg:col-span-4 ${
              type === 2 || type === 3 ? "relative lg:top-[-340px]" : ""
            }`}
          >
            <CourseDetailsSidebar type={type} course={course} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsPrimary;
