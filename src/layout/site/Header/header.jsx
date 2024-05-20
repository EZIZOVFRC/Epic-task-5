
import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
const Header = () => {
return (
    <nav>
        <div className="full">
        <img src="https://preview.colorlib.com/theme/pato/images/icons/logo.png.webp" alt="" />
        <ul>
            <li><Link to={'/'}>HOME</Link></li>
            <li><Link to={'basket'}>Basket</Link></li>
            <li>About</li>
            <li>Rezerv</li>
            <li>Contact</li>
            <li>Join Us</li>
            <li>Galerry</li>
        </ul>

        <div className="right">
        <i class="fa-solid fa-radio"></i>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        </div>
        </div>
    </nav>
)
}

export default Header
                            