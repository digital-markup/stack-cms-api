/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { createClient } from "@/utils/supabase/server";

const listProductsAsync = async () => {
    const supabase = await createClient();

    const { data, error } = await supabase.from("products").select("*");
    if (error) {
        return {
            message: "Error while fetching products::" + error.message,
            status: 500,
        };
    }

    return {
        message: "Products fetched successfully",
        status: 200,
        data,
    };
}

export default listProductsAsync;