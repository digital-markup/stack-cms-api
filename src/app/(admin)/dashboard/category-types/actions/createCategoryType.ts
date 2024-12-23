"use server";

import createCategoryTypeAsync from "../queries/createCategoryTypeAsync";

const createCategoryType = async (data: FormData) => {
    const name = data.get("name") as string;
    const slug = data.get("slug") as string;
    const category_id = data.get("categoryId") as string;
    const is_archived = data.get("isArchived") || "off" as string;

    try {
        const response = await createCategoryTypeAsync({ name, slug, category_id, is_archived });
        if (response.status === 200) {
            return;
        }
        throw new Error(response);
    } catch (error) {
        console.error(error);
    }
};

export default createCategoryType;