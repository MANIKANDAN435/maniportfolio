  import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const About = () => {
  return (
    <div className='about ' id="about" >

      <h1 className="contacthead">Contact</h1>

      <div className="aboutsubhead" >
        <h2 className="aboutname" >Name: Mani Kandan  </h2>
        <div>
        <strong>Email:</strong>
         <a className="aboutemail" href="mailto:maniikandan825@gmail.com" rel="noreferrer">  maniikandan825@gmail.com </a>
         </div>
       <div className="aboutsocials" >   
        <a  className="social"  href="https://www.linkedin.com/in/mani-kandan19/" target="_blank" rel="noreferrer"><FaLinkedin size={20}/></a> 
        <a className="social" href=" https://github.com/MANIKANDAN435" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
       </div>
        <p className="aboutpara" >Feel free to reach out via email or connect with me on LinkedIn.  
        I'm always open to new opportunities, collaborations.</p>
      </div>
      
    </div>
  )
}

export default About  