import React from 'react'

const Layout = ({children,className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-32 ${className}
      dark:bg-dark xl:p-28 lg:p-16 md:p-12 sm:p-8
    `}>
        {children}
    </div>  
  )
}

export default Layout