"use server";
import sharp from "sharp";

const setIntoSharp = async (file: Buffer) => {
    const buffer = await sharp(file).resize({ width: 1920, height: 1080, fit: "contain" }).toBuffer();
    return buffer;
}

export default setIntoSharp;