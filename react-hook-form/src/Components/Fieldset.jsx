import React from 'react'

export default function Fieldset({lable, children}) {

  return (

      <div className='border border-gray-300 p-4 rounded-lg flex  flex-col gap-4 '>
        {lable && <legend className=' text-3xl mb-3'>{lable}</legend>}
        {children}
      </div>
  )
}
