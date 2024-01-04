import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login, Record, SignIn, SignOut, SignUp } from './Pages'

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
    </Routes>
  )
}

export default Router
