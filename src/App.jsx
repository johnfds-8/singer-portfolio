
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import  { Toaster } from "react-hot-toast";
import { Routes,Route } from 'react-router-dom'
import SongComp from './components/Songs/Songcomp/SongComp';
import "./App.css"


function App() {
  

  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/song' element={<SongComp />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>}/>
       
      </Routes>
      {/* <Hero/>
      <About/>
      <Project/>
      <Contact/>*/}
      <Toaster/> 
    </div>
  )
}

export default App
