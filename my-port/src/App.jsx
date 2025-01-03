import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'
import foto from './assets/foto.jpg'
import Carousel from './components/Carousel'
import ProfileU from './components/ProfileU'
import ProfileE from './components/ProfileE'
import Welcome from './components/Welcome'
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  
  return (
    <>
     <header className='header'>
      <Menu/>
      <h1 className='title'>My Portfolio</h1>
     </header>

     <body className='body'>
       <Welcome className='welcome'/>
       <ProfileU className='left-side'/>
       <ProfileE className='right-side'/>
     </body>
     <Carousel/>
    </>
  )
}

export default App
