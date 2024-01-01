import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login, SignIn, SignUp } from './Pages'

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
        </Route>
    </Routes>
  )
}

export default Router
