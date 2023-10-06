import React from 'react'

function Password({register,className}) {
  return (
    <input {...register} type='text' autoComplete="off" className={className}/>
  )
}

export default Password