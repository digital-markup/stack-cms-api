import { S3Client } from "@aws-sdk/client-s3"

// TODO: when you set up new s3 client in another project
// 1. create new access key 
// 2. copy & save somewhere safe because, it is a one time key

export const awsClient = new S3Client({
    credentials: {
        accessKeyId: process.env.ACCESS_KEY!,
        secretAccessKey: process.env.SECRET_ACCESS_KEY!
    },
    region: process.env.BUCKET_REGION!,
});
