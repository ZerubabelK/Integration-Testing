import React, { useState } from "react";
import { HiArrowRight, HiOutlineFingerPrint, HiSearch } from "react-icons/hi";
import NewUserform from "./NewUserform";
import SearchUser from "./SearchUser";

function Account({ setActiveStep, activeStep }) {
  const [isUserNew, setIsUserNew] = useState(false);
  return (
    <div className="account w-full h-full p-4">
      <div className="flex justify-end mx-auto w-2/3 pb-2">
        <button
          className="text-sky-500 flex items-center gap-1"
          onClick={(_) => setIsUserNew(!isUserNew)}
        >
          <HiArrowRight />
          <span>{!isUserNew ? "New Customer" : "Get Back"}</span>
        </button>
      </div>
      {isUserNew ? (
        <NewUserform setActiveStep={setActiveStep} activeStep={activeStep} />
      ) : (
        <SearchUser setActiveStep={setActiveStep} activeStep={activeStep} />
      )}
    </div>
  );
}

export default Account;
