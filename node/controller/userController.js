const userModel = require(`../model/userModel`)
const bcrypt = require(`bcrypt`)
const jwt = require(`jsonwebtoken`)
const secret = `bhsdhgjhbndguhwjedbnvhjvhewgjk jgdfjbjkjkwe`


exports.signUp = async (req, res) => {
    const { email, password, name, phone } = req.body
    const exixstingEmail = await userModel.findOne({ email })
    console.log(`>>>>>>>>`, exixstingEmail);
    if (exixstingEmail) {
        return res.status(404).json({ message: "email exixt" })
    }

    // const salt8 = bcrypt.genSaltSync(8)
    // console.log(`>>>>>salt8>>>>>`, salt8);

    // const salt9 = bcrypt.genSaltSync(9)
    // console.log(`>>>>>salt9>>>>>`, salt9);

    const salt = bcrypt.genSaltSync(10)
    console.log(`>>>>>salt>>>>>`, salt);

    const hash = bcrypt.hashSync(password, salt);
    console.log(`>>>>hash>>>>`, hash);

    const result = {
        name, email, phone, password: hash

    }

    const user = new userModel(result)
    const data = await user.save()
    res.status(201).json(data)
}


exports.login = async (req, res) => {
    const { email, password } = req.body
    const exixstingEmail = await userModel.findOne({ email })
    if (!exixstingEmail) {
        return res.status(404).json({ message: "signUp now" })
    }

    const dbPassword = exixstingEmail.password

    const isMatch = await bcrypt.compareSync(password, dbPassword)
    console.log(`>>>>>>>>isMatch>>>>`, isMatch);

    if (!isMatch) {
        return res.status(404).json({ message: "invailed password" })
    }

    const token = jwt.sign({
        email,
    }, secret,
        // { expiresIn: `1h` }
    );
    console.log(`>>>>>>>>token>>>>`, token);

    res.status(200).json({ message: "login sucssesfuly", token })
}



// exports.forgetPassword = async (req, res) => {
//     const { email, newPassword } = req.body;
//     const user = await userModel.findOne({ email });

//     if (!user) {
//         return res.status(404).json({ message: "Email not found" });
//     }

//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(newPassword, salt);

//     user.password = hash;
//     await user.save();

//     res.status(200).json({ message: "Password updated successfully" });
// }


exports.forgetPassword = async (req, res) => {
    const { email, newPassword } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
        return res.status(404).json({ message: "Email not found" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(newPassword, salt);

    user.password = hash;
    await user.save();

    const token = jwt.sign({ email: user.email }, secret
        // , { expiresIn: "1h" }
    );

    res.status(200).json({
        message: "Password updated successfully",
        token: token
    });
};


exports.resetPassword = async (req, res) => {
    const { email, oldPassword, newPassword } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
        return res.status(404).json({ message: "Email not found" });
    }

    const isMatch = bcrypt.compareSync(oldPassword, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: "Old password is incorrect" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(newPassword, salt);

    user.password = hash;
    await user.save();

    const token = jwt.sign({ email: user.email }, secret
        // , { expiresIn: "1h" }
    );

    res.status(200).json({
        message: "Password reset successfully",
        token: token
    });
};