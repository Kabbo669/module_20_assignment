import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  resetToken: String,
  resetTokenExpiration: Date,
  phoneNumber: { type: String }
}, 
{ timestamps: true,
  versionKey: false
 }
);

export default mongoose.model("User", userSchema);