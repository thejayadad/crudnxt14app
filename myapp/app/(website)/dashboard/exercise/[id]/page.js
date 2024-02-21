import React from 'react'
import {Card, CardHeader, CardBody, Input, Textarea, Button, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { updateExercise } from '@/lib/action';
import { getSingleExercise } from '@/lib/data';


const ExercisePage = async ({ params }) => {
  
  const { id } = params;
  const exercise = await getSingleExercise(id)
  return (
    <div>
      <Card className="max-w-screen-md mx-auto">
        <CardHeader className="flex gap-3">
            FitLog
        </CardHeader>
        <Divider/>
        <CardBody>
            <form
            action={updateExercise}
             className='flex flex-col items-center p-4 gap-6'
            >
                <Input
                type='text'
                className='w-full'
                    name='name'
                    autoComplete='false'
                    placeholder={exercise.name || "Name..."}
                />
                <div className='flex gap-4 w-full'>
                <Input
                type='number'
                name='duration'
                placeholder={exercise.duration || 0}
                />
                <Input
                type='number'
                    name='calories'
                    placeholder={exercise.calories || 0}
                />
                </div>
                <label>Mood</label>
                <select
                name='mood'
                className='w-full p-6 rounded-lg bg-gray-100 dark:bg-gray-700'
                >
                    <option value='amazing'>Amazing</option>
                    <option value='solid job'>Nice Workout</option>
                    <option value='glad its over'>Glad Its Over</option>
                </select>
                    <label>Rating</label>
                    <Input
                    type='number'
                    name='rating'
                    placeholder={exercise.rating || 0}
                />
                <Textarea
                type='text'
                    name='notes'
                    placeholder={exercise.notes || "Notes..."}
                />
                <Button 
                type='submit'
                className='bg-primary'
                >Update Exercise</Button>
          </form>
        </CardBody>
        </Card>
    </div>
  )
}

export default ExercisePage