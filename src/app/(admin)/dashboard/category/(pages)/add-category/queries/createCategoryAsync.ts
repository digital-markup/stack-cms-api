"use server";
import { createClient } from "@/utils/supabase/server";
import { CategoryFormData } from "../../../utils/categoryTypes";

const createCategoryAsync = async (category: CategoryFormData) => {
    const supabase = await createClient();
    const { data, error } = await supabase.from("category").insert(category).select('id');

    if (error) {
        return error.message;
    }

    return {
        message: "Category created successfully",
        status: 200,
        data
    };
};

export default createCategoryAsync;