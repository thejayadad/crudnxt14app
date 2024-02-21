import React from 'react'
import {Card, CardHeader, CardBody, Input, Textarea, Button, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { addExercise } from '@/lib/action';


const NewExercise = () => {
  return (
    <div>
        <Card className="max-w-screen-md mx-auto">
        <CardHeader className="flex gap-3">
            FitLog
        </CardHeader>
        <Divider/>
        <CardBody>
            <form
            action={addExercise}
             className='flex flex-col items-center p-4 gap-6'
            >
                <Input
                className='w-full'
                    placeholder='Name...'
                    name='name'
                    autoComplete='false'
                />
                <div className='flex gap-4 w-full'>
                <Input
                type='number'
                    placeholder='Duration...'
                    name='duration'
                />
                <Input
                type='number'
                    name='calories'
                    placeholder='Calories'
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
                    placeholder='Rating...'
                />
                <Textarea
                    placeholder='Notes...'
                    name='notes'
                />
                <Button 
                type='submit'
                className='bg-primary'
                >Post Exercise</Button>
          </form>
        </CardBody>
        </Card>
    </div>
  )
}

export default NewExercise