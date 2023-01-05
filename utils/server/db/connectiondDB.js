import mongoose from "mongoose";

mongoose.set("strictQuery", false);
// info DOTENV FILE ACCESS
const DB = process.env.DB;
// todo : CONNECTION WITH MONGODB ATLAS
const connectDB = async () => {
  if (mongoose.connection.readyState) {
    console.log("already connected");
  } else {
    mongoose.connect(
      DB,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("your db is connected now");
      }
    );
  }
};
export default connectDB;
