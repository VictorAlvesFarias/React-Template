import React from 'react'

function InputRoot({children,label,error}) {
  return (
    <div className={'flex-col flex relative text-zinc-200'}>
        {children}
        {error && <span className='text-red-400'>{error.message}</span>}
    </div>
  )
}

export default InputRoot