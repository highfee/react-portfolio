import { useSelector } from 'react-redux'

const SideNav = () => {
    const theme = useSelector(state => state.theme.value)

    const click = () => {
        document.querySelector('.side-nav').classList.remove('navbar')
    }


    const style = {
        div: {
            background: theme==='light'? 'white' : 'rgba(0, 0, 0, .8)',
            position: 'fixed',
            top: '68px',
            right: '0',
            width: '80vw',
            height: '100vh',
            zIndex: '20000',
            padding: '50px 0px',
            transform: 'translateX(100vw)',
            transition: 'transform .5s ease-in',
            backdropFilter: 'blur(2px)',
            boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.1)',
        },
        ul: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '50px',
        },
        links: {
          color:  theme==='light'?'#333' : '#fff',
          fontSize: '1.1rem',
          fontWeight: '600',
          lineSpacing: '5px',
          cursor: 'pointer'
        }
    }
  return (
    <div className='side-nav' style={style.div}>
      <ul style={style.ul}>
        <li><a href="#home" style={style.links} onClick={click}>Home</a></li>
        <li><a href="#about" style={style.links} onClick={click}>About</a></li>
        <li><a href="#skills" style={style.links} onClick={click}>Skills</a></li>
        <li><a href="#portfolio" style={style.links} onClick={click}>Portfolio</a></li>
        <li><a href="#work" style={style.links} onClick={click}>Experience</a></li>
        <li><a href="#contact" style={style.links} onClick={click}>Contact</a></li>
      </ul>
    </div>
  )
}

export default SideNav
