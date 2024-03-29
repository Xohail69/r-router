import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, About, Layout, Contact, User, Github, githubInfoLoader } from './components.js';

//one messy way to write
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>

//       },
//       {
//         path: "contact",
//         element: <Contact/>

//       }
//     ]
//   }
// ])






//Another way to write:
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/r-router' element={<Layout />}>
      <Route path='/r-router' element={<Home />} />
      <Route path='/r-router/about' element={<About />} />
      <Route path='/r-router/contact' element={<Contact />} />
      <Route path='/r-router/user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} />
    
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
