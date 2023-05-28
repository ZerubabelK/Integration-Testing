import React from "react";
import { HiChevronDown, HiOutlinePrinter, HiPlus } from "react-icons/hi";

function Header() {
  return (
    <div className="w-full flex justify-between py-3 shadow-md bg-white rounded-xl px-3 items-center">
      <h1 className="text-2xl">Orders</h1>
      <div className="flex space-x-3">
        <button className="bg-white w-20 rounded-lg flex items-center justify-evenly">
          <span>Print</span>
          <HiOutlinePrinter />
        </button>
        <button className="bg-white w-20 rounded-lg flex items-center justify-evenly">
          <span>Export</span>
          <HiChevronDown className="text-lg" />
        </button>
        <a href="/admin/orders/create">
          <button className="bg-green-400 px-3 py-1 flex items-center text-white rounded">
            <HiPlus className="mr-2" />
            <span>Create Order</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Header;
