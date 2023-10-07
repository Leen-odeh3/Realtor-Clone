import React from 'react'
import Header from '../Component/Header/Header'
import { Outlet } from 'react-router-dom'

const index = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default index
