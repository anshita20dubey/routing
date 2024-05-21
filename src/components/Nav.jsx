import React from 'react'

const nav = () => {
  return (
    <nav className='justify-center flex gap-10'>
      <a className='hover:text-red-600' href="\">Home</a>
      <a className='hover:text-red-600' href="\users">Users</a>
      <a className='hover:text-red-600' href="\about">About</a>
    </nav>
  )
}

export default nav