import React from 'react'

export default function Field({lable, children, htmlFor, error}) {

    const id = htmlFor || getHtmlForId(children)

  return (
    <div className='flex flex-col justify-start items-start gap-2'>
        {lable && <label htmlFor={id}>{lable}</label>} 
        {children}
        {error && <div>{error.message}</div>}
    </div>
  )
}


const getHtmlForId=(children)=>{
    const child = React.Children.only(children);

    if("id" in child?.props) {
        return child.props.id
    }
}