/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

/**
 * Get All Category Types
 */
import listCategoryTypeAsync, { listBrandsByAsync } from "../queries/listCategoryTypeAsync";

const getCategoryTypes = async (): Promise<any> => {
    try {
        const response = await listCategoryTypeAsync();
        return response;
    } catch (error) {
        console.error(error);
    }
};

const getBrands = async (): Promise<any> => {
    try {
        const response = await listBrandsByAsync();
        return response;
    } catch (error) {
        console.error(error);
    }
};

export { getBrands };
export default getCategoryTypes;