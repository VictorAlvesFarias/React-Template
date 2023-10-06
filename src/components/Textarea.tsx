import React from 'react'

function Textarea({ register, className }) {
  return (
    <textarea {...register} className={className} />
  )
}

export default Textarea