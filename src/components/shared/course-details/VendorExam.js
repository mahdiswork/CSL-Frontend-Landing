import Image from "next/image";
import Link from "next/link";

const VendorExam = ({ id }) => {

  return (
    <>
        {/* details  */}
        <div>
            <div
            className="bg-darkdeep3 dark:bg-darkdeep3-dark mb-30px grid grid-cols-1 md:grid-cols-2"
            data-aos="fade-up"
            >
            <ul className="p-10px md:py-55px md:pl-50px md:pr-70px lg:py-35px lg:px-30px 2xl:py-55px 2xl:pl-50px 2xl:pr-70px border-r-2 border-borderColor dark:border-borderColor-dark space-y-[10px]">
                <li>
                <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                    Instructor :
                    <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                    {"Mirnsdo.H"}
                    </span>
                </p>
                </li>
                <li>
                <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                    Lectures :
                    <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                    120 sub
                    </span>
                </p>
                </li>
                <li>
                <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                    Duration :
                    <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                    {"20h 41m 32s"}
                    </span>
                </p>
                </li>
                <li>
                <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                    Enrolled :
                    <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                    2 students
                    </span>
                </p>
                </li>
                <li>
                <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                    Total :
                    <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                    222 students
                    </span>
                </p>
                </li>
            </ul>
            <ul className="p-10px md:py-55px md:pl-50px md:pr-70px lg:py-35px lg:px-30px 2xl:py-55px 2xl:pl-50px 2xl:pr-70px border-r-2 border-borderColor dark:border-borderColor-dark space-y-[10px]">
                <li>
                <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                    Course level :
                    <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                    Intermediate
                    </span>
                </p>
                </li>
                <li>
                <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                    Language :
                    <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                    English spanish
                    </span>
                </p>
                </li>
                <li>
                <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                    Price Discount :
                    <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                    -20%
                    </span>
                </p>
                </li>
                <li>
                <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                    Regular Price :
                    <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                    $228/Mo
                    </span>
                </p>
                </li>
                <li>
                <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                    Course Status :
                    <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                    Available
                    </span>
                </p>
                </li>
            </ul>
            </div>
        </div>
    </>
  );
};

export default VendorExam;