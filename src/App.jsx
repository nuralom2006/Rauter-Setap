import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import  routes  from "./Route/Routes"


function App() {
  
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
