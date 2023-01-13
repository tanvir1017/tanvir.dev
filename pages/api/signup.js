import {
  errorHandler,
  fieldValidator,
  resPonseHandler,
} from "utils/common/common";
import connectDB from "utils/server/db/connectiondDB";
import Users from "utils/server/model/modal";

export default async function signup(req, res) {
  if (req.method !== "POST") {
    // return error
    errorHandler("Invalid request type", res, 401);
  }
  try {
    if (req.method === "POST") {
      const { firstName, lastName, profile, email, password } = req.body;
      fieldValidator({ firstName, lastName, profile, email, password });

      //  connect to db
      console.log("connecting mongodb...");
      await connectDB();
      console.log("connected ...");

      const newUser = new Users({
        firstName,
        lastName,
        profile,
        email,
        password,
      });
      const isSaveData = await newUser.save();
      if (isSaveData) {
        resPonseHandler(isSaveData, "account created successful", res, 201);
      } else {
        errorHandler("Something went wrong", res);
      }
    }
  } catch (error) {
    errorHandler(error.message, res);
  }
}
