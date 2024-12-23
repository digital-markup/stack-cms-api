import { NextRequest, NextResponse } from "next/server";

const GET = async (req: NextRequest) => {
    const additionalParams: Record<string, string> = {};
    try {
        const { searchParams } = new URL(req.url);

        const category = searchParams.get('category');
        const take = searchParams.get('take');
        const skip = searchParams.get('skip');

        if (!category || !take || !skip) {
            return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
        }

        // Check if any additional parameters are present
        searchParams.forEach((value, key) => {
            // Skip the required parameters
            if (!['category', 'take', 'skip'].includes(key)) {
                additionalParams[key] = value;
            }
        });

        const response = {
            data: {
                category,
                take: Number(take),
                skip: Number(skip),
                additionalParams
            },
            message: 'Success',
            status: 200
        }

        return NextResponse.json(response);

    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' + error },
            { status: 500 }
        );
    }
}

export { GET }