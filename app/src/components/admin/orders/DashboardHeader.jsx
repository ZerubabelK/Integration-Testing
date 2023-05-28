import React from "react";

function DashboardHeader() {
  return (
    <div className="grid space-y-6 grid-cols-1">
      <div className="w-full flex justify-between py-3 shadow-md bg-white rounded-xl px-3 items-center">
        <h1 className="text-2xl">Dashboard</h1>
      </div>
    </div>
  );
}

export default DashboardHeader;
