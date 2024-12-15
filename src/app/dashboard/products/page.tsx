"use client";
import React from "react";
import BasicInfo from "./components/basic-info";
// import AdditionalInfo from "./components/additional-info";

function ProductPage() {
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col w-full">
        <BasicInfo />
        {/* <AdditionalInfo /> */}
      </div>
    </div>
  );
}

export default ProductPage;
