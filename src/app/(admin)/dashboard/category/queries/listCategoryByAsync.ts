"use server";

import { createClient } from "@/utils/supabase/server";

const listCategoriesByAsync = async () => {
    const supabase = await createClient();

    const { data, error } = await supabase.rpc("get_all_categories");

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

export default listCategoriesByAsync;