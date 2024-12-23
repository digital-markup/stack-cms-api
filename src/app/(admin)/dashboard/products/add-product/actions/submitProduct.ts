import createProductAsync from "../queries/createProductAsync";

/* eslint-disable @typescript-eslint/no-explicit-any */
const productSubmitAction = async (data: any) => {
    // save the data
    const response = await createProductAsync(data);
    if (response.status === 200) {
        return response
    }

    return response
}

export default productSubmitAction