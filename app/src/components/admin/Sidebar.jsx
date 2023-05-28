// style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
import React, { useState } from "react";
// import a from "next/a";
import {
  HiViewGrid,
  HiUserGroup,
  HiArchive,
  HiOutlineChevronDoubleLeft,
  HiOutlineLogout,
  HiOutlineChevronDoubleRight,
  HiClipboardList,
  HiDocumentText,
  HiOutlineCog,
} from "react-icons/hi";
import classNames from "classnames";
import useAuth from "../../hooks/useAuth";

function Sidebar({ setExtend }) {
  const [collapsable, setCollapsable] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { logout } = useAuth();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setExtend(isSidebarOpen);
  };
  const mouseOver = () => {
    setCollapsable(true);
  };
  return (
    <section
      className={classNames(
        "sidebar fixed z-[1000] h-screen shadow-md bg-white",
        {
          "w-16": !isSidebarOpen,
          "w-56": isSidebarOpen,
          "mr-20": !isSidebarOpen,
          "mr-60": isSidebarOpen,
        }
      )}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
      onMouseOver={mouseOver}
      onMouseOut={() => (isSidebarOpen ? setCollapsable(false) : null)}
    >
      <div
        className={classNames("h-1/6 flex px-3 space-x-2 items-center", {
          "justify-between": !isSidebarOpen,
          "justify-center": isSidebarOpen,
        })}
      >
        <span
          className={classNames("text-green-400 font-bold text-xl", {
            hidden: !isSidebarOpen,
          })}
          style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
        >
          Etcrewservices
        </span>
        <div
          className={classNames({ hidden: !collapsable })}
          onClick={toggleSidebar}
          style={{ transition: "0.2s ease-in-out" }}
        >
          <HiOutlineChevronDoubleLeft
            className={classNames("text-2xl font-bold cursor-pointer", {
              hidden: !isSidebarOpen,
            })}
          />
          <HiOutlineChevronDoubleRight
            className={classNames("text-2xl font-bold cursor-pointer", {
              hidden: isSidebarOpen,
            })}
          />
        </div>
      </div>
      <nav className="flex flex-col py-10 items-center p-4 bg-white h-4/6">
        <ul className="space-y-5">
          <li className="hover:bg-green-400 hover:bg-opacity-20 hover:text-green-400 px-4 py-1 rounded-lg transition ease-in-out">
            <a
              className="text-[17px] space-x-3 flex items-center w-full hover:first:text-gray-500"
              href="/admin/dashboard"
            >
              <HiViewGrid className="text-green-400 text-2xl" />
              <span className={classNames({ hidden: !isSidebarOpen })}>
                Dashboard
              </span>
            </a>
          </li>
          <li className="hover:bg-green-400 hover:bg-opacity-20 hover:text-green-400 px-4 py-1 rounded-lg transition ease-in-out">
            <a
              className="text-[17px] space-x-3 flex items-center w-full hover:first:text-gray-500"
              href="/admin/orders"
            >
              <HiArchive className="text-green-400 text-2xl" />
              <span className={classNames({ hidden: !isSidebarOpen })}>
                Orders
              </span>
            </a>
          </li>
          <li className="hover:bg-green-400 hover:bg-opacity-20 hover:text-green-400 px-4 py-1 rounded-lg transition ease-in-out">
            <a
              className="text-[17px] space-x-3 flex items-center w-full hover:first:text-gray-500"
              href="/admin/item"
            >
              <HiClipboardList className="text-green-400 text-2xl" />
              <span className={classNames({ hidden: !isSidebarOpen })}>
                Items
              </span>
            </a>
          </li>
          <li className="hover:bg-green-400 hover:bg-opacity-20 hover:text-green-400 px-4 py-1 rounded-lg transition ease-in-out">
            <a
              className="text-[17px] space-x-3 flex items-center w-full hover:first:text-gray-500"
              href="/admin/user"
            >
              <HiUserGroup className="text-green-400 text-2xl" />
              <span className={classNames({ hidden: !isSidebarOpen })}>
                Users
              </span>
            </a>
          </li>
          <li className="hover:bg-green-400 hover:bg-opacity-20 hover:text-green-400 px-4 py-1 rounded-lg transition ease-in-out">
            <a
              className="text-[17px] space-x-3 flex items-center w-full hover:first:text-gray-500"
              href="/admin/category"
            >
              <HiDocumentText className="text-green-400 text-2xl" />
              <span className={classNames({ hidden: !isSidebarOpen })}>
                Categories
              </span>
            </a>
          </li>
          <li className="hover:bg-green-400 hover:bg-opacity-20 hover:text-green-400 px-4 py-1 rounded-lg transition ease-in-out">
            <a
              className="text-[17px] space-x-3 flex items-center w-full hover:first:text-gray-500"
              href="/admin/setting"
            >
              <HiOutlineCog className="text-green-400 text-2xl" />
              <span className={classNames({ hidden: !isSidebarOpen })}>
                Setting
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="h-1/6 flex items-center justify-center">
        <button className="space-x-2 flex" onClick={logout}>
          <HiOutlineLogout className="text-3xl" />
          <span className={classNames({ hidden: !isSidebarOpen })}>Logout</span>
        </button>
      </div>
    </section>
  );
}

export default Sidebar;
