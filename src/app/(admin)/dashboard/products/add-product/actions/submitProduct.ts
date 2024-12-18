"use server";

const submitProduct = async (data: FormData) => {
    const productData = {
        title: data.get("title") as string,
        product_description: data.get("product_description") as string,
        category: data.get("category") as string,
        type: data.get("type") as string,
        brand: data.get("brand") as string,
        // display_info: data.get("display_info") as string,
    }

    console.log(productData);
}

export default submitProduct