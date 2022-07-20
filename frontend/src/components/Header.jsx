import { FaBars } from 'react-icons/fa'
import { useRef } from 'react'


const Header = () => { 
  const ref = useRef()
  const handleClick = ()=>{
    document.querySelector('.side-nav').classList.toggle('navbar')
  }
  return (
    <header>
      <h1 style={{letterSpacing:'1.5px', cursor: 'default'}}>IFEOLUWA.</h1>  
      <ul style={{position: 'relative', top:'4px'}} ref={ref} >
        <li className=''><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#work">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <FaBars className = 'bar' style={{fontSize: '25px', display: 'none', cursor: 'pointer'}} onClick={handleClick}/>
      
    </header>
  )
}

export default Header
