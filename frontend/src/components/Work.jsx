
import { useState } from "react";

const Work = () => {
    const style = {
        work: {
            width: '100vw',
            padding: '40px 10%'
        }, 
    }
     
   
        
      let   btn = document.querySelectorAll('button')
      let currentIndex = null
     
      for(let i = 0; i < btn.length; i++){
        
        btn[i].addEventListener('click', (e) => {
          // console.log(btn[i]);
          e.target.classList.add('active-work')
          currentIndex = i
          btn.forEach((a, index) => {
            if(index !== currentIndex){
              a.classList.remove('active-work')
            }
          })
        })
      }
   
      const [option, setOption] = useState(1);
    
    
  return (
    <div className='work' style={style.work}>
        <h1 className='underline'>Where I have worked</h1>

        <section className="works">
          <div className="left">
            <button onClick={() => {setTimeout(()=>{setOption(1)}, 800)}} className = 'active-work'>
              Khemsafe
            </button>
            <button onClick={() => {setTimeout(()=>{setOption(2)}, 800)}}>
            Jose Angels
            </button>
            <button onClick={() => {setTimeout(()=>{setOption(3)}, 800)}}>
              Odus Computer
            </button>
            <button onClick={() => {setTimeout(()=>{setOption(3)}, 800)}}>
              Odus Computer
            </button>
            
          </div>
          <div className="right">
           {option === 1 && <div className="myWork">
                  <h3>Web Dev tutor @ Khemsafe</h3>
                  <h5 style={{fontSize: '14px', marginTop: '8px'}}>April 2021 - Present</h5>
                  <div>
                      <span>🍕</span> 
                      <h4>I work in khemsafe a a web development tutor, where  I work with student with a variety of languages, platforms and frameworks such as Javascript, React, Gatsby, Next.JS, Express.JS, MongoDB, MongoDB Atlas, Heroku, Netlify
                   </h4>
                  </div>
                  
            </div>}
           {option === 2 && <div className="myWork">
                  <h3>Science Teacher @ Jose Angels College</h3>
                  <h5 style={{fontSize: '14px', marginTop: '8px'}}>2017</h5>
                  <div>
                      <span>🍕</span> 
                      <h4>I worked in khemsafe a a web development tutor, where  I work with student with a variety of languages, platforms and frameworks such as Javascript, React, Gatsby, Next.JS, Express.JS, MongoDB, MongoDB Atlas, Heroku, Netlify
                   </h4>
                  </div>
          </div>}
           {option === 3 && <div className="myWork">
                  <h3>Computer Operator @ Odus Computers</h3>
                  <h5 style={{fontSize: '14px', marginTop: '8px'}}>April 2021 - Present</h5>
                  <div>
                      <span>🍕</span> 
                      <h4>I worked in khemsafe a a web development tutor, where  I work with student with a variety of languages, platforms and frameworks such as Javascript, React, Gatsby, Next.JS, Express.JS, MongoDB, MongoDB Atlas, Heroku, Netlify
                   </h4>
                  </div>
            </div>}
           
          </div>
        </section>
    </div>
  )
}

export default Work