import React from 'react'
import { NavLink } from 'react-router-dom'

const nav = () => {
  return (
    <nav className='justify-center flex gap-10'>
      <NavLink style={(e) => ({fontWeight: e.isActive ? "900" : "400"} )} className={(e)=>(e.isActive ? "text-red-500" : "")} to="/">Home</NavLink>
      <NavLink style={(e) => ({fontWeight: e.isActive ? "900" : "400"} )} className={(e)=>(e.isActive ? "text-red-500" : "")} to="/users">Users</NavLink>
      <NavLink style={(e) => ({fontWeight: e.isActive ? "900" : "400"} )} className={(e)=>(e.isActive ? "text-red-500" : "")} to="/about">About</NavLink>
    </nav>
  )
}

export default nav;