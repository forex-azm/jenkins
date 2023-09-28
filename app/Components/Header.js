import Link from 'next/link'
import React from 'react'
const Header = () => {
  return (
    <div className='flex align-center justify-between bg-red-200 py-5 px-6'>
      <div className='logo font-bold text-lg'><h1>Logo</h1></div>
      <div className='flex gap-3 navigation'>
      <Link href='/'>Home</Link>
      <Link href='/About'>About</Link>
      <Link href='/Contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Header