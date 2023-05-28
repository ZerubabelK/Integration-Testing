import classNames from "classnames";
import { useEffect, useState } from "react";
import Sidebar from "../components/admin/Sidebar";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AdminLayout({ children }) {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { isAuthorized } = useAuth();
  useEffect(() => {
    if (!isAuthorized("Admin", user)) {
      navigate("/error");
    }
  }, []);
  const [extend, setExtend] = useState(true);
  return (
    <section className="relative w-screen flex flex-row justify-start">
      <Sidebar setExtend={setExtend} />
      <div
        className={classNames("bg-slate-100 p-4 min-h-screen w-screen", {
          "pl-20": extend,
          "pl-60": !extend,
        })}
      >
        {children}
      </div>
    </section>
  );
}
