import React from "react";
import Navitem from "./Navitem";
import DropdownCourses from "./DropdownCourses";
import DropdownWrapper from "@/components/shared/wrappers/DropdownWrapper";
import DropdownEcommerce from "./DropdownEcommerce";

const NavItems = () => {
  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
      dropdown: null,
      isRelative: false,
    },
    {
      id: 2,
      name: "Courses",
      path: "/courses",
      dropdown: <DropdownCourses />,
      isRelative: false,
    },
    {
      id: 3,
      name: "Upcoming Batches",
      path: "/upcoming-batches",
      dropdown: null,
      isRelative: true,
    },
    {
      id: 4,
      name: "Job Guarantee Course",
      path: "/ecommerce/shop",
      dropdown: <DropdownEcommerce />,
      isRelative: true,
    },
    {
      id: 4,
      name: "Vendor Exam",
      path: "/ecommerce/shop",
      dropdown: <DropdownEcommerce />,
      isRelative: true,
    },
    {
      id: 5,
      name: "More",
      path: "/ecommerce/shop",
      dropdown: <DropdownEcommerce />,
      isRelative: true,
    },
  ];
  return (
    <div className="hidden lg:block lg:col-start-3 lg:col-span-7">
      <ul className="nav-list flex justify-center">
        {navItems.map((navItem, idx) => (
          <Navitem key={idx} idx={idx} navItem={{ ...navItem, idx: idx }}>
            <DropdownWrapper>{navItem.dropdown}</DropdownWrapper>
          </Navitem>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;
