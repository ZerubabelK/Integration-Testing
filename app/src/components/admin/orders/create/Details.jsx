import React, { useEffect, useState } from "react";
import useOrder from "../../../../hooks/useOrder";
import { HiArrowLeft, HiArrowRight, HiPlus } from "react-icons/hi";
import classNames from "classnames";

function Details({ setActiveStep, activeStep }) {
  // const {}
  const [items, setItems] = useState([]);
  const [service, setService] = useState("Cloth");
  const [type, setType] = useState("");
  const [unit_price, setUnitPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [tag, setTag] = useState("");
  const [expected_completion_date, setExpectedCompletionDate] = useState(null);
  const { new_order, addDetails } = useOrder();
  useEffect((_) => console.log(new_order), []);
  const handleItemAdd = () => {
    if (type !== "" && unit_price !== "" && quantity !== "") {
      setItems([...items, { type, unit_price, quantity, service }]);
      setType("");
      setQuantity("");
      setUnitPrice("");
    } else {
      alert("Please fill all the fields");
    }
  };
  const handleItemRemove = (item) => {
    setItems(items.filter((i) => JSON.stringify(i) !== JSON.stringify(item)));
  };
  const getTotalPrice = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.unit_price * item.quantity;
    });
    return total;
  };
  const handleContinue = () => {
    handleItemAdd();
    addDetails({
      tag,
      expected_completion_date,
      items,
      order_date: Date.now(),
    });
    setActiveStep((prev) => prev + 1);
  };
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
      <div className="w-full">
        <div className="mx-auto w-full lg:w-2/3">
          <div className="relative mb-4 flex flex-wrap items-stretch">
            <span
              className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base text-neutral-400 font-normal leading-[1.6]"
              id="basic-addon1"
            >
              Tag
            </span>
            <input
              required
              type="text"
              className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-300 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-sky focus:text-neutral-300 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
              placeholder="Tag"
              aria-label="Tag"
              aria-describedby="basic-addon1"
              onChange={(e) => setTag(e.target.value)}
            />
          </div>

          <div className="flex justify-between">
            <h1 className="mb-2 inline-block text-neutral-500 text-xl">
              Items
            </h1>
            <span className="cursor-pointer" onClick={handleItemAdd}>
              <HiPlus className="text-lg" />
            </span>
          </div>
          {items.map((item, index) => (
            <div
              className={classNames(
                "w-full grid grid-cols-5 justify-between items-center border rounded-xl my-2 bg-opacity-70 py-1",
                { "bg-red-400 ": index % 2 == 0, "bg-sky-400 ": index % 2 != 0 }
              )}
            >
              <p className="text-center text-white">{item.service}</p>
              <p className="text-center text-white">{item.type}</p>
              <p className="text-center text-white">{item.unit_price}</p>
              <p className="text-center text-white">{item.quantity}</p>
              <span className="flex items-center justify-center">
                <HiPlus
                  onClick={(_) => handleItemRemove(item)}
                  className="rotate-45 cursor-pointer text-white text-lg"
                />
              </span>
            </div>
          ))}
          <div className="relative mb-4 flex flex-wrap items-stretch">
            <span
              className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-300"
              id="basic-addon3"
            >
              Service
            </span>
            <input
              required
              type="text"
              className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border bg-transparent outline-none px-3 text-neutral-300"
              id="basic-url"
              aria-describedby="basic-addon3"
              disabled
              onChange={(e) => setService(e.target.value)}
              value={"Cloth"}
            />
          </div>

          <div className="relative mb-4 flex flex-wrap items-stretch">
            <span
              className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-300"
              id="basic-addon3"
            >
              Type
            </span>
            <input
              required
              type="text"
              className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border bg-transparent outline-none px-3"
              id="basic-url"
              aria-describedby="basic-addon3"
              onChange={(e) => setType(e.target.value)}
              value={type}
            />
          </div>

          <div className="relative mb-4 flex flex-wrap items-stretch">
            <span className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-300">
              Unit price
            </span>
            <input
              required
              type="number"
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none"
              aria-label="Amount (to the nearest currency)"
              onChange={(e) => setUnitPrice(e.target.value)}
              value={unit_price}
            />
            <span className="flex items-center whitespace-nowrap rounded-r border border-l-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6]">
              .00
            </span>
          </div>
          <div className="relative mb-4 flex flex-wrap items-stretch">
            <span className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-300">
              Quantity
            </span>
            <input
              required
              type="number"
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none"
              aria-label="quantity"
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
            />
          </div>
          <div>
            <h1 className="mb-2 inline-block text-neutral-500 text-xl">
              Others
            </h1>
            <div className="grid grid-cols-2">
              <div className="relative mb-4 space-y-2">
                <label className="text-neutral-500">
                  Expected Completion Date
                </label>
                <input
                  required
                  type="date"
                  className="relative m-0 block min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none w-2/3 rounded"
                  aria-label="quantity"
                  onChange={(e) => setExpectedCompletionDate(e.target.value)}
                />
              </div>
              <div className="relative mb-4 space-y-2">
                <label className="text-neutral-500">Total Price</label>
                <input
                  required
                  disabled
                  type="number"
                  className="relative m-0 block min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none w-2/3 rounded"
                  aria-label="quantity"
                  value={getTotalPrice()}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              class="flex gap-2 items-center justify-center rounded bg-sky-500 px-6 pb-2 pt-2.5 mt-3 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-sky-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-sky-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              onClick={handleContinue}
            >
              <span>CONTINUE</span>
              <HiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
