import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login, SignUp } from './Pages'

const Router = () => {
  return (
    <Routes>
        <Route
        element={<Login/>}
        path='/Login'>
          <Route
          element={<SignUp/>}
          path='SignUp'/>
        </Route>
    </Routes>
  )
}

export default Router
