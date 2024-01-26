import React from 'react'

function Button({name, elementStyle, type='button', event}) {
  console.log(type)
  return (
    <button 
    onClick={event}
    className={elementStyle} 
    type={type}>
      {name}
    </button>
  )
}

export default Button