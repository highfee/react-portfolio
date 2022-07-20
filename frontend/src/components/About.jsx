import { useSelector } from 'react-redux'
import mern from '../images/mern.svg'
import web from '../images/web.svg'
import js from '../images/react.svg'
import free from '../images/free2.png'
import mobile from '../images/mob3.svg'

const About = () => {
  // const theme = useSelector(state => state.theme.value)
    const style = {
        about: {
            width: '100vw',
            padding: '40px 10%',
            zIndex: '999',
            // backgroundImage: theme === 'light'? 'url(http://localhost:3000/logo.jpg)' : '',
        },
        hi: {
          position: 'relative',
          transform: 'translateX(-50%)',
          left: '50%',
          width: 'fit-content'
        }
        
    }
  return (
    <div className="about" style={style.about}>
        <h1 className="underline" style={{marginBottom: '20px'}}>About Me</h1>
        <h1 className="colorText" style={style.hi}><span style={{fontSize: '44px'}}>HI</span> <br />
        I AM ODEDIRAN IFEOLUWA</h1>
        <div style={{
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '50px', 
          justifyContent: 'center',
          marginTop: '50px',
        }}>
          <div className='about-card'>
            <img src={free} alt="" style={{objectFit: 'contain'}}/>
            <h2>Freelancer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, consectetur.</p>
          </div>
          <div className='about-card'>
            <img src={web} alt="" />
            <h2>Web developer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, consectetur.</p>
          </div>
          <div className='about-card'>
            <img src={mobile} alt="" />
            <h2>Mobile developer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, consectetur.</p>
          </div>
          <div className='about-card'>
            <img src={js} alt="" style={{objectFit: 'contain'}}/>
            <h2>Javascript Developer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, consectetur.</p>
          </div>
          <div className='about-card'>
            <img src={mern} alt="" style={{objectFit: 'contain'}}/>
            <h2>MERN stack</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, consectetur.</p>
          </div>
        </div>
    </div>
  )
}

export default About