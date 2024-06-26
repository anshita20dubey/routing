import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Users from '../components/Users'
import About from '../components/About'
import NotFound from '../components/NotFound'
import Details from '../components/Details'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/users" element={<Users />}/>
        <Route path="/users/:id" element={<Details />}/> */}

        <Route path="/users" element={<Users />}>
          <Route path='/users/:id' element={<Details/>}/>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  )
}

export default MainRoutes;