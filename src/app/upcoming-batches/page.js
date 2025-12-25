import Home1 from "@/components/layout/main/Home1";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import Link from "next/link";
import eventImage1 from "@/assets/images/event/event__1.png";
import Image from "next/image";

export default function Home() {
  return (
    <PageWrapper>
      <main>
        <div className="container mt-4">
          <div className="grid grid-cols-3 grid-rows-2 gap-4" data-aos="fade-up">
            <div className="grid-cols-4 mb-3 rounded-lg bg-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-4 h-15 w-15 rounded-full object-cover bg-black flex items-center justify-center flex-wrap">
                    <p className="text-white text-center">17</p>
                    <p className="text-white text-center text-size-19">Jun</p>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">DevOps Course B-200</h3>
                    <span className="text-size-12 font-semibold text-primaryColor bg-whitegrey3 px-15px py-5px rounded leading-1">Trainer: John Doe</span>
                  </div>
                </div>
              </div>
              <pre className="mt-4 bg-gray-100 p-4 rounded-5">
                <ul class="max-w-md space-y-1 text-body list-disc list-inside">
                    <li>
                        Sat (7:00PM - 9:00PM)
                    </li>
                    <li>
                        Sun (7:00PM - 9:00PM)
                    </li>
                    <li>
                        Wed (7:00PM - 9:00PM)
                    </li>
                </ul>
                </pre>
              <div className="text-center">
                <Link href="/courses/1" className="btn btn-primary mt-4 hover:text-red-500">View Course <i className="icofont-long-arrow-right"></i></Link>
              </div>
            </div>

            <div className="grid-cols-4 mb-6 rounded-lg bg-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-4 h-15 w-15 rounded-full object-cover bg-black flex items-center justify-center flex-wrap">
                    <p className="text-white text-center">17</p>
                    <p className="text-white text-center text-size-19">Jun</p>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">DevOps Course B-200</h3>
                    <span className="text-size-12 font-semibold text-primaryColor bg-whitegrey3 px-15px py-5px rounded leading-1">Trainer: John Doe</span>
                  </div>
                </div>
              </div>
              <pre className="mt-4 bg-gray-100 p-4 rounded-5">
                <ul class="max-w-md space-y-1 text-body list-disc list-inside">
                    <li>
                        Sat (7:00PM - 9:00PM)
                    </li>
                    <li>
                        Sun (7:00PM - 9:00PM)
                    </li>
                    <li>
                        Wed (7:00PM - 9:00PM)
                    </li>
                </ul>
                </pre>
              <div className="text-center">
                <Link href="/courses/1" className="btn btn-primary mt-4 hover:text-red-500">View Course <i className="icofont-long-arrow-right"></i></Link>
              </div>
            </div>

            <div className="grid-cols-4 mb-6 rounded-lg bg-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-4 h-15 w-15 rounded-full object-cover bg-black flex items-center justify-center flex-wrap">
                    <p className="text-white text-center">17</p>
                    <p className="text-white text-center text-size-19">Jun</p>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">DevOps Course B-200</h3>
                    <span className="text-size-12 font-semibold text-primaryColor bg-whitegrey3 px-15px py-5px rounded leading-1">Trainer: John Doe</span>
                  </div>
                </div>
              </div>
              <pre className="mt-4 bg-gray-100 p-4 rounded-5">
                <ul class="max-w-md space-y-1 text-body list-disc list-inside">
                    <li>
                        Sat (7:00PM - 9:00PM)
                    </li>
                    <li>
                        Sun (7:00PM - 9:00PM)
                    </li>
                    <li>
                        Wed (7:00PM - 9:00PM)
                    </li>
                </ul>
                </pre>
              <div className="text-center">
                <Link href="/courses/1" className="btn btn-primary mt-4 hover:text-red-500">View Course <i className="icofont-long-arrow-right"></i></Link>
              </div>
            </div>
          </div>
          


          {/* <div
            className="flex flex-col md:flex-row md:gap-30px lg:gap-10 items-center md:items-star bg-whiteColor dark:whiteColor-dark p-15px md:p-5 transition-all duration-300 group hover:text-whiteColor hover:bg-primaryColor dark:bg-whiteColor-dark dark:hover:bg-primaryColor shadow-experience rounded"
            data-aos="fade-up"
          >
            <div className="flex-shrink-0">
              <Image src={eventImage1} alt="Not" className="w-170px" placeholder="blur" />
            </div>
            <div className="py-18px">
              <div>
                <p className="text-sm text-blackColor mb-10px group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor">
                  <i className="icofont-clock-time text-primaryColor pr-1 group-hover:text-whiteColor dark:hover:text-whiteColor"></i>
                  <span className="pr-2">dty</span>
                  <span className="text-primaryColor group-hover:text-whiteColor dark:group-hover:text-whiteColor">
                    Speaker
                  </span>
                  <span>- Event Speaker</span>
                </p>
              </div>
              <h3 className="text-size-15 md:text-lg lg:text-2xl text-contentColor dark: font-semibold pb-18px group-hover:text-whiteColor dark:text-contentColor-dark dark:group-hover:text-whiteColor">
                <Link
                  href="/"
                  className="hover:text-secondaryColor dark:hover:text-secondaryColor"
                >
                  title
                </Link>
              </h3>
              <p className="text-base md:text-sm lg:text-base text-blackColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor">
                <Link
                  className="hover:text-secondaryColor dark:hover:text-secondaryColor"
                  href="/"
                >
                  Read More
                  <i className="icofont-simple-right"></i>
                </Link>
              </p>
            </div>
          </div> */}


        </div>
      </main>
    </PageWrapper>
  );
}