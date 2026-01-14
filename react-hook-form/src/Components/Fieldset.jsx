import React from 'react'

export default function Fieldset({lable, children}) {

  return (

      <div className='border border-gray-300 p-4 rounded-lg '>
        {lable && <legend className='text-gray-700'>{lable}</legend>}
        {children}
      </div>
  )
}
