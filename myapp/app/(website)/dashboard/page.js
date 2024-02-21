import ExerciseCard from '@/components/ExerciseCard'
import { getExercises } from '@/lib/data'
import React from 'react'

const DashboardPage = async () => {
  const exercises = await getExercises()
  return (
    <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
    {exercises.length === 0 ? (
          <p className='text-center'>No exercises posted. Please add an exercise.</p>
        ) : (
          exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))
        )}

    </div>
  )
}

export default DashboardPage