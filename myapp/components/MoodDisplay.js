import React from 'react'

const MoodDisplay = ({mood}) => {
    const getColor = (mood) => {
        if (!mood) return "bg-slate-700"; 
    
        let color;
        switch (mood.toLowerCase()) {
          case "amazing":
            color = "bg-green-200";
            break;
          case "solid job":
            color = "bg-yellow-200";
            break;
          case "glad its over":
            color = "bg-red-200";
            break;
          default:
            color = "bg-slate-700";
        }
        return color;
      };
  return (
    <span
    className={`inline-block  rounded-lg px-4 py-2 text-xs font-semibold text-gray-700 ${getColor(
      mood
    )}`}
  >
    {mood}
  </span>
  )
}

export default MoodDisplay