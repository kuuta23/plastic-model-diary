import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Comment, DisplayProduction, Home, List, Login, Production, Profile, Record, SignIn, SignOut, SignUp } from './Pages'

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
          <Route
          path='Production'
          element={<Production/>}/>
          <Route
          path='Comment'
          element={<Comment/>}/>
          <Route
          path='Dairy'/>
        </Route>
        <Route
        path='/List'
        element={<List/>}/>
        <Route
        path='/Profile/:uid'
        element={<Profile/>}
        >
        </Route>
        <Route
        path='/Production/:id'
        element={<DisplayProduction/>}/>
        <Route
        element={<Home/>}
        path='/'/>
    </Routes>
  )
}

export default Router
