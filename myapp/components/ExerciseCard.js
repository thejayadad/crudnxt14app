import React from 'react'
import DeleteIcon from './Buttons/DeleteIcon'
import DayDisplay from './DayDisplay'
import MoodDisplay from './MoodDisplay'
import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/react";


const ExerciseCard = () => {
  return (
   <Card
   className='max-w-screen-sm'
   >
    <CardHeader>
    <div className='flex w-full justify-between p-4'>
        <p>Title</p>
        <DeleteIcon />
    </div>
    </CardHeader>
    <CardBody>
     <div className='flex justify-around p-4'>
        <div className='flex flex-col items-center'>
            <span>Duration</span>
            <span>60 minutes</span>
        </div>
        <div className='flex flex-col items-center'>
            <span>Calories Burn</span>
            <span>250</span>
        </div>
     </div>
    </CardBody>
    <CardFooter >
    <div className='flex w-full justify-between p-4'>
    <DayDisplay />
    <MoodDisplay />
    </div>
    </CardFooter>
   </Card>
  )
}

export default ExerciseCard