import React,{useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'   // <-- include Route
import Video from './pages/Video/Video'
import Home from './pages/Home/Home'
import Sidebar from './Components/Navbar/sidebar/sidebar'

const App = () => {

  const[sidebar,setSidebar]=useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={< Home  sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  )
}

export default App
