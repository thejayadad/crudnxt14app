import { updateContact, updateExercise } from '@/lib/action';
import { getSingleExercise } from '@/lib/data';
import React from 'react'
import {Card, CardHeader, CardBody, Input, Textarea, Button, CardFooter, Divider, Link, Image} from "@nextui-org/react";

const ExercisePage = async ({params}) => {
    const { id } = params;
    const exercise = await getSingleExercise(id)
  return (
    <div>
    <Card className="max-w-screen-md mx-auto">
        <CardHeader className="flex flex-col gap-3">
            FitLog
        </CardHeader>
        <Divider/>
        <CardBody>
        <form
        className='flex flex-col gap-4'
        action={updateContact}
        >
            <input type='text' name='id' hidden value={exercise.id} />
            <Input
            type='text'
            id='name'
                name='name'
                defaultValue={exercise.name}
            />
<div className='flex gap-4 w-full'>
                <Input
                type='number'
                    defaultValue={exercise.duration}
                    name='duration'
                    id='duration'
                />
                <Input
                type='number'
                    name='calories'
                    defaultValue={exercise.calories}
                    id='calories'
                />
                </div>
                <select
                name='mood'
                id='mood'
                defaultValue={exercise.mood}
                className='w-full p-6 rounded-lg bg-gray-100 dark:bg-gray-700'
                >
                    <option value='amazing'>Amazing</option>
                    <option value='solid job'>Nice Workout</option>
                    <option value='glad its over'>Glad Its Over</option>
                </select>
                    <label>Rating</label>
                    <Input
                    id='rating'
                    type='number'
                    name='rating'
                    defaultValue={exercise.rating}
                />
                <Textarea
                    defaultValue={exercise.notes}
                    name='notes'
                />
            <button type='submit'>Update</button>
        </form>
        </CardBody>
        </Card>
    </div>
  )
}

export default ExercisePage