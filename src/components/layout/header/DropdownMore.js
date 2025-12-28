import React from "react";
import DropdownPrimary from "./DropdownPrimary";
const DropdownMore = () => {
  const items = [
    {
      name: "About Us",
      status: null,
      path: "/about-us",
      type: "secondary",
    },
    {
      name: "Contact Us",
      status: null,
      path: "/contact-us",
      type: "secondary",
    },
    {
      name: "Privacy Policy",
      status: null,
      path: "/privacy-policy",
      type: "secondary",
    },
    {
      name: "Terms and Conditions",
      status: null,
      path: "/terms-and-conditions",
      type: "secondary",
    },
    {
      name: "Refund Policy",
      status: null,
      path: "/refund-policy",
      type: "secondary",
    },
    {
      name: "Shop",
      status: "Online Store",
      path: "/ecommerce/shop",
      type: "secondary",
    },
    {
      name: "Product Details",
      status: null,
      path: "/ecommerce/products/1",
      type: "secondary",
    },
    {
      name: "Cart",
      status: null,
      path: "/ecommerce/cart",
      type: "secondary",
    },
    {
      name: "Checkout",
      status: null,
      path: "/ecommerce/checkout",
      type: "secondary",
    },
    {
      name: "Wishlist",
      status: null,
      path: "/ecommerce/wishlist",
      type: "secondary",
    },
  ];
  return <DropdownPrimary items={items} />;
};
export default DropdownMore;
