import React from 'react'

export default function Field({lable, children, error}) {
  return (
    <div className='flex flex-col justify-start items-start gap-2'>
        {lable && <div>{lable}</div>} 
        {children}
        {error && <div>{error.message}</div>}
    </div>
  )
}
