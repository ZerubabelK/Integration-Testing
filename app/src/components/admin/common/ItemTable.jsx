import React from "react";
import Category from "../orders/Category";

function ItemTable() {
  return (
    <div class="w-full bg-white rounded-xl shadow-md overflow-x-hidden">
      <div class="">
        <Category />
        <div>
          <table class="w-full">
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
              <tr className="shadow-sm">
                <td className="text-left text-xs px-2 py-2">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="text-left text-xs px-1 py-2 font-bold">
                  <p>QH29</p>
                </td>
                <td className="text-left text-xs px-1 py-2 space-y-1">
                  <p className="font-normal">15 Jul 2020</p>
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
                  <p>UNDEFINED</p>
                </td>
                <td className="text-left text-xs px-1 py-2">
                  <p className="w-20 text-center bg-red-400 bg-opacity-10 font-bold rounded-xl px-3 py-[3px] text-red-400">
                    Cancelled
                  </p>
                </td>
                <td className="text-left text-xs px-1 py-2">
                  <p className="w-20 text-center bg-green-400 bg-opacity-10 rounded-xl px-3 py-[3px] text-green-400 font-bold">
                    Paid
                  </p>
                </td>
                <td className="text-left text-xs px-1 py-2">
                  <p>$ 500</p>
                </td>
              </tr>
              <tr className="shadow-sm">
                <td className="text-left text-xs px-2 py-2">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="text-left text-xs px-1 py-2 font-bold">
                  <p>QH29</p>
                </td>
                <td className="text-left text-xs px-1 py-2 space-y-1">
                  <p className="font-normal">15 Jul 2020</p>
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
                  <p>UNDEFINED</p>
                </td>
                <td className="text-left text-xs px-1 py-2">
                  <p className="w-20 text-center bg-red-400 bg-opacity-10 font-bold rounded-xl px-3 py-[3px] text-red-400">
                    Cancelled
                  </p>
                </td>
                <td className="text-left text-xs px-1 py-2">
                  <p className="w-20 text-center bg-green-400 bg-opacity-10 rounded-xl px-3 py-[3px] text-green-400 font-bold">
                    Paid
                  </p>
                </td>
                <td className="text-left text-xs px-1 py-2">
                  <p>$ 500</p>
                </td>
              </tr>
              <tr className="shadow-sm">
                <td className="text-left text-xs px-2 py-2">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="text-left text-xs px-1 py-2 font-bold">
                  <p>QH29</p>
                </td>
                <td className="text-left text-xs px-1 py-2 space-y-1">
                  <p className="font-normal">15 Jul 2020</p>
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
                  <p>UNDEFINED</p>
                </td>
                <td className="text-left text-xs px-1 py-2">
                  <p className="w-20 text-center bg-red-400 bg-opacity-10 font-bold rounded-xl px-3 py-[3px] text-red-400">
                    Cancelled
                  </p>
                </td>
                <td className="text-left text-xs px-1 py-2">
                  <p className="w-20 text-center bg-green-400 bg-opacity-10 rounded-xl px-3 py-[3px] text-green-400 font-bold">
                    Paid
                  </p>
                </td>
                <td className="text-left text-xs px-1 py-2">
                  <p>$ 500</p>
                </td>
              </tr>
              <tr className="shadow-sm">
                <td className="text-left text-xs px-2 py-2">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="text-left text-xs px-1 py-2 font-bold">
                  <p>QH29</p>
                </td>
                <td className="text-left text-xs px-1 py-2 space-y-1">
                  <p className="font-normal">15 Jul 2020</p>
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
                  <p>UNDEFINED</p>
                </td>
                <td className="text-left text-xs px-1 py-2">
                  <p className="w-20 text-center bg-red-400 bg-opacity-10 font-bold rounded-xl px-3 py-[3px] text-red-400">
                    Cancelled
                  </p>
                </td>
                <td className="text-left text-xs px-1 py-2">
                  <p className="w-20 text-center bg-green-400 bg-opacity-10 rounded-xl px-3 py-[3px] text-green-400 font-bold">
                    Paid
                  </p>
                </td>
                <td className="text-left text-xs px-1 py-2">
                  <p>$ 500</p>
                </td>
              </tr>
              <tr className="shadow-sm">
                <td className="text-left text-xs px-2 py-2">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="text-left text-xs px-1 py-2 font-bold">
                  <p>QH29</p>
                </td>
                <td className="text-left text-xs px-1 py-2 space-y-1">
                  <p className="font-normal">15 Jul 2020</p>
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
                  <p>UNDEFINED</p>
                </td>
                <td className="text-left text-xs px-1 py-2">
                  <p className="w-20 text-center bg-red-400 bg-opacity-10 font-bold rounded-xl px-3 py-[3px] text-red-400">
                    Cancelled
                  </p>
                </td>
                <td className="text-left text-xs px-1 py-2">
                  <p className="w-20 text-center bg-green-400 bg-opacity-10 rounded-xl px-3 py-[3px] text-green-400 font-bold">
                    Paid
                  </p>
                </td>
                <td className="text-left text-xs px-1 py-2">
                  <p>$ 500</p>
                </td>
              </tr>
              <tr className="shadow-sm">
                <td className="text-left text-xs px-2 py-2">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="text-left text-xs px-1 py-2 font-bold">
                  <p>QH29</p>
                </td>
                <td className="text-left text-xs px-1 py-2 space-y-1">
                  <p className="font-normal">15 Jul 2020</p>
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
                  <p>UNDEFINED</p>
                </td>
                <td className="text-left text-xs px-1 py-2">
                  <p className="w-20 text-center bg-red-400 bg-opacity-10 font-bold rounded-xl px-3 py-[3px] text-red-400">
                    Cancelled
                  </p>
                </td>
                <td className="text-left text-xs px-1 py-2">
                  <p className="w-20 text-center bg-green-400 bg-opacity-10 rounded-xl px-3 py-[3px] text-green-400 font-bold">
                    Paid
                  </p>
                </td>
                <td className="text-left text-xs px-1 py-2">
                  <p>$ 500</p>
                </td>
              </tr>
              <tr className="shadow-sm">
                <td className="text-left text-xs px-2 py-2">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="text-left text-xs px-1 py-2 font-bold">
                  <p>QH29</p>
                </td>
                <td className="text-left text-xs px-1 py-2 space-y-1">
                  <p className="font-normal">15 Jul 2020</p>
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
                  <p>UNDEFINED</p>
                </td>
                <td className="text-left text-xs px-1 py-2">
                  <p className="w-20 text-center bg-red-400 bg-opacity-10 font-bold rounded-xl px-3 py-[3px] text-red-400">
                    Cancelled
                  </p>
                </td>
                <td className="text-left text-xs px-1 py-2">
                  <p className="w-20 text-center bg-green-400 bg-opacity-10 rounded-xl px-3 py-[3px] text-green-400 font-bold">
                    Paid
                  </p>
                </td>
                <td className="text-left text-xs px-1 py-2">
                  <p>$ 500</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ItemTable;
