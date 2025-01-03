import { useState } from 'react';

const Menu =()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return ( 
<div className='menu-container'>
<p className='menu' onClick={() => setIsMenuOpen(!isMenuOpen)}>menu</p>
{isMenuOpen && (
  <nav className='dropdown-menu'>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
)}
</div>
  )
}
export default Menu;