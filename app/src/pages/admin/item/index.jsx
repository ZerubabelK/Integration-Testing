import React, { useEffect } from "react";
import ItemHeader from "../../../components/admin/orders/ItemHeader";
import ItemInquiry from "../../../components/admin/orders/ItemInquiry";
import ItemTable from "../../../components/admin/common/ItemTable";
import AdminLayout from "../../../layouts/admin";
function Item() {
  return (
    <AdminLayout>
      <div className="space-y-3">
        <ItemHeader />
        <ItemInquiry />
        <ItemTable />
      </div>
    </AdminLayout>
  );
}

export default Item;
