import './App.css'
import { Themecontext } from './Context'
import Contact from './components/Contact/Contact'
import Experiance from './components/Experiance/Experiance'
import Footer from './components/Footer/Footer'
import Intro from './components/Intro/Intro'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Service from './components/Services/Service'
import Tesimonial from './components/Testimonials/Testimonial'
import Work from './components/Works/Work'
import { useContext } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  const theme=useContext(Themecontext);
  const darkMode=theme.state.darkMode;
  return (
    <>
    <BrowserRouter>
    <div className="App"
      style={{
        background: darkMode? 'black':'',
        color: darkMode? 'white':''
    }}
    >
    <Navbar/>
    <Intro/>
    <Service/>
    <Experiance/>
    <Work/>
    <Portfolio/>
    <Tesimonial/>
    <Contact/>
    <Footer/>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
