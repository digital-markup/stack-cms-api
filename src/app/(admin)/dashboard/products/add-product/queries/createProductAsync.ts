/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { createClient } from "@/utils/supabase/server";

const createProductAsync = async (body: any): Promise<any> => {
    const supabase = await createClient();

    const { data, error } = await supabase.from("products").insert(body).select('id');

    if (error) {
        return error.message;
    }

    return {
        message: "Product created successfully",
        status: 200,
        data
    };
}

export default createProductAsync;