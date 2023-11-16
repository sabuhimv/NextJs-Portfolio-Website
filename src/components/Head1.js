import React from 'react'

const Head1 = ({text,className=""}) => {
  return (
    <h1 className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-6xl ${className}
      sm:py-0
    `}>{text}</h1>
  )
}

export default Head1