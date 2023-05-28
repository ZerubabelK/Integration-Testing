import React, { useEffect, useState } from "react";
import Category from "../orders/Category";
import useOrder from "../../../hooks/useOrder";
import toDate from "../../../util/toDate";
import classNames from "classnames";
import TableLoader from "../../common/TableLoader";
import ErrorComponent from "./ErrorComponent";

function Table() {
  const [query, setQuery] = useState("");
  const { getOrders, orders, isLoading, error } = useOrder();
  useEffect(() => {
    getOrders("order_status", query);
  }, [query]);
  return (
    <div className="w-full h-full bg-white rounded-xl shadow-md overflow-x-hidden">
      <div className="">
        <Category setQuery={setQuery} />
        <div className="w-full h-full">
          {isLoading ? (
            <TableLoader />
          ) : error != null ? (
            <ErrorComponent message={"Network Error, reload again"} />
          ) : (
            <table className="w-full">
              <thead>
                <tr className="bg-slate-200">
                  <th className="text-left px-2 py-1">
                    <input type="checkbox" name="" id="" />
                  </th>
                  <th className="text-left px-1 py-1 font-normal text-[12px]">
                    REF
                  </th>
                  <th className="text-left px-1 py-1 font-normal text-[12px]">
                    CREATED
                  </th>
                  <th className="text-left px-1 py-1 font-normal text-[12px]">
                    CUSTOMER
                  </th>
                  <th className="text-left px-1 py-1 font-normal text-[12px]">
                    PRODUCTS
                  </th>
                  <th className="text-left px-1 py-1 font-normal text-[12px]">
                    START TIME
                  </th>
                  <th className="text-left px-1 py-1 font-normal text-[12px]">
                    END TIME
                  </th>
                  <th className="text-left px-1 py-1 font-normal text-[12px]">
                    PICKUP
                  </th>
                  <th className="text-left px-1 py-1 font-normal text-[12px]">
                    STATUS
                  </th>
                  <th className="text-left px-1 py-1 font-normal text-[12px]">
                    PAYMENT
                  </th>
                  <th className="text-left px-1 py-1 font-normal text-[12px]">
                    PRICE
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr className="shadow-sm" key={index}>
                    <td className="text-left text-xs px-2 py-2">
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td className="text-left text-xs px-1 py-2 font-bold">
                      <p>{order.tag}</p>
                    </td>
                    <td className="text-left text-xs px-1 py-2 space-y-1">
                      <p className="font-normal">{toDate(order.order_date)}</p>
                      <p className="font-extralight">16:00</p>
                    </td>
                    <td className="text-left text-xs px-1 py-2">
                      <p>Jack Reacher</p>
                    </td>
                    <td className="text-left text-xs px-1 py-2">
                      <p>Orbea Orca M30</p>
                    </td>
                    <td className="text-left text-xs px-1 py-2 space-y-1">
                      <p className="font-normal">08 Aug 2020</p>
                      <p className="font-extralight">14:00</p>
                    </td>
                    <td className="text-left text-xs px-1 py-2">
                      <p className="font-normal">12 Aug 2020</p>
                      <p className="font-extralight">14:00</p>
                    </td>
                    <td className="text-left text-xs px-1 py-2">
                      <p>{order.taken}</p>
                    </td>
                    <td className="text-left text-xs px-1 py-2">
                      <p
                        className={classNames(
                          "w-20 text-center  bg-opacity-10 font-bold rounded-xl px-3 py-[3px]",
                          {
                            "bg-red-400 text-red-400":
                              order.order_status === "Cancelled",
                            "bg-yellow-400 text-yellow-400":
                              order.order_status === "Pending",
                            "bg-green-400 text-green-400":
                              order.order_status === "Completed",
                          }
                        )}
                      >
                        {order.order_status}
                      </p>
                    </td>
                    <td className="text-left text-xs px-1 py-2">
                      <p
                        className={classNames(
                          "w-20 text-center  bg-opacity-10 font-bold rounded-xl px-3 py-[3px]",
                          {
                            "bg-yellow-400 text-yellow-400":
                              order.payment_status === "Not Paid",
                            "bg-green-400 text-green-400":
                              order.payment_status === "Paid",
                          }
                        )}
                      >
                        {order.payment_status}
                      </p>
                    </td>
                    <td className="text-left text-xs px-1 py-2">
                      <p>$ {order.total_price}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Table;
