import React, { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import useUser from "../../../../hooks/useUser";
import useOrder from "../../../../hooks/useOrder";
import classNames from "classnames";
import Alert from "../../../common/Alert";
function SearchUser({ setActiveStep, activeStep }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [param, setParam] = useState("");
  const { getFilteredUsers, filtered_users, resetUsers, error } = useUser();
  const { addUserForCreateOrder } = useOrder();
  const handleSearch = () => {
    if (searchQuery !== "") {
      getFilteredUsers(searchQuery, param !== "" ? param : "firstName");
    } else {
      resetUsers();
    }
  };
  useEffect(() => {
    handleSearch();
  }, [searchQuery]);
  const handleParamChange = (text) => {
    setParam(text);
    setDropdown(!dropdown);
  };
  const handleUserSelect = (user_id) => {
    addUserForCreateOrder(user_id);
    setActiveStep(activeStep + 1);
  };
  return (
    <div>
      <div>
        {error !== null ? <Alert message={"Network Error"} /> : <></>}
        <div className="flex relative w-full sm:w-2/3 lg:w-1/2 mx-auto">
          <label
            htmlFor="search-dropdown"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label>
          <button
            id="dropdown-button"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center border bg-white"
            type="button"
            onClick={(_) => setDropdown(!dropdown)}
          >
            {param === ""
              ? "All categories"
              : param == "firstName"
              ? "Name"
              : param == "email"
              ? "Email"
              : param == "lastName"
              ? "Name"
              : "Phone Number"}
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            id="dropdown"
            className={classNames(
              "absolute mt-11 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700",
              { hidden: !dropdown }
            )}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={(_) => handleParamChange("firstName")}
                >
                  First Name
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={(_) => handleParamChange("lastName")}
                >
                  Last Name
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={(_) => handleParamChange("email")}
                >
                  Email
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={(_) => handleParamChange("phoneNumber")}
                >
                  Phone Number
                </button>
              </li>
            </ul>
          </div>
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm border outline-none hover:bg-slate-200 hover:bg-opacity-25"
              placeholder={"Search by Name, Email, Phone Number..."}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-full sm:w-2/3 lg:w-1/2 mt-3 mx-auto bg-white transition-transform ease-in-out rounded">
          {filtered_users.map((user, index) => (
            <div
              className="grid grid-cols-3 border-y-[1px] px-3 py-2 bg-opacity-30 hover:bg-slate-200 hover:bg-opacity-20 cursor-pointer"
              key={index}
              onClick={(_) => handleUserSelect(user._id)}
            >
              <div className="flex items-center gap-2">
                {user.profileImage ? (
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user.profileImage}
                    alt="Profile Image"
                  />
                ) : (
                  <BsFillPersonFill className="w-10 h-10 text-slate-300 bg-gray-600 rounded-full" />
                )}
                <h1>
                  {user.firstName} {user.lastName}
                </h1>
              </div>
              <p className="flex items-center">{user.email}</p>
              <p className="flex items-center">{user.phoneNumber}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchUser;
