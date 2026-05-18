import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  duration: String,
  category: String,
  instructorName: String,
  courseImage: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, 
{ 
  timestamps: true,
  versionKey: false
 }
);

export default mongoose.model("Course", courseSchema);