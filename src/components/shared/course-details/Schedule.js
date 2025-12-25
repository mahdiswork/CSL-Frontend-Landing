import Image from "next/image";
import Link from "next/link";

const Schedule = ({ id }) => {
  return (
    <div>
      <div
        className="p-5 shadow-autor"
        data-aos="fade-up"
      >
        <h3 className="text-size-23 text-contentColor dark: font-semibold">3 Feb 2026</h3><br />
        <p className="">Sat (8:00 PM - 10:00 PM)</p>
        <p className="">Tue (8:00 PM - 10:00 PM)</p>
        <p className="">Thu (8:00 PM - 10:00 PM)</p>
      </div>
    </div>
  );
};

export default Schedule;
