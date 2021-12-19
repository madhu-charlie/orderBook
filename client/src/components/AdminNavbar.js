import React, { Component } from 'react';
import Navitem from './Navitem';
import profilepic from '../img/profile_photo.jpg';
import '../Styles/Socialc.css'
import { NavLink } from 'react-router-dom';

class AdminNavbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':'',
            role: props.role
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    
    render() {
        return (
            <nav className="glass">
            <img src={profilepic} className="profilepic"></img>
            <h2>Admin</h2>
            <ul className="nav_items">
                {/* <NavLink item="SEARCH" to="/search" style={{textDecorationLine:"none",color:"HighlightText"}} activec={this.activeitem}>SEARCH</NavLink> */}
                <br/>
                <br/>
                <br/>
                <NavLink item="LOGOUT" to="/" style={{textDecorationLine:"none",color:"HighlightText", marginLeft: 35}} >LOGOUT</NavLink>
                <br/>
                <br/>
                <br/>
            </ul>
            </nav>
            )
        }
    }
    
    export default AdminNavbar
    