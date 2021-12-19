// import logo from './logo.svg';
import './App.css';
import Switch from "react-switch";



function App() {
  return (
    <div className='container'> 
    {/* <span className='circle'></span> */}
      <div className='total' >

        {/* switch */}

        <div className='title'> <h1>Login Page</h1> </div>
        <div className='login'>
            <form>
              <label className='label'> Username: </label> 
              <input type="text" placeholder='Enter Username' className='input-fields'/> 
              
              <label className='label'> Password: </label> 
              <input type="password" placeholder='Enter Password' className='input-fields'/> 
              

              <input className="admin-input" type="checkbox" />
              <label className='admin-label'> Are you admin? </label>
              

              <input type="submit" id='submit'/> 
            </form>
            {/* <div className='not-user'>
              <p> Not user? Sign-in as admin</p>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
