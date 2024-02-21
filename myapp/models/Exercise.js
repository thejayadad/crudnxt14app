import mongoose from "mongoose";


const ExerciseSchema = new mongoose.Schema({
    name: { type: String },
    duration: { type: Number }, 
    calories: { type: Number },
    day: Number,
    mood: String,
    notes: { type: String },
  });

export default mongoose?.models?.Exercise || mongoose.model("Exercise", ExerciseSchema)