import React from "react";
import DropdownPrimary from "./DropdownPrimary";
const DropdownVExam = () => {
  const items = [
    {
      name: "Exam Voucher",
      status: null,
      path: "/exam-voucher",
      type: "secondary",
    },
  ];
  return <DropdownPrimary items={items} />;
};
export default DropdownVExam;
