import React from 'react'
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const navigate = useNavigate()
  const SubmitHandler = (e)=>{
    e.preventDefault();
    console.log("Form Submitted");
    // code to submit data to database
    navigate("/");
  }
  return (
    <div>
      <h1 className='text-2xl text-blue-300'>Users</h1>
      <form onSubmit={SubmitHandler} className='mt-5'>
        <input type="text" className='border' />
        <br />
        <br />
        <button className='bg-red-300 py-2 px-4'>Submit</button>
      </form>
    </div>
  )
}

export default Users