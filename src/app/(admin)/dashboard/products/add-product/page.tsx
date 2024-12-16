import React, { Suspense } from "react";
import BasicInfo from "./components/basic-info";
import { AdditionalInfo } from "./components/additional-info";

function AddProductPage() {
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col w-full">
        <BasicInfo />
        <Suspense fallback={<div>Loading...</div>}>
          <AdditionalInfo />
        </Suspense>
      </div>
    </div>
  );
}

export default AddProductPage;
