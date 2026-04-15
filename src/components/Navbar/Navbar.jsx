import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './Navbar.css';
import logo2 from '../../assets/sad.png';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 500 ? setSticky(true) : setSticky(false);
        });
    }, []);

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
          <img src={logo2} alt='' className='logo2' />
            <ul>
                <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='Program' smooth={true} offset={0} duration={500}>Program</Link></li>
                <li><Link to='about' smooth={true} offset={0} duration={500}>About</Link></li>
                <li><Link to='campus' smooth={true} offset={0} duration={500}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={0} duration={500}>Testimonials</Link></li>
            </ul>
            <Link to='contact' smooth={true} offset={0} duration={500} className='btn'>Contact us</Link>
            
        </nav>
    );
}

export default Navbar;
