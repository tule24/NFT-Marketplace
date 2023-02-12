/**
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res
 */
import connectDB from '../../../backend/db/connect'
import Test from '../../../backend/models/Test'

const handler = async (req, res) => {
    if (req.method != "POST") {
        return res.status(403).json({ error: `Unsupported method ${req.method}` });
    }
    try {
        await connectDB()
        console.log(req.body)
        const newTest = await Test.create(req.body)
        res.status(201).json({ test: newTest });
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export default handler