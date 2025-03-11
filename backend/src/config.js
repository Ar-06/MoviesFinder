import "dotenv/config";

export const config = {
  port: process.env.PORT || 3000,
  secretKey: process.env.JWT_SECRET,
  mongouir: process.env.MONGO_URI,
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
  },
};
