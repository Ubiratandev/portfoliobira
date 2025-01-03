import { useState, useEffect } from 'react';
import foto from '../assets/foto.jpg';
import './Carousel.css';
const Carousel = () => {
    const [currentProject, setCurrentProject] = useState(0);
  const projects = [
    {
      title: "Site para dentista",
      description: "Site de prospecção para um dentista",
      image: "my-port\src\assets\foto.jpg",
      link: "https://project1-url.com"
    },
    {
      title: "Project 2",
      description: "Brief description of project 1",
        image:{foto},
      link: "https://project1-url.com"
    },
    {
      title: "Project 3",
      description: "Brief description of project 1",
      image: "/path-to-screenshot1.jpg",
      link: "https://project1-url.com"
    },
    {
      title: "Project 4",
      description: "Brief description of project 1",
      image: "/path-to-screenshot1.jpg",
      link: "https://project1-url.com"
    },
    {
      title: "Project 5",
      description: "Brief description of project 1",
      image: "/path-to-screenshot1.jpg",
      link: "https://project1-url.com"
    },
    {
      title: "Project 6",
      description: "Brief description of project 1",
      image: "/path-to-screenshot1.jpg",
      link: "https://project1-url.com"
    }, 
  ];
  const changeProject = (index, direction) => {
    if (index == 0 && direction == -1)
    {
      setCurrentProject(0);
    }
    else if (index >= 0  && index < (projects.length - 1)) {
      setCurrentProject(index + direction);
    }
    else if (index + direction === projects.length) {
      setCurrentProject(0);
    }
    else if (index + direction === -1) {
      setCurrentProject(0);
    }
  };
  useEffect(()=>{
    const interval = setInterval(()=>{
      changeProject(currentProject, 1);
    }, 5000);
    return () => clearInterval(interval);
},[currentProject])
    return (
        <div className='projects'>
            <div className='previous'>
                <button onClick={()=>changeProject(currentProject, -1)} className='button'>{'<'}</button>
            </div>
            <div className='project'>
                <div>{projects[currentProject].title}</div>
                <div>{projects[currentProject].description}</div>
                <div><img src={foto} alt='profile'  /></div>
            </div>
            <div className='next'>        
                <button onClick={()=>changeProject(currentProject, 1)} className='button'>{'>'}</button>
            </div>
        </div>

    )
}
export default Carousel;