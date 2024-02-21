'use server'
import { revalidatePath } from "next/cache"
import connectDB from "./db"
import Exercise from "@/models/Exercise"
import { redirect } from "next/navigation"
import getServerUser from "./getServerUser"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export const addExercise = async (formData) => {
    const userId = await getServerUser(authOptions)
    const userEmail = userId.email
    console.log("UserId Email " + userEmail)
    const { name,  duration, rating,mood, calories, notes} =
    Object.fromEntries(formData);
    try {
        await connectDB()
        const newExercise = new Exercise({
            name,  duration, rating,mood, calories, notes
        })
        await newExercise.save()

    } catch (error) {
        throw new Error("Failed to create exercise! " + error);

    }
    revalidatePath("/dashboard");
    redirect("/dashboard");
}

export const updateExercise = async (formData) => {
    const { name, id, duration, rating, mood, calories, notes } =
      Object.fromEntries(formData);
    try {
      await connectDB();
      const updateFields = {
        name,
        duration,
        rating,
        mood,
        calories,
        notes,
      };
  
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || updateFields[key] === undefined) &&
          delete updateFields[key]
      );
  
      await Exercise.findByIdAndUpdate(id, updateFields);
    } catch (error) {
      throw new Error("Failed to update exercise! " + error);
    }
    await revalidatePath("/dashboard");
    redirect("/dashboard");
  };