import ExerciseCard from '@/components/ExerciseCard'
import React from 'react'

const DashboardPage = () => {
  return (
    <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />

    </div>
  )
}

export default DashboardPage