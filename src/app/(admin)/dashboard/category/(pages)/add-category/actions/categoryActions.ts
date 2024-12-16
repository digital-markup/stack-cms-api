"use server";

import createCategoryAsync from "../queries/createCategoryAsync";

export const createCategory = async (data: FormData) => {
    const name = data.get("name") as string;
    const slug = data.get("slug") as string;

    try {
        const response = await createCategoryAsync({ name, slug });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}