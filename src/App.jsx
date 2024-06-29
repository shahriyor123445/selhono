import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom" 
import Home from './components/Home'
import Pages from './components/Pages'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Project from './components/Project'
import Services from './components/Services'
import { CiSearch } from "react-icons/ci";
import { RiHome2Fill } from "react-icons/ri";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Router>
          <header>
            <nav>
              <div className="container mx-auto p-4 bg-white flex justify-between  items-center mt-[54px]">
                <ul>
                  <li>
                    <NavLink
                      to="/"
                      
                      className="flex items-center gap-2"
                    >
                      
                      < RiHome2Fill className='text-yellow-500' />
                      SELHONE
                    </NavLink>
                  </li>
                </ul>
                <ul className="flex gap-3">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/pages">Pages</NavLink>
                  </li>
                  <li>
                    <NavLink to="/services">Services</NavLink>
                  </li>
                  <li>
                    <NavLink to="/project">Project</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                  <li>
                    <NavLink to="#"> <CiSearch />  </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/services" element={<Services />} />
            <Route path="/project" element={<Project />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App
