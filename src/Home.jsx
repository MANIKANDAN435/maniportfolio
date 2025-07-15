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
      <FaChevronDown  className='icons' size={40}  />
    </div>
        {/* sm screen */}
        <div className="smallhome" >
          <h1 className="smallhead" >IM Mani</h1>
          <h2 className="smallsubhead" >React Developer</h2>
          <div className="icondiv">
              <FaChevronDown  className='smallicons' size={30}  />
              </div>
        </div>
    </div>
  )
}

export default Home  