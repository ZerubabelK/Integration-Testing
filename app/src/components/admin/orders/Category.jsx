import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { HiArrowLeft, HiArrowRight, HiGlobeAlt } from "react-icons/hi";
import useOrder from "../../../hooks/useOrder";

function Category({ setQuery }) {
  const [activeTab, setActiveTab] = useState("ALL");
  const { orders } = useOrder();
  const handleTabSelect = (tab) => {
    setActiveTab(tab.toUpperCase());
    setQuery(tab);
  };
  return (
    <div className="flex py-3 px-2">
      <div
        className={classNames(
          "relative flex items-center mr-5 space-x-3 cursor-pointer",
          {
            "after:w-full after:absolute after:h-[2px] after:bg-green-400 after:-bottom-2 after:rounded":
              activeTab === "ALL",
          }
        )}
        onClick={(_) => {
          setQuery("");
          setActiveTab("ALL");
        }}
      >
        <HiGlobeAlt className="text-sm" />
        <span className="text-[10px]">ALL</span>
        <span
          className={classNames(
            "text-gray-500 bg-opacity-10 px-1 bg-gray-500 text-[10px]",
            {
              "text-green-500 bg-opacity-10 px-1 bg-green-500 text-[10px]":
                activeTab === "ALL",
            }
          )}
        >
          {orders.length}
        </span>
      </div>
      <div
        className={classNames(
          "relative flex items-center mr-5 space-x-3 cursor-pointer",
          {
            "after:w-full after:absolute after:h-[2px] after:bg-green-400 after:-bottom-2 after:rounded":
              activeTab === "PENDING",
          }
        )}
        onClick={(_) => handleTabSelect("Pending")}
      >
        <HiArrowRight className="text-lg" />
        <span className="text-[10px]">PENDING</span>
        <span
          className={classNames(
            "text-gray-500 bg-opacity-10 px-1 bg-gray-500 text-[10px]",
            {
              "text-green-500 bg-opacity-10 px-1 bg-green-500 text-[10px]":
                activeTab === "PENDING",
            }
          )}
        >
          {orders.filter((order) => order.order_status === "Pending").length}
        </span>
      </div>
      <div
        className={classNames(
          "relative flex items-center mr-5 space-x-3 cursor-pointer",
          {
            "after:w-full after:absolute after:h-[2px] after:bg-green-400 after:-bottom-2 after:rounded":
              activeTab === "COMPLETED",
          }
        )}
        onClick={(_) => handleTabSelect("Completed")}
      >
        <HiArrowLeft className="text-lg" />
        <span className="text-[10px]">COMPLETED</span>
        <span
          className={classNames(
            "text-gray-500 bg-opacity-10 px-1 bg-gray-500 text-[10px]",
            {
              "text-green-500 bg-opacity-10 px-1 bg-green-500 text-[10px]":
                activeTab === "COMPLETED",
            }
          )}
        >
          {orders.filter((order) => order.order_status === "Completed").length}
        </span>
      </div>
    </div>
  );
}

export default Category;
