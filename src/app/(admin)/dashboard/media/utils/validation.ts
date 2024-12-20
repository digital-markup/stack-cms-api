import { z } from "zod";

const productSchema = z.object({
    variantTitle: z
        .string()
        .min(1, {
            message: "Please enter Feature image a title",
        }),
});

const variantSchema = z.object({
    variantTitle: z
        .string()
        .min(1, {
            message: "Please enter variant title",
        }),
});

export { variantSchema }

export default productSchema;