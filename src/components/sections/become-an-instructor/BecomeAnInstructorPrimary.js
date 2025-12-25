import checkImage1 from "@/assets/images/dashbord/check__1.png";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";

const BecomeAnInstructorPrimary = () => {
  return (
    <section>
      <div className="container pt-100px pb-100px" data-aos="fade-up">
        <h3 className="text-size-32 font-bold text-blackColor dark:text-blackColor-dark leading-1.2 pb-15px border-b border-borderColor dark:border-borderColor-dark mb-10">
          Apply As Instructor
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px">
          {/* apply left */}
          <div data-aos="fade-up">
            <h6 className="text-2xl font-semibold text-blackColor dark:text-blackColor-dark leading-1.8 mb-15px">
              Instructor হিসেবে কাজ করতে চান ?
            </h6>
            <p className="text-contentColor dark:text-contentColor-dark leading-1.8 mb-15px mt-5">
              <b>CSL Training</b> সবসময় আইটি ইন্ডাস্ট্রিরির  লিডার দের ইনস্ট্রাক্টর হিসেবে অগ্রাধিকার দিয়ে থাকে। আপনি যদি আইটি ইন্ডাস্ট্রি তে কাজ করে থাকেন আপনার যদি জব ০৩ বছরের অভিজ্ঞতা থাকে তাহলে আপনি ইনস্ট্রাক্টর হিসেবে কাজ করতে পারেন। <b>CSL Training</b> বর্তমানে দেশে এবং দেশের বাইরের যে কোন অভিজ্ঞ ব্যাক্তিকে ইনস্ট্রাক্টর হিসেবে কাজ করার সুযোগ দিচ্ছে। আপনি চাইলে অফলাইনে বা অনলাইনে ট্রেনিং করাতে পারেন। 
            </p>
            <h6 className="text-2xl font-semibold text-blackColor dark:text-blackColor-dark leading-1.8 mb-15px">
              ইনস্ট্রাক্টর হিসেবে আপনার যেসকল যোগ্যতা থাকতে হবেঃ
            </h6>
            {/* rules list */}
            <ul className="mb-30px space">
              <li className="mt-5 flex items-center gap-5">
                <div className="h-25px w-25px">
                  <Image src={checkImage1} alt="" className="w-full" />
                </div>
                <p className="text-contentColor dark:text-contentColor-dark leading-1.8">
                  সংশ্লিষ্ট বিষয়ের উপরের তিন (০৩) বছরের বাস্তব অভিজ্ঞতা।
                </p>
              </li>
              <li className="mt-5 flex items-center gap-5">
                <div className="h-25px w-25px">
                  <Image src={checkImage1} alt="" className="w-full" />
                </div>
                <p className="text-contentColor dark:text-contentColor-dark leading-1.8">
                  সংশ্লিষ্ট বিষয়ের উপরে ভেন্ডর সার্টিফিকেট থাকতে হবে।
                </p>
              </li>
              <li className="mt-5 flex items-center gap-5">
                <div className="h-25px w-25px">
                  <Image src={checkImage1} alt="" className="w-full" />
                </div>
                <p className="text-contentColor dark:text-contentColor-dark leading-1.8">
                  প্রেজেন্টেশন এবং কমিউনিকেশন স্কিল সুন্দর হতে হবে।
                </p>
              </li>
              <li className="mt-5 flex items-center gap-5">
                <div className="h-25px w-25px">
                  <Image src={checkImage1} alt="" className="w-full" />
                </div>
                <p className="text-contentColor dark:text-contentColor-dark leading-1.8">
                  যথা সময় ক্লাসে উপস্তিত থাকতে হবে।
                </p>
              </li>
              <li className="mt-5 flex items-center gap-5">
                <div className="h-25px w-25px">
                  <Image src={checkImage1} alt="" className="w-full" />
                </div>
                <p className="text-contentColor dark:text-contentColor-dark leading-1.8">
                  ক্লাসের পরে যতটুকু সম্ভব স্টুডেন্ট দের সাপোর্ট দিতে হবে।
                </p>
              </li>
              <li className="mt-5 flex items-center gap-5">
                <div className="h-25px w-25px">
                  <Image src={checkImage1} alt="" className="w-full" />
                </div>
                <p className="text-contentColor dark:text-contentColor-dark leading-1.8">
                  প্রতি ক্লাসের জন্য আলাদা আলদা করে ট্রেনিং প্লান এবং ল্যাব ডিজাইন করতে হবে।
                </p>
              </li>
            </ul>
          </div>
          {/* apply righ */}
          <div data-aos="fade-up">
            <form
              className="p-10px md:p-10 lg:p-5 2xl:p-10 mb-50px bg-darkdeep3 dark:bg-darkdeep3-dark text-sm text-blackColor dark:text-blackColor-dark leading-1.8"
              data-aos="fade-up"
            >
              <div className="grid grid-cols-1 mb-15px gap-15px">
                <div>
                  <label className="mb-3 block font-semibold">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                  />
                </div>
                <div>
                  <label className="mb-3 block font-semibold">Last Name</label>
                  <input
                    type="text"
                    placeholder="Due"
                    className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                  />
                </div>
                <div>
                  <label className="mb-3 block font-semibold">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                  />
                </div>
                <div>
                  <label className="mb-3 block font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="+8801xxxxxxx"
                    className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                  />
                </div>
                <div>
                  <label className="mb-3 block font-semibold">
                    Linkedin
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/...."
                    className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                  />
                </div>
              </div>
              <div className="mb-15px">
                <label className="mb-3 block font-semibold">Bio</label>
                <textarea
                  placeholder="Type you comments...."
                  className="w-full py-10px px-5 text-sm text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md"
                  cols="30"
                  rows="6"
                />
              </div>

              <div>
                <input type="checkbox" />{" "}
                <span className="text-size-15 text-contentColor dark:text-contentColor-dark">
                  You agree to our friendly
                  <Link
                    href="#"
                    className="text-base text-blackColor dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor font-bold leading-1 relative before:w-full before:h-1px before:bg-blackColor dark:before:bg-blackColor-dark before:absolute before:left-0 before:-bottom-0.5"
                  >
                    Privacy policy
                  </Link>
                  .
                </span>
              </div>
              <div className="mt-15px">
                <ButtonPrimary type={"submit"}>Update Info</ButtonPrimary>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeAnInstructorPrimary;
