import './profile.css';
import foto from '../assets/foto.jpg';
import { useState } from 'react';
const ProfileE = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='left-side'>
        <img src={foto} alt='profile' className='foto' />
        <h2>Hi my name is Bira</h2>
        <h3>I am a software engineer and I love to develop websites</h3>
        <div className='about' onClick={() => setIsOpen(!isOpen)}>
            <p>a little about me {isOpen ? '▼' : '▶'}</p>
            {isOpen && (
              <div className='about-content'>
                <p>
                I am 36 years old, the father of 2 boys and I am married to a beautiful wife. I started programming after suffering great difficulties in my previous business due to the events of the pandemic. At first I learned through free courses on the internet, after a while I understood that it would be very difficult to follow this path, so I decided to enter one of the best institutions in the world for training software engineers, the 42 school (if you don't know what 42 is, don't worry, I will explain later). Today, after a long journey of learning,
                 I am starting a modest web application development business that aims to provide a digital presence for small and medium-sized businesses like yours.

                    </p>
              </div>
            )}
        </div>
       </div>
    )
}

export default ProfileE;