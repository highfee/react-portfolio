import { useSelector } from "react-redux";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Separator from "./components/Separator";
import SideNav from "./components/SideNav";
import Sides from "./components/Sides";
import Skills from "./components/Skills";
// import Test from "./components/Test";
import Toggle from "./components/Toggle";
import Work from "./components/Work";
import { ToastContainer } from 'react-toastify'



function App() {
 
  const theme = useSelector(state => state.theme.value)
  



  return (
    <div className="body"  data-theme={theme}>
      <div className="container">
        
        <Toggle />
        <Header />
        <div className='section' id="home"><Home /></div>
        <Sides />
        {theme === 'dark' && <Separator />}
        <div className='section' id="about"><About /></div>
        {theme === 'dark' && <Separator />}
        <div className='section' id="skills"><Skills /></div>
        {theme === 'dark' && <Separator />}
        <div className='section' id="portfolio"><Portfolio /></div>
        {theme === 'dark' && <Separator />}
        <div className='section' id="work"><Work /></div>
        {theme === 'dark' && <Separator />}
        <div className='section' id="contact"><Contact /></div>
        <SideNav />
        <ToastContainer />
        {/* <div style={{height: '100vh'}}></div> */}
      </div>
    </div>
  );
}

export default App;
