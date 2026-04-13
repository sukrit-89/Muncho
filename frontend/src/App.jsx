import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'
import DemoOne from './demo'
import RestaurantsPage from './pages/restaurants'

function App() {
  return (
    <Routes>
      <Route path='/' element={<DemoOne />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/restaurants' element={<RestaurantsPage />} />
      <Route path='*' element={<Navigate to='/' replace />} />

    </Routes>
  )
}

export default App