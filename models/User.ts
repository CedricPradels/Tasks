import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  salt: { type: String, required: true },
  hash: { type: String, required: true },
  token: { type: String, required: true },
});

export default mongoose.model("User", UserSchema);
