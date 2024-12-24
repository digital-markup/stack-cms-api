/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { createClient } from "@/utils/supabase/server";

interface getProductByAsyncProps {
    category?: string,
    type?: string,
    brand?: string
}

const getProductByAsync = async ({ category, type, brand }: getProductByAsyncProps): Promise<any> => {
    const supabase = await createClient();

    // get category by Id
    if (category) {
        const { data, error } = await supabase.from("category").select("name").eq("id", category);
        if (error) {
            return error.message;
        }

        return {
            message: "Product fetched successfully",
            status: 200,
            data
        };
    }

    // get type by Id
    if (type) {
        const { data, error } = await supabase.from("type").select("name").eq("id", type);
        if (error) {
            return error.message;
        }

        return {
            message: "Product fetched successfully",
            status: 200,
            data
        };
    }

    // get brand by Id
    if (brand) {
        const { data, error } = await supabase.from("brand").select("name").eq("id", brand);
        if (error) {
            return error.message;
        }

        return {
            message: "Product fetched successfully",
            status: 200,
            data
        };
    }


}

export default getProductByAsync;