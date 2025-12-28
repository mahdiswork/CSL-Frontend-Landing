import React from "react";

const AboutMain = () => {
  return (
    <>
      <div className="container">
        <section className="max-w-6xl mx-auto px-4 py-12">


        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          About <span className="text-blue-600">CSL</span>
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          <strong className="text-gray-800">CSL Training</strong> that specialize in providing training and education in Information and Communication Technology (ICT). This institute is designed to equip students and professionals with necessary skills and knowledge in various areas of ICT such as software development, hardware maintenance, network administration, cybersecurity, data science, and more.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          The Training Center can range from local community center offering basic computer literacy classes, to advanced training facilities that provide professional certifications and diploma programs in specialized areas of ICT. They may provide a mix of classroom-based teaching, online learning, and hands-on lab work.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          The primary aim of the center is to prepare individuals for the ICT industry, or to help current ICT professionals upgrade their skills or transition to new areas within the industry. We may also work with businesses to provide training for employees, or to help implement ICT solutions within the business.
        </p>

        <div className="">
          <h1 className="text-2xl font-bold mb-6">Courses Available</h1>
          
          <ul className="space-y-4">
              <li>
                  <p className="ml-6"><strong>Computer Literacy Classes:</strong> These classes cover the basics of using a computer, such as using operating systems, office productivity software, and the internet.</p>
              </li>
              
              <li>
                  <p className="ml-6"><strong>Programming and Software Development Courses:</strong> These courses cover programming languages like Python, Java, C++, and web technologies like HTML, CSS, JavaScript. They may also include topics like software testing, database management, and version control.</p>
              </li>
              
              <li>
                  <p className="ml-6"><strong>Network Administration Courses:</strong> These classes cover topics like setting up and managing local area networks (LANs), configuring network hardware like routers and switches, and implementing network security measures.</p>
              </li>
              
              <li>
                  <p className="ml-6"><strong>Cybersecurity Courses:</strong> These cover topics like identifying and defending against cyber threats, securing network infrastructure, and implementing cybersecurity best practices.</p>
              </li>
              
              <li>
                  <p className="ml-6"><strong>Data Science and Analytics Courses:</strong> These classes cover data analysis tools and methods, machine learning, statistical modeling, and more.</p>
              </li>
          </ul>
          
          <p className="mt-4 text-lg text-gray-600">The exact courses and programs available will depend on the specific career track. It’s always a good idea to research different centers to see which one offers the program that best fits your needs and career goals.</p>
      </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mt-12 mb-6">
          Additional Information
        </h2>

        <div className="bg-gray-50 rounded-xl p-6 space-y-3">
          <p className="text-gray-700">
            <strong>Registered Address:</strong> Ka-74/2 (3rd Floor), Pragati Sarani, Beside Standard Bank, Kuril, Dhaka-1229
          </p>
          <p className="text-gray-700">
            <strong>Trade License:</strong> TRAD/DSCC/248237/2019
          </p>
          <p className="text-gray-700">
            <strong>Trade License:</strong> TRAD/DNCC/150112/2022
          </p>
        </div>

      </section>
      </div>
    </>
  );
};

export default AboutMain;
