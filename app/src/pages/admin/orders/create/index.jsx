import React, { useState } from "react";
import AdminLayout from "../../../../layouts/admin";
import Stepper from "../../../../components/admin/orders/create/Stepper";
import Account from "../../../../components/admin/orders/create/Account";
import Details from "../../../../components/admin/orders/create/Details";
import Completion from "../../../../components/admin/orders/create/Completion";

function CreateOrder() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Account" },
    { title: "Details" },
    { title: "Checkout" },
  ];
  return (
    <AdminLayout>
      <div className="h-full w-full rounded-xl py-5">
        <div className="w-full py-3">
          <div className="w-2/3 mx-auto">
            <Stepper steps={steps} activeStep={activeStep} />
          </div>
          <div className="w-full">
            {activeStep === 0 ? (
              <Account setActiveStep={setActiveStep} activeStep={activeStep} />
            ) : activeStep === 1 ? (
              <Details setActiveStep={setActiveStep} activeStep={activeStep} />
            ) : (
              <Completion />
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default CreateOrder;
