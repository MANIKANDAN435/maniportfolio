import './App.css'
import mlogo from './assets/mlogo.jpeg'

const Nav = () => {
  return (
    <div>
    <nav className='nav-bar'>
        <div>
            <img src={mlogo} className='mlogo' alt="mlogo" />
        </div>
        <div>
    <a  className='nav-link' href='#home' >Home</a>
    <a  className='nav-link' href='#project'  >Project</a>
    <a className='nav-link' href='#about' >About</a>
   
    </div>
     
     </nav>
     </div>
  )
}

export default Nav 