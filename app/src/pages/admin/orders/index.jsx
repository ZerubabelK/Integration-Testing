import React from "react";
import Header from "../../../components/admin/orders/Header";
import Inquiry from "../../../components/admin/orders/Inquiry";
import Table from "../../../components/admin/common/Table";
import AdminLayout from "../../../layouts/admin";

function Orders() {
  return (
    <AdminLayout>
      <div className="space-y-3">
        <Header />
        <Inquiry />
        <Table />
      </div>
    </AdminLayout>
  );
}

export default Orders;
