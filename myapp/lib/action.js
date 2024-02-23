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

// export const updateExercise = async (formData) => {
//     const { id,     
//         name,  duration, rating,mood, calories, notes} =
//     Object.fromEntries(formData);
//     try {
//       await connectDB();
//       const updateFields = {
//         name,  duration, rating,mood, calories, notes
//       };
//       Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key] )
//      await Exercise.findByIdAndUpdate(id, updateFields);
//     } catch (error) {
//       throw new Error("Failed to update exercise! " + error);
//     }
//     revalidatePath("/dashboard");
//     redirect("/dashboard");
//   };

  export const updateContact = async (FormData) => {
    const { id,     
      name,  duration, rating,mood, calories, notes} = 
    Object.fromEntries(FormData)
    await connectDB()

    try {
        const updateFields = {
              
          name,  duration, rating,mood, calories, notes
        }
        Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key] )
        await Exercise.findByIdAndUpdate(id, updateFields)
    } catch (error) {
        throw new Error("Failed To Update Contact " + error)
    }
    revalidatePath("/dashboard")
    redirect("/dashboard")
}

export const deleteExercise = async (FormData) => {
  const {id} = Object.fromEntries(FormData)
  await connectDB()

  try {
      await Exercise.findByIdAndDelete(id)
  } catch (error) {
      throw new Error("Failed To Delete Exercise " + error)
      
  }
  revalidatePath("/")

}