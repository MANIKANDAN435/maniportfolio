import weatherapp from './assets/weatherapp.png'
import jta from './assets/jta.jpg'
import tictactoe from './assets/tictaktoe.png'
import foodrecipe from './assets/foodrecipe.png'
import multiform from './assets/multiform.png'


const Project = () => {
  return (

    <div className='project' id='project'>  

    <h1 className='lghead' >Projects</h1>

 {/* multiform */}

      <div className='whole '>
        <div>
        <img src={multiform} alt="multiform" className='multiform secondform'/>
        </div>
     
     <div className='secondwhole'>
      <h1 className='firstphead' >Job Application Form</h1>
      <h2 className='firstpsubhead' > Multi-Step User Data Form</h2>
      <p className='firstppara'>A multi-step form built using React and Firebase to collect personal, educational, and work-related details from users.
         It includes login and signup functionality, real-time data storage with Firebase, and a final review screen before submission.
         This project demonstrates structured form flow, user authentication, and data management in a practical application setting.</p>
      <img src={multiform} alt="jobtrakingapp" className='imageforjta' />
      <div className='firstplinkdiv'>
      <a href="https://multiformproject.netlify.app" target='_blank' className='firstplink'  rel="noreferrer" >Job Application Form</a>
      </div>
      </div>
    </div>  


        {/* Job Application Tracker */}
      <div className='whole'>
       
        <div className='secondwhole'>
      <h1 className='firstphead' >Job Application Tracker</h1>
      <h2 className='firstpsubhead' >Track and manage your job applications with ease.</h2>
      <p className='firstppara'>A public job tracking web app built using React and Firebase Realtime Database via REST API.
         This app allows users to add, edit, delete, and view job applications with
        key details like job title, company name, application status, and the date applied.</p>   
      <img src={jta} alt="jobtrakingapp" className='imageforjta' />
      <div className='firstplinkdiv'>  
      <a href="https://jobtrackingapplicationmani.netlify.app" target='_blank' className='firstplink jobtrakerlink'  rel="noreferrer" >Job Application Tracker</a>
      </div>
      </div>
       <div>
          <img src={jta} alt="imageforjta" className='multiform jobtrackerimage ' />
        </div>
      </div>


        {/* foodcartapp */}
      <div className='whole'>
      <div>
        <img src={foodrecipe} alt="" className='multiform foodrecipeimage' />
      </div>

        <div className='secondwhole'>
        <h1 className='firstphead' >Food Recipe App</h1>
        <h2 className='firstpsubhead'>Search, View, and Save Your Favorite Recipes</h2>
        <p className='firstppara'>This Food Recipe App allows users to search for recipes using an external API that fetches real-time data based on the entered food item.
           Each search result leads to a detailed recipe page displaying ingredients, 
           cooking steps, and a thumbnail image. Users can easily add or remove recipes from their favorites list using built-in state management.
           The app uses React Router for smooth navigation between pages.</p>
        <img src={foodrecipe} alt="foodrecipe" className='imageforjta'/>
        <div className='firstplinkdiv '>
          <a href="https://food-receipe-details.netlify.app" target='_blank' className='firstplink foodrecipelink'  rel="noreferrer">Food Recipe</a>
        </div>
        </div>
      </div>

      {/* tictactoe */}


     <div className='whole'>
       <div className='secondwhole'>
        <h1 className='firstphead tichead' >❌⭕ Tic Tac Toe</h1>
        <h2 className='firstpsubhead'>Simple React-Based Classic Game for Two Players</h2>
        <p className='firstppara'>This Tic Tac Toe game features a 3×3 interactive grid where two players take turns placing "X" or "O".
           It includes turn-based logic, automatic win and draw detection, and real-time status updates to guide the gameplay.
           A reset button is provided to restart the game easily. 
           The app is built using React with hooks, and offers a smooth and responsive user experience.</p>
        <img src={tictactoe} alt="foodrecipe" className='imageforjta'/>
        <div className='firstplinkdiv '>
          <a href="https://tic-tac-toe-simple-project.netlify.app" target='blank' className='firstplink  tictactoe'  rel="noreferrer">Tic Tac Toe</a>
        </div>
        </div>
        <div>
          <img src={tictactoe} alt="tictactoe" className='multiform imageforjta' />
        </div>
      </div>
        
      {/* weatherapp */}

      <div className='whole'>
        <div>
          <img src={weatherapp} alt="weatherapp" className='multiform weatherimage' />
        </div>
        <div className='secondwhole' >
        <h1 className='firstphead' >Weather App</h1>
        <h2 className='firstpsubhead'>Search and View Real-Time Weather Details</h2>
        <p className='firstppara'>This Weather App allows users to search for any city and instantly view real-time weather details using a weather API. Once a city is entered, 
          the app displays temperature, location name, country code, latitude, longitude, humidity, and wind speed, all in a visually organized and responsive layout. 
          The app includes weather icons and user-friendly styling to enhance clarity and experience. 
          Built using React</p>
        <img src={weatherapp} alt="foodrecipe" className='imageforjta'/>
        <div className='firstplinkdiv '>
          <a href="https://simpleweatherappproject.netlify.app" target='_blank' className='firstplink weatherapp '  rel="noreferrer">Weather App</a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Project