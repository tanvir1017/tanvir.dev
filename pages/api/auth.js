import connectDB from "utils/server/db/connectiondDB";
import Users from "utils/server/model/modal";
export default async function handler(req, res) {
  try {
    console.log("connecting mongodb...");
    await connectDB();
    console.log("connected ...");
    if (req.method === "POST") {
      const {
        firstName,
        lastName,
        email,
        pictureURL,
        password,
        role,
        createAt,
        rememberMeFor,
      } = req.body;
      if (!firstName || !lastName || !email || !pictureURL || !password) {
        return res.status(422).json({
          success: true,
          message:
            "Please full-fill all the of the requirement that asked to you for register new account",
        });
      } else {
        const existUser = await Users.findOne({ email: email });
        const user = new Users({
          firstName,
          lastName,
          email,
          pictureURL,
          password,
          role,
          createAt,
        });
        if (existUser) {
          return res.status(422).json({
            success: false,
            message: `user already have an account with this email ID: ${email} `,
          });
        } else {
          const isRegister = await user.save();
          console.log(isRegister);
          if (isRegister) {
            // const token = await isRegister.generateAuthToken();
            // setCookie("authToken", token, {
            //   expires: new Date(
            //     Date.now() + rememberMeFor ? rememberMeFor : 2592000
            //   ),
            //   httpOnly: true,
            // });
            return res.status(201).json({
              success: true,
              message: `account created successful`,
              data: user,
            });
          } else {
            return res.status(500).json({
              success: false,
              message: `user register failed try again a while`,
            });
          }
        }
      }
    } else if (req.method === "GET") {
      return res.status(401).send({
        success: !true,
        message:
          "You are trying to get data from this location. But it is not the right location to give data as you want",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: `Internal server error with the code 500 and ${error.message}`,
    });
  }
}
