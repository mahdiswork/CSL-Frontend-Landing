"use client";
import { usePathname } from "next/navigation";
import NavItems from "./NavItems";
import NavbarLogo from "./NavbarLogo";
import NavbarRight from "./NavbarRight";
import NavbarTop from "./NavbarTop";
const Navbar = () => {

  return (
    <div
      className={`transition-all duration-500 sticky-header z-medium dark:bg-whiteColor-dark`}
    >
      <nav>
        <div
          className={`py-15px lg:py-0 px-15px lg:container 3xl:container2-lg 4xl:container mx-auto relative`}
        >
          {/* <NavbarTop /> */}
          <div className="grid grid-cols-2 lg:grid-cols-12 items-center gap-15px">
            {/* navbar left */}
            <NavbarLogo />
            {/* Main menu */}
            <NavItems /> 
            {/* navbar right */}
            <NavbarRight/>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
