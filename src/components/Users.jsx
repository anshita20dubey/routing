import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const Users = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation();
  const SubmitHandler = (e) => {
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
      <hr />
      <ul className='list-disc mt-5'>   
        <li className='list-item'>
          <Link className='list-item' to={`${pathname}/1`}>item1</Link>
          <Link className='list-item' to={`${pathname}/2`}>item2</Link>
          <Link className='list-item' to={`${pathname}/3`}>item3</Link>
        </li>
      </ul>
      <hr />
      <Outlet className="mt-5" />
    </div>
  )
}

export default Users