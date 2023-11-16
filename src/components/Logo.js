import React from 'react'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <Link href={"/"}
        className="bg-dark w-16 h-16 text-light flex items-center justify-center rounded-full 
        font-bold text-2xl border border-solid border-transparent dark:border-light"
      >
        SM
      </Link>
    </div>
  )
}

export default Logo