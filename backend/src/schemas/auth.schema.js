import zod from "zod";
import required_error from "zod"

export const registerSchema = zod.object({
  username: zod
    .string({
      required_error: "Usuario es requerido",
      invalid_type_error: "Usuario es de tipo texto",
    })
    .min(3)
    .max(20),
  email: zod
    .string({
      required_error: "Email es requerido",
    })
    .email({
      message: "Email inválido",
    }),
  password: zod
    .string({
      required_error: "Contraseña es requerida",
    })
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    })
    .max(20),
});

export const loginSchema = zod.object({
  email: zod
    .string({
      required_error: "Email es requerido",
    })
    .email({
      message: "Email invalido",
    }),
  password: zod
    .string({
      required_error: "Contraseña es requerida",
    })
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    })
    .max(20),
});


