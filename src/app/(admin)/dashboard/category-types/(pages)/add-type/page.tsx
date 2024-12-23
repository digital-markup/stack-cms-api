import { SubmitButton } from "@/components/submit-button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React from "react";
import getCategories from "../../../category/actions/getCategories";
import createCategoryType from "../../actions/createCategoryType";
import SelectCategory from "./components/select-category";

async function AddTypePage() {
  const { data } = await getCategories();
  return (
    <div className="container mx-auto px-8">
      <Card className="shadow-none p-0">
        <CardHeader className="border-b flex justify-start w-full py-2 px-4 items-center">
          <p className="text-lg font-semibold">Add Category Type</p>
        </CardHeader>
        <div className="w-full min-h-16 p-2">
          <CardContent>
            <form>
              <div className="mb-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  name="name"
                  type="text"
                  placeholder="Category Type Name"
                  required
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="slug">Slug</Label>
                <Input
                  name="slug"
                  type="text"
                  placeholder="Category Type Slug (category type name in lowercase)"
                  required
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="category">Categories</Label>
                {data && <SelectCategory data={data} />}
              </div>
              <div className="my-5 flex justify-between items-center w-[500px]">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="slug">Archived</Label>
                  <small className="text-slate-400">
                    If category is archived, it will not be visible
                  </small>
                </div>
                <Switch name="isArchived" />
              </div>
              <SubmitButton
                pendingText="Saving..."
                formAction={createCategoryType}
              >
                Save Category Type
              </SubmitButton>
            </form>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default AddTypePage;
