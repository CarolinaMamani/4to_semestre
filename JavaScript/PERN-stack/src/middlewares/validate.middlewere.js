
export const validateSchema = (schema) => async (req, res, next) =>{
    try {
        await schema.parse(req.body)
        next()
    } catch (error) {
        console.log(error);
        return res.status(400).json(error.errors)
    }
};