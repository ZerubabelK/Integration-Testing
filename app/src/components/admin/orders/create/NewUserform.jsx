import React, { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import Alert from "../../../common/Alert";
import useOrder from "../../../../hooks/useOrder";

function NewUserform({ setActiveStep, activeStep }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("Female");
  const [errorMessage, setErrorMessage] = useState("");
  const { registerUser } = useAuth();
  const { addUserForCreateOrder } = useOrder();
  const handleRegistration = (ev) => {
    ev.preventDefault();
    registerUser({ firstName, lastName, email, gender, phoneNumber })
      .then((data) => {
        console.log(data);
        if (data.name === "AxiosError") {
          setErrorMessage("Error Occurred, Please Try again");
        } else {
          setActiveStep(activeStep + 1);
          addUserForCreateOrder(data[0].id);
          setErrorMessage("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex justify-center">
      <div className="space-y-7 max-w-[60%] mx-auto">
        {errorMessage !== "" ? <Alert message={errorMessage} /> : <></>}
        <h1 className="text-lg">Registration Form</h1>
        <div className="flex gap-4 items-center">
          <div>
            <input
              type="text"
              className="border px-2 outline-none rounded-md  w-64 py-2"
              name="first_name"
              id="first_name"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              className="border px-2 outline-none rounded-md  w-64 py-2"
              name="last_name"
              id="last_name"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="border px-2 outline-none rounded-md  w-64 py-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <p className="text-slate-500">Gender:</p>
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  value="Female"
                  onChange={(e) => setGender(e.target.value)}
                  checked
                />
                <label htmlFor="gender" className="text-sm text-slate-900">
                  Female
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  value="Male"
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="gender" className="text-sm text-slate-900">
                  Male
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <input
              type="tel"
              name="phone_number"
              id="phone_number"
              placeholder="Phone Number"
              className="border px-2 outline-none rounded-md  w-64 py-2"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button
            data-te-ripple-init
            data-te-ripple-color="light"
            className="inline-block rounded bg-sky-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            onClick={handleRegistration}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewUserform;
