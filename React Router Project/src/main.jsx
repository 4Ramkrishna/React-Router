import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home } from './components'
import { About } from './components'
import { Contact } from './components'
import { User } from './components'
import { Github } from './components'
import Layout from './Layout.jsx'
import { githubInfoLoader } from './components/Github/Github.jsx'

// 1 way to create routes
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       }, 
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//     ]
//   }
// ])

// other way to create routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Layout /> } >
      <Route path='' element={<Home /> } />
      <Route path='about' element={<About /> } />
      <Route path='contact' element={<Contact /> } />
      <Route
        loader={githubInfoLoader} 
        path='github' 
        element={<Github /> } 
      />
      <Route path='user/:userid' element={<User />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>,
)
