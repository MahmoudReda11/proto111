import Prism from "prismjs"
import "prismjs/themes/prism-solarizedlight.css"
import { useEffect } from "react"

export default function About(){
  useEffect(()=> {
    Prism.highlightAll();
  },[])
  const code = `
class Mahmoud_Reda {
    // I can, because I did.
    // My vast variety of skills is continuously expanding.
    constructor() {
      this.name = 'Mahmoud Reda'
      this.dayOfBirthTimestamp = 1015774800
      this.email = 'mahmoudfreelancer6@gmail.com'
    }
    workExperience() {
       return [
        { '2023-now' : 'Front-End Developer/junior at Pixel Lab' }
      ]
    }
    education() {
      return [
        { '2020-202': 'Bachelor of Engineering (inż.), Computer Science (IT)' }
      ]
    }
    skills() {
      return [ 'HTML' , 'CSS' , 'JS' , 'Tailwind' , 'React' , 'Next JS' , 'redux']
    }
  }`
  return(

     

      <section id="about" className="container m-auto">
            <div className="relative ml-60 left-Line h-full  pb-24">
                <div className="relative circ-leline pl-10 m-auto">
                <h1 className="text-gray-500 font-bold text-lg"><span className="text-white">About</span> /&gt;</h1>
                <pre className="language-javascript">
                  
        <code>{code}</code>
      </pre>
                </div>
            </div>
        </section>

  )
}
