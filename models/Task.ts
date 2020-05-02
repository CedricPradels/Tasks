import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  done: { type: Boolean, default: false },
  // user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

export default mongoose.model("Task", TaskSchema);
