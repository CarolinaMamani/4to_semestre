import {z} from 'zod'

export const createTareasSchema = z.object({
    titulo: z.string({
        required_error: "El titulo es requerido",
        invalid_type_error: "el titulo debe ser un string",
    }).min(1,{
        message: "el titulo debe tener almenos 1 caracter"
    }).max(255, {
        message: "el titulo debe tenr como maximo 255 caracteres"
    }),
    descripcion: z.string({
        required_error: "descripcion requerida",
        invalid_type_error: "la descripcion debe ser un string",
    }).min(0, {
        message: "la descripcion debe tener almenos 1 string"
    }).max(255, {
        message: "la descripcion debe tener como maximo 255 caracteres"
    }).optional(),
});

//createTareasSchema.parse({ titulo})