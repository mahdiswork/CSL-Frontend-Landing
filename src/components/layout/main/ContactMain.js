import ContactFrom from "@/components/sections/contact-form/ContactFrom";
import ContactPrimary from "@/components/sections/contact/ContactPrimary";
import React from "react";

const ContactMain = () => {
  return (
    <>
    <div className="container my-5">
      <div className="">
      <div className="w-full h-auto">
        <iframe loading="lazy" className="w-full" height="300px" src="https://maps.google.com/maps?q=CSL%20Training&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="CSL Training" aria-label="CSL Training"></iframe>
      </div>
    </div>
    </div>
    <div>
      <ContactPrimary />
      <ContactFrom />
    </div>
      
    </>
  );
};

export default ContactMain;
