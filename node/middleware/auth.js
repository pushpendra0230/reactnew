const jwt = require(`jsonwebtoken`)
const secret = `bhsdhgjhbndguhwjedbnvhjvhewgjkjgdfjbjkjkwe`;
const userModel = require(`../model/userModel`)

module.exports = async (req, res, next) => {
    try {

        const barrerToken = req.headers.authorization;
        console.log('>>>>>>>barrerToken>>>', barrerToken);

        if (!barrerToken) {
            return res.status(401).json({ message: 'no token provided' });
        }

        const token = barrerToken.split(" ")[1];
        console.log('>>>>>>>token>>>', token);

        if (!token) {
            return res.status(401).json({ message: 'no token found' });
        }

        const decode = jwt.verify(token, secret);
        console.log('>>>>>>>decode>>>', decode);

        if (!decode) {
            return res.status(401).json({ message: 'invalid token' });
        }

        const user = await userModel.findOne({ email: decode.email });
        console.log('>>>>>>>user>>>', user);

        if (!user) {
            return res.status(401).json({ message: 'invalid user' });
        }

        next();
    } catch (error) {
        console.log(`>>>>>error>>>>>>`, error);

        return res.status(500).json({ message: 'internal server error ' });
    }
};
