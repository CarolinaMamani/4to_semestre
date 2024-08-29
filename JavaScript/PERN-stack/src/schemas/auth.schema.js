import { password } from 'pg/lib/defaults'
import {z} from 'zod'

export const signupSchema = z.object({
    name: z.string({
        required_error: "el nombre es requerido",
        invalid_type_error: "el nombre debe ser un string",
    }).min(1,{
        message: 'el nombre dbe tener al menos 1 caracter'
    }).max(255, {
        message: "el nombre debe tener como maximo 255 caracteres"
    }),
    email: z.string({
        required_error: "el email es requerido",
        invalid_type_error: "el email debe der un string",
    }).email({
        message: "el email debe ser un email valido"
    }),
    password: z.string({
        required_error: "la contrasenia es requerida",
        invalid_type_error: "la contrasenia debe ser un string",
    }).min(6, {
        message: "la contrasenia debe tener al menos 6 caracteres"
    }).max(255, {
        message: "la contrasenia debe tener como maximo 255 caracteres"
    }),
});


export const signinSchema = z.object({
    name: z.string({
        required_error: "el nombre es requerido",
        invalid_type_error: "el nombre debe ser un string",
    }).min(1,{
        message: 'el nombre dbe tener al menos 1 caracter'
    }).max(255, {
        message: "el nombre debe tener como maximo 255 caracteres"
    }),
    email: z.string({
        required_error: "el email es requerido",
        invalid_type_error: "el email debe der un string",
    }).email({
        message: "el email debe ser un email valido"
    }),
    password: z.string({
        required_error: "la contrasenia es requerida",
        invalid_type_error: "la contrasenia debe ser un string",
    }).min(6, {
        message: "la contrasenia debe tener al menos 6 caracteres"
    }).max(255, {
        message: "la contrasenia debe tener como maximo 255 caracteres"
    }),
});