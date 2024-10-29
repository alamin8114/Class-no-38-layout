import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contain from './pages/Contain'
// import Navbar from './components/Navbar/Navbar'
// import Footer from './components/Fotter/Footer'
import LayoutOne from './components/Layout/LayoutOne'
function App() {
  const myRoute =createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Contain' element={<Contain/>}/>
      </Route>
    )
  )
  return (
    <>
    {/* <Navbar/> */}
      <RouterProvider router={myRoute}/>
      {/* <Footer/> */}
    </>
  )
}

export default App
