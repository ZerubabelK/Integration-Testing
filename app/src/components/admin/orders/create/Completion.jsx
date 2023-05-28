import React, { useEffect } from "react";
import useOrder from "../../../../hooks/useOrder";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

function Completion({ setActiveStep, activeStep }) {
  const { new_order } = useOrder();
  useEffect(() => {
    console.log(new_order);
  }, [new_order]);

  return (
    <div>
      <div className="flex justify-start mx-auto w-2/3 py-4">
        <button
          className="text-sky-500 flex items-center gap-1"
          onClick={(_) => setActiveStep(activeStep - 1)}
        >
          <HiArrowLeft />
          <span>Back</span>
        </button>
      </div>
      <div className="w-2/3 mx-auto space-y-4">
        <h1 className="text-lg text-neutral-500">Order Summary</h1>
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow py-3">
            <div className="grid grid-cols-3  justify-between">
              <p className="text-center text-neutral-500">Jack Reacher</p>
              <p className="text-center text-neutral-500">
                jackreacher@gmail.com
              </p>
              <p className="text-center text-neutral-500">+43 51654878</p>
            </div>
          </div>
          <h1 className="text-lg text-neutral-500">Items</h1>
          <div className="bg-white rounded-xl shadow">
            <div className="grid grid-cols-5 border-y py-2">
              <p className="px-4 text-neutral-500">Select</p>
              <p className="px-4 text-neutral-500">SERVICE</p>
              <p className="px-4 text-neutral-500">TYPE</p>
              <p className="px-4 text-neutral-500">UNIT PRICE</p>
              <p className="px-4 text-neutral-500">QUANTITY</p>
            </div>
            <div className="grid grid-cols-5 border-y py-2">
              <p className="px-4 text-neutral-500">
                <input type="checkbox" name="" id="" />
              </p>
              <p className="px-4 text-neutral-500">Cloth</p>
              <p className="px-4 text-neutral-500">Jacket</p>
              <p className="px-4 text-neutral-500">$ 51</p>
              <p className="px-4 text-neutral-500">21</p>
            </div>
            <div className="grid grid-cols-5 border-y py-2">
              <p className="px-4 text-neutral-500">
                <input type="checkbox" name="" id="" />
              </p>
              <p className="px-4 text-neutral-500">Cloth</p>
              <p className="px-4 text-neutral-500">Jacket</p>
              <p className="px-4 text-neutral-500">$ 51</p>
              <p className="px-4 text-neutral-500">21</p>
            </div>
            <div className="grid grid-cols-5 border-y py-2">
              <p className="px-4 text-neutral-500">
                <input type="checkbox" name="" id="" />
              </p>
              <p className="px-4 text-neutral-500">Cloth</p>
              <p className="px-4 text-neutral-500">Jacket</p>
              <p className="px-4 text-neutral-500">$ 51</p>
              <p className="px-4 text-neutral-500">21</p>
            </div>
          </div>
          <h1 className="text-lg text-neutral-500">Others</h1>
          <div className="bg-white rounded-xl shadow grid grid-cols-2">
            <div className="flex justify-center p-4">
              <div className="space-y-2">
                <p className="text-neutral-500">Expected Completion Date</p>
                <p className="text-neutral-500">Jan 12, 2023</p>
              </div>
            </div>
            <div className="flex justify-center p-4">
              <div className="space-y-2">
                <p className="text-neutral-500">Total Price</p>
                <p className="text-neutral-500">$ 500</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            class="flex gap-2 items-center justify-center rounded bg-sky-500 px-6 pb-2 pt-2.5 mt-3 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-sky-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-sky-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            <span>Complete Order</span>
            <HiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Completion;
