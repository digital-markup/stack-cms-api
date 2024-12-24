"use server";

import { createClient } from "@/utils/supabase/server";

const listCategoryTypeAsync = async () => {
    const supabase = await createClient();

    const { data, error } = await supabase.rpc("get_all_types");

    if (error) {
        return {
            message: "Error while fetching categories::" + error.message,
            status: 500,
        }
    }

    return {
        message: "Categories fetched successfully",
        status: 200,
        data
    };
};

export default listCategoryTypeAsync;