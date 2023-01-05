import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { model, Schema } from "mongoose";
//  ! MONGOOSE SCHEMA
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pictureURL: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// TODO : hashing user password for more security
userSchema.pre("save", async function (next) {
  if (this.isDirectModified("password")) {
    this.password = await bcrypt.hash(this.password, 16);
  }
  next();
});

// todo : generate cookie token
userSchema.methods.generateAuthToken = async function () {
  try {
    let generatedToken = jwt.sign(
      { _id: this._id },
      process.env.SECRET_KEY_JWT
    );
    this.tokens = this.tokens.concat({ token: generatedToken });

    await this.save();
    return generatedToken;
  } catch (error) {
    console.log("error", error);
  }
};
// const User = models.User || model("USERS", userSchema);
const User = model("users", userSchema);
export default User;
