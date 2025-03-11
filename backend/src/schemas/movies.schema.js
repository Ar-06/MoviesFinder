import zod from "zod";

export const registerMovieSchema = zod.object({
  title: zod
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title must be a string",
    })
    .min(3, { message: "Title must have at least 3 characters" })
    .max(50, { message: "Title must have at most 50 characters" }),

  rating: zod
    .string()
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val >= 0 && val <= 10, {
      message: "Rating must be a number between 0 and 10",
    }),

  year: zod
    .string()
    .transform((val) => Number(val))
    .refine(
      (val) => !isNaN(val) && val > 1900 && val <= new Date().getFullYear(),
      {
        message: "Year must be a valid number",
      }
    ),

  recommendBy: zod.string().optional(),

  createdAt: zod
    .date()
    .default(() => new Date())
    .optional(),
});
