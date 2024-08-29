import {z} from 'zod'

export const signupSchema = z.object({
    name: z.string({
        required_error: "el nombre es requerido",
        invalid_type_error: "el nombre debe ser un string",
    }).min(1, {
        message: 'el nombre debe tener al menos 1 caracter'
    }).max(255, {
        message: "el nombre debe tener como máximo 255 caracteres"
    }),
    email: z.string({
        required_error: "el email es requerido",
        invalid_type_error: "el email debe ser un string",
    }).email({
        message: "el email debe ser un email válido"
    }),
    password: z.string({
        required_error: "la contraseña es requerida",
        invalid_type_error: "la contraseña debe ser un string",
    }).min(6, {
        message: "la contraseña debe tener al menos 6 caracteres"
    }).max(255, {
        message: "la contraseña debe tener como máximo 255 caracteres"
    }),
});

export const signinSchema = z.object({
    name: z.string({
        required_error: "el nombre es requerido",
        invalid_type_error: "el nombre debe ser un string",
    }).min(1, {
        message: 'el nombre debe tener al menos 1 caracter'
    }).max(255, {
        message: "el nombre debe tener como máximo 255 caracteres"
    }),
    email: z.string({
        required_error: "el email es requerido",
        invalid_type_error: "el email debe ser un string",
    }).email({
        message: "el email debe ser un email válido"
    }),
    password: z.string({
        required_error: "la contraseña es requerida",
        invalid_type_error: "la contraseña debe ser un string",
    }).min(6, {
        message: "la contraseña debe tener al menos 6 caracteres"
    }).max(255, {
        message: "la contraseña debe tener como máximo 255 caracteres"
    }),
});
