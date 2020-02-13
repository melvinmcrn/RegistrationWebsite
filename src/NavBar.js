import React from 'react';
import logo from './img/CU_logo.png';
import './NavBar.css';
import {FaUserCircle} from 'react-icons/fa';

class NavBar extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            loggedin: false,
        };
    }

    render(){
        return(
            <div className="navbar-area">
            <ul className="navbar-container">
                <a className="left navbar-logo"  href="/">
                    <li className="left"><img src={logo} className="navbar-logo-img" alt="chula logo" /></li>
                    <li className="navbar-logo-txt">
                        <p className="big-txt">CU OPEN HOUSE</p>
                        {/* <p className="small-txt">Client</p> */}
                    </li>
                </a>
                <div></div>
                <li className="right">
                    <div className="dropdown">
                        <a href="/" className="navbar-txt">
                            <FaUserCircle className="navbar-icon-profile" />
                            {/* Username */}
                            </a>
                        <div className="dropdown-content">
                            <a href="/">Login</a>
                            <a href="/">Register</a>
                        </div>
                    </div>
                </li>
                {/* <li className="right"><a className="navbar-txt" href="/"><FaBell className="navbar-icon" />Notification</a></li>
                <li className="right"><a className="navbar-txt" href="/"><FaPlusCircle className="navbar-icon" />Create Project</a></li> */}
            </ul>
            </div>
        );
    }
}

export default NavBar;