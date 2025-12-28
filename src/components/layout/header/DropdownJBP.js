import React from "react";
import DropdownPrimary from "./DropdownPrimary";
const DropdownJBP = () => {
  const items = [
    {
      name: "Program",
      status: null,
      path: "/",
      type: "secondary",
    },
  ];
  return <DropdownPrimary items={items} />;
};
export default DropdownJBP;
