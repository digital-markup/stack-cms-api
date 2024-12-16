/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import listCategoriesByAsync from "../queries/listCategoryByAsync";

const getCategories = async (): Promise<any> => {
    try {
        const response = await listCategoriesByAsync();
        return response;

    } catch (error) {
        return error
    }
}

export default getCategories