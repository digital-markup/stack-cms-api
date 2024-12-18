import { Header } from "@/components/header";
import React from "react";
import DescriptionContainer from "./components/description-container";
import FeatureImageContainer from "./components/feature-image-container";
import ProductImagesContainer from "./components/product-images-container";
import ServicesContainer from "./components/services-container";
import PricingContainer from "./components/pricing-container";
import { Button } from "@/components/ui/button";
import ProductCategoryContainer from "./components/product-category-container";
import BasicInformationContainer from "./components/basic-info-container";
import VariantContainer from "./components/variant-container";
import {
  InventoryContainer,
  VisibilityContainer,
} from "./components/inventory-visibility-container";
import AdditionalInformationContainer from "./components/additional-infomation-container";

function AddProductPage() {
  return (
    <div className="w-full h-full">
      <Header title="add new product" navText="Back to products page" />
      <form className="pt-12">
        <div className="w-full grid grid-cols-2 gap-6">
          <div className="w-full min-h-[100px] flex flex-col gap-y-12">
            <DescriptionContainer title="Description" />
            <ProductCategoryContainer title="Category" />
            <BasicInformationContainer title="Basic Information" />
            {/* additional information */}
            <AdditionalInformationContainer title="Additional Information" />
            {/* product variations */}
            <VariantContainer title="Variant" />
            {/* inventory and visibility type */}
            <InventoryContainer title="Inventory" />
            {/* selling type */}
            <VisibilityContainer title="Visibility" />
          </div>
          <div className="w-full flex flex-col gap-y-12">
            {/* feature image */}
            <FeatureImageContainer title="Feature Image" />
            {/* images */}
            <ProductImagesContainer title="Product Images" />
            {/* services */}
            <ServicesContainer title="Services" />
            {/* pricing */}
            <PricingContainer title="Pricing" />
            <div className="w-full min-h-[100px] pt-6 flex justify-between items-center flex-row">
              <Button variant={"outline"}>Cancel</Button>
              <section className="flex flex-row gap-x-3">
                <Button variant={"ghost"}>Schedule Publish</Button>
                <Button className="bg-slate-100 text-black hover:bg-slate-200">
                  Save as Draft
                </Button>
                <Button>Publish</Button>
              </section>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProductPage;
