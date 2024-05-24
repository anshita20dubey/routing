import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Users from '../components/Users'

const Details = () => {
    const {id} = useParams();
  return (
    <div>
        <h1>Details</h1>
        <h1 className='text-3xl font-extrabold'>{id}</h1>
        <Link to="/users" className='text-red-300'>back</Link>
    </div>
  )
}

export default Details