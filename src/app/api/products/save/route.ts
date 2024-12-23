import createProductAsync from "@/app/(admin)/dashboard/products/add-product/queries/createProductAsync";
import { NextRequest, NextResponse } from "next/server";

const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        if (body) {
            const response = await createProductAsync(body);
            return NextResponse.json(response);
        }
    } catch (error) {
        console.log("[EXAMS]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
};

export { POST }