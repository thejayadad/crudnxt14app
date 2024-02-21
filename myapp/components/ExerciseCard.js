import React from 'react'
import DeleteIcon from './Buttons/DeleteIcon'
import DayDisplay from './DayDisplay'
import MoodDisplay from './MoodDisplay'
import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/react";
import Link from 'next/link';


const ExerciseCard = ({exercise}) => {
  return (
   <Card
   className='max-w-screen-sm'
   >
    <CardHeader>
    <div className='flex w-full justify-between p-4'>
        <p>
            <Link
            className='cursor-pointer'
            href={`/dashboard/exercise/${exercise.id}`}>
            {exercise.name}
            </Link>
        </p>
        <DeleteIcon />
    </div>
    </CardHeader>
    <CardBody>
     <div className='flex justify-around p-4'>
        <div className='flex flex-col items-center'>
            <span>Duration</span>
            <span>{exercise.duration} minutes</span>
        </div>
        <div className='flex flex-col items-center'>
            <span>Calories Burn</span>
            <span>{exercise.calories}</span>
        </div>
     </div>
    </CardBody>
    <CardFooter >
    <div className='flex w-full justify-between p-4'>
    <DayDisplay rating={exercise.rating} />
    <MoodDisplay mood={exercise.mood} /> 
    </div>
    </CardFooter>
   </Card>
  )
}

export default ExerciseCard