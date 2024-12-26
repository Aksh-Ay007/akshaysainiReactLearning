import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom'
import useOnlineStatus from './utils/useOnlineStatus'

function Header() {

    // let auth='login'

    const onlineStatus=useOnlineStatus()

    let[autho,setAutho]=useState('login')
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://imgs.search.brave.com/hkG-MNTaxFwfJGO7_WouUVHTfPzCYqLO1xWUnzur-_w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly9zXy0ycWdSclBa/bldVcFdJaDROZUl1/OTVVQ0U9LzB4MDo5/OTl4OTk5L2ZpdC1p/bi81MDB4NTAwLzk5/ZGVzaWducy1jb250/ZXN0cy1hdHRhY2ht/ZW50cy8xMTgvMTE4/NjEyL2F0dGFjaG1l/bnRfMTE4NjEyOTQz.jpeg"
                    alt="Logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                     <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact us</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                    <li>OnlineStatus:{onlineStatus?'✅':'❌'}</li>

                 
                    <li onClick={()=>{autho==='login'?setAutho('logout'):setAutho('login')}}>{autho}</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
