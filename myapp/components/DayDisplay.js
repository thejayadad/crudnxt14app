import React from 'react'
import {FaDumbbell} from "react-icons/fa"

const DayDisplay = ({day}) => {
  return (
    <div className="flex justify-start align-baseline gap-4">
       <div className='flex-col items-center flex'>
       <FaDumbbell
        className='text-gray-400'
        /><span>Mon</span>
       </div>
       <div className='flex-col items-center flex'>
       <FaDumbbell
        className='text-gray-400'
        /><span>Tue</span>
       </div>
       <div className='flex-col items-center flex'>
       <FaDumbbell
        className='text-gray-400'
        /><span>Wed</span>
       </div>
       <div className='flex-col items-center flex'>
       <FaDumbbell
        className='text-gray-400'
        /><span>Thur</span>
       </div>
       <div className='flex-col items-center flex'>
       <FaDumbbell
        className='text-gray-400'
        /><span>Fri</span>
       </div>
       <div className='flex-col items-center flex'>
       <FaDumbbell
        className='text-gray-400'
        /><span>Sat</span>
       </div>
       <div className='flex-col items-center flex'>
       <FaDumbbell
        className='text-gray-400'
        /><span>Sun</span>
       </div>
    </div>
  )
}

export default DayDisplay