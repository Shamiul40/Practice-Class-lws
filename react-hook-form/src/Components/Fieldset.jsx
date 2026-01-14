import React from 'react'

export default function Fieldset({lable, children}) {

  return (

      <div>
        {lable && <legend>{lable}</legend>}
        {children}
      </div>
  )
}
