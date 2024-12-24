/**
 * Get All Category Types
 */

import listCategoryTypeAsync from "../queries/listCategoryTypeAsync";

const getCategoryTypes = async () => {
    try {
        const response = await listCategoryTypeAsync();
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default getCategoryTypes;