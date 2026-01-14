import React from 'react'

export default function Field({lable, children, error}) {
  return (
    <div className='flex justify-start items-center gap-4'>
        {lable && <div>{lable}</div>} 
        {children}
        {error && <div>{error.message}</div>}
    </div>
  )
}
