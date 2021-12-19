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