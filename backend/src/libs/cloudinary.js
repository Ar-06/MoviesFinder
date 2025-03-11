import { v2 as cloudinary } from "cloudinary";
import { config } from "../config.js";

const { cloudName, apiKey, apiSecret } = config.cloudinary;

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

export async function uploadImage(filePaht) {
  return await cloudinary.uploader.upload(filePaht, {
    folder: "movies",
  });
}

export async function deleteImage(publicId) {
  return await cloudinary.uploader.destroy(publicId);
}
