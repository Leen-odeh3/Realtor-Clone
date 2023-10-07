import React from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Home from './../Pages/Home'
const index = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
<Route index element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default index
