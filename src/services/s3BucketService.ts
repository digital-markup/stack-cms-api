"use server";
import { awsClient } from "@/utils/aws/client";
import randomGenerator from "@/utils/randomNameGen";
import { PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"



/* eslint-disable @typescript-eslint/no-explicit-any */
// 1. create an async function that accepts (key = file name, body = file.buffer, contentType = file.mimetype)
// 2. change the key name into a random name to avoid object overriding
// 3. resize the image before uploading using sharp library and get the buffer from there
// 4. upload the file to s3 bucket
// 5. return the file key name



const putS3ObjectService = async (body: Buffer, contentType: string) => {

    const fileObject = {
        Bucket: process.env.BUCKET_NAME!,
        Key: randomGenerator(),
        Body: body,
        ContentType: contentType
    };

    const command = new PutObjectCommand({
        Bucket: fileObject.Bucket,
        Key: `images/${fileObject.Key}`,
        Body: fileObject.Body,
        ContentType: fileObject.ContentType
    });

    const response = await awsClient.send(command);
    if (response) {
        return {
            status: response.$metadata.httpStatusCode,
            key: fileObject.Key,
            message: "File uploaded successfully"
        };
    }

    throw new Error("File upload failed");
};

// Get signed url
const getS3ObjectService = async (key: string) => {
    // get the file using key
    const getObject = {
        Bucket: process.env.BUCKET_NAME as string,
        Key: `images/${key}`
    };
    const command = new GetObjectCommand(getObject);
    const url = await getSignedUrl(awsClient, command, { expiresIn: 3600 });

    if (url) {
        return {
            status: 200,
            url
        }
    }

    throw new Error("File download failed");
}

// Delete S3 object
const deleteS3ObjectService = async (key: string) => {
    const getObject = {
        Bucket: process.env.BUCKET_NAME as string,
        Key: `images/${key}`
    };

    const command = new DeleteObjectCommand(getObject);
    const response = await awsClient.send(command);

    if (response) {
        return {
            status: response.$metadata.httpStatusCode,
            message: "File deleted successfully"
        };
    }

    throw new Error("File delete failed");
}

export { getS3ObjectService, deleteS3ObjectService };
export default putS3ObjectService;