/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from "@/utils/supabase/server";

const createCategoryTypeAsync = async (categoryType: any): Promise<any> => {
    const supabase = await createClient();

    const { data, error } = await supabase.rpc('create_type', categoryType);

    if (error) {
        return error.message;
    }

    return {
        message: "Category type created successfully",
        status: 200,
        data
    };
}

export default createCategoryTypeAsync