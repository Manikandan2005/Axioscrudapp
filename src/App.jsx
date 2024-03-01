import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Approutes from './utils/Approutes'
export const APIURL ='https://65e046f9d3db23f76248ce65.mockapi.io/data/data'
function App() {
  const router = createBrowserRouter(Approutes)
  return <>
    <RouterProvider router={router}/>
  </>
}

export default App