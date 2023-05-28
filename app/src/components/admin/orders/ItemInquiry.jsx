import React from "react";
import {
  HiCalendar,
  HiChevronDown,
  HiFilter,
  HiOutlineStatusOffline,
  HiSearch,
  HiSortAscending,
} from "react-icons/hi";

function ItemInquiry() {
  return (
    <div className="grid grid-cols-5 py-3">
      <div className="shadow-md rounded-xl relative flex items-center">
        <HiSearch className="absolute w-10 text-green-500 text-xl" />
        <input
          className="pl-9 pr-5 py-1 rounded-xl outline-none"
          type="search"
          name="query"
          id="search"
          placeholder="Search Orders"
        />
      </div>
      <div className="flex items-center justify-center">
        <button className="flex shadow-md items-center bg-white w-40 justify-evenly py-1 rounded-lg">
          <HiCalendar />
          <span>Date Range</span>
          <HiChevronDown />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <button className="flex shadow-md items-center bg-white w-40 justify-evenly py-1 rounded-lg">
          <HiOutlineStatusOffline />
          <span>Status</span>
          <HiChevronDown />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <button className="flex shadow-md items-center bg-white w-40 justify-evenly py-1 rounded-lg">
          <HiSortAscending />
          <span>Sort By</span>
          <HiChevronDown />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <button className="flex shadow-md items-center bg-white w-40 justify-evenly py-1 rounded-lg">
          <HiFilter />
          <span>More filters</span>
          <HiChevronDown />
        </button>
      </div>
    </div>
  );
}

export default ItemInquiry;
