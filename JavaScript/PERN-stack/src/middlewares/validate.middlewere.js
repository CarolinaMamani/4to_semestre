export const validateSchema = (schema) => async (req, res, next) => {
    try {
        await schema.parse(req.body);
        next();
    } catch (error) {
        console.log(error);
        if (Array.isArray(error.errors)) {
            return res.status(400).json(error.errors.map((err) => err.message));
        }
        next(error); // Manejar otros errores llamando a next
    }
};
