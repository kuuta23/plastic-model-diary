import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Login, Profile, Record, SignIn, SignOut, SignUp } from './Pages'

const Router = () => {
  return (
    <Routes>
        <Route
        element={<Login/>}
        path='/Login'>
          <Route
          element={<SignUp/>}
          path='SignUp'/>
          <Route
          element={<SignIn/>}
          path='SignIn'/>
          <Route
          element={<SignOut/>}
          path='SignOut'/>
        </Route>
        <Route
        element={<Record/>}
        path='Record'>
        </Route>
        <Route
        element={<Profile/>}
        path='/Profile'/>
        <Route
        element={<Home/>}
        path='/'/>
    </Routes>
  )
}

export default Router
