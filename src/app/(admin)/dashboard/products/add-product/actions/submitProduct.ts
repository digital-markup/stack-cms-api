"use server";

const submitProduct = async (data: FormData) => {
    const productData = {
        title: data.get("title") as string,
        product_description: data.get("product_description") as string,
        category: data.get("category") as string,
        type: data.get("type") as string,
        brand: data.get("brand") as string,
        display_info: data.get("displayInfo") as string,
        battery: data.get("battery") as string,
        memory: data.get("memory") as string,
        camera: data.get("camera") as string,
        ram_information: data.get("hardware") as string,
        stock: data.get("stock") as string,
        sku: data.get("sku") as string,
        availability: data.get("availability") as string,
        compare_at_price: data.get("compare_at_price") as string,
    }

    console.log(productData);
}

export default submitProduct