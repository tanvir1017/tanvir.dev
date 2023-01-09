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
        password,
        role,
        createAt,
        rememberMeFor,
      } = req.body;
      const user = new Users({
        firstName,
        lastName,
        email,
        password,
        role,
        createAt,
      });
      const result = await user.save();
      res.status(201).json({
        success: true,
        message: `account created successful`,
        data: JSON.parse(result),
      });
    } else if (req.method === "GET") {
      return res.status(401).json({
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
