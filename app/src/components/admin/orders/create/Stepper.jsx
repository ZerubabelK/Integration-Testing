import classNames from "classnames";
import React from "react";

function Stepper({ steps, activeStep }) {
  return (
    <div className={`stepper w-full flex justify-evenly gap-1`}>
      {steps.map((step, index) => (
        <>
          <div
            className={classNames("space-x-2 flex items-center col-span-1", {
              active: index == activeStep,
            })}
            key={index}
          >
            <span
              className={classNames(
                "px-[11px] text-center text-white py-[3px] rounded-full",
                {
                  "bg-sky-500": index <= activeStep,
                  "bg-slate-400": index > activeStep,
                }
              )}
            >
              {index + 1}
            </span>
            <span
              className={classNames({
                "text-sky-500": index <= activeStep,
                "text-black": index > activeStep,
              })}
            >
              {step.title}
            </span>
          </div>
          <span
            className={classNames("h-[1.2px] w-full self-center", {
              "bg-sky-500": index < activeStep,
              "bg-slate-400": index >= activeStep,
              hidden: index == steps.length - 1,
            })}
          ></span>
        </>
      ))}
    </div>
  );
}

export default Stepper;
