import React from 'react'

function InputRoot({children,label,error}) {
  return (
    <div className={'relative text-zinc-200'}>
        <label className=' mb-3 font-semibold px-1'>{label}</label>
        {children}
        {error && <span className='text-red-400'>{error.message}</span>}
    </div>
  )
}

export default InputRoot