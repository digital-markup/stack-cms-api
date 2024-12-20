import { z } from "zod";

const formSchema = z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    sku: z.string().optional(),
    product_description: z.string().min(1, { message: 'Product description is required' }),
    category: z.string().min(1, { message: 'Category is required' }),
    tags: z.array(z.string()).min(1, { message: 'At least one tag is required' }),
    type: z.string().min(1, { message: 'Type is required' }),
    brand: z.string().min(1, { message: 'Brand is required' }),
    display_info: z.string().min(1, { message: 'Display info is required' }),
    storage: z.array(z.string()).min(1, { message: 'At least one storage option is required' }),
    camera: z.string().min(1, { message: 'Camera info is required' }),
    battery: z.string().min(1, { message: 'Battery info is required' }),
    colors: z.array(z.string()).min(1, { message: 'At least one color is required' }),
    ram_information: z.string().min(1, { message: 'RAM information is required' }),
    availability: z.boolean(),
    stock: z.number().int().min(0),
    compare_at_price: z.boolean(),
    feature_image: z.object({
        url: z.string().url(),
        alt: z.string(),
    }),
    images: z.array(z.object({
        url: z.string().url(),
        alt: z.string(),
    })).min(1, { message: 'At least one image is required' }),
    variations: z.array(z.object({
        name: z.string(),
        options: z.array(z.string()),
    })).optional(),
    services: z.array(z.object({
        name: z.string(),
        description: z.string(),
    })).optional(),
    additional_information: z.record(z.string(), z.string()).optional(),
});

export default formSchema;