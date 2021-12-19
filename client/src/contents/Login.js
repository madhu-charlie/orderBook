import { Switch } from '@material-ui/core';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import '../Styles/Loginc.css'

function Login({ history }) {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [role, setRole] = useState("customer");
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const reRoute = () => {
        if(role === "customer") {
            history.push('/customer')
        }
        else{
            history.push('/admin')
        }
        // history.push('/registration')
    }
    return (
        <div>
            <nav>
                <section class="login">
                    <form action="javascript:void(0);" id="form">
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <Switch {...label} color="secondary" value={role} onClick={() => setRole("admin")}/>Admin
                        </div>
                        <label for="username" value={username} onChange={event => setusername(event.target.value)}>
                            Username
                            <input id="username" type="text"></input>
                        </label>
                        <label for="password" value={password} onChange={event => setpassword(event.target.value)}>
                            Password
                            <input id="password" type="password"></input>
                        </label>
                        <button type="submit" onClick={() => { reRoute() }}>Login</button>
                    </form>
                </section>
            </nav>
        </div>
    );
}
export default withRouter(Login)
// import './App.css';
// import '../Styles/loginPage.css'


// function Login() {
//     return (
//         <nav>
//             <section class="login">
//                 {/* <span className='circle'></span> */}
//                 <div className='total' style={{marginLeft: '50%'}}>
//                     {/* switch */}
//                     <div className='title'> <h1>Login Page</h1> </div>
//                     <div className='login'>
//                         <form>
//                             <label className='label'> Username: </label>
//                             <input type="text" placeholder='Enter Username' className='input-fields' />
//                             <label className='label'> Password: </label>
//                             <input type="password" placeholder='Enter Password' className='input-fields' />
//                             <input className="admin-input" type="checkbox" />
//                             <label className='admin-label'> Are you admin? </label>
//                             <input type="submit" id='submit' />
//                         </form>
//                         {/* <div className='not-user'>
//               <p> Not user? Sign-in as admin</p>
//             </div> */}
//                     </div>
//                 </div></section>
//         </nav>
//     );
// }

// export default Login;