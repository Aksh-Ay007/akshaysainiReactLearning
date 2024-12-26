import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import About from './Components/About'
import Contact from './Components/Contact'
import Error from './Components/Error'
import RestaurentMenu from './Components/RestaurentMenu'
import { createBrowserRouter,Outlet } from 'react-router-dom'


function App() {
  return (
    <div>
      
      <Header/>
     <Outlet/>
    </div>
  )
}

export const appRoute=createBrowserRouter([
  {path:"/",
element:<App/>,

children:[

  {path:'/',
  element:<Body/>
},
  {path:'/about',
  element:<About/>
},
{
  path:'/contact',
  element:<Contact/>
},
{
  path:'/restaurant/:resId',
  element:<RestaurentMenu/>
}
] ,
errorElement:<Error/> },



])


export default App

