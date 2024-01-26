import React from 'react'

function Heading({heading}) {
  return (
    <h1 className='text-lg font-bold text-white h-fit px-4 py-3 bg-slate-400  '>
        {heading}
    </h1>
  )
}

export default Heading