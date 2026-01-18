import React from 'react'

export default function Button({children, type, handler}) {
  return (
    <div>
      <button onClick={handler}>
        {children}
      </button>
    </div>
  )
}
