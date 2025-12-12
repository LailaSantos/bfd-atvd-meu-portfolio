import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import About from '../components/About/About'


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default AppRoutes;
