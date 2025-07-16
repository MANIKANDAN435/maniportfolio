import { FaChevronDown } from "react-icons/fa";
import bgimage from './assets/mani.jpg'
const Home = () => {
  return (
    <div className="fullhome" id="home">
      {/* md and large screen */}
    <div  className='imagecontainer' >
      
      <img src={bgimage} alt="bgimage" className='bgimage' />
      <div className='overlay' ></div>
      <h1 className='imagetext headertext'  >im mani </h1>
      <h1 className='imagetext  childtext' >React developer</h1>
      <a href="#project">
      <FaChevronDown  className='icons' size={40}  />
      </a>
    </div>
        {/* sm screen */}
        <div className="smallhome" >
          <h1 className="smallhead" >IM Mani</h1>
          <h2 className="smallsubhead" >React Developer</h2>
          <div className="icondiv">
              <a href="#project">
              <FaChevronDown  className='smallicons' size={30}  />
              </a>
              </div>
        </div>
    </div>
  )
}

export default Home  