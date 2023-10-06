import React from 'react'
import InputMask from 'react-input-mask'

function Date({ register, className }) {
  {/* deprecread */ }
  return (
    <InputMask {...register} mask="99-99-9999" maskChar="_" className={className}
    />
  )
}

export default Date