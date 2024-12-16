import { EntityType } from "../utils/enum";

const handleEntityOperation = async (entityType: EntityType) => {
    try {
        switch (entityType) {
            case EntityType.CATEGORY:
                // const categories = await getCategories(false);
                return "categories";

            case EntityType.TAGS:
                // const tags = await getTags(false);
                return "tags";

            // case EntityType.BRAND:
            //     const brands = "await fetchBrands();"
            //     console.log('Brands fetched:', brands);
            //     return brands;

            default:
                throw new Error(`Unhandled entity type: ${entityType}`);
        }
    } catch (error) {
        console.error(`Error processing ${entityType}:`, error);
        throw error;
    }
}

export default handleEntityOperation