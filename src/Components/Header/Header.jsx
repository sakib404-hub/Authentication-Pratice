import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    const links = <div className='flex items-center justify-center gap-4'>
        <NavLink to='/'
            className='nav-link px-4 py-2'>Home</NavLink>
        <NavLink to='aboutus'
            className='nav-link px-4 py-2'>About US</NavLink>
        <NavLink to='contact'
            className='nav-link px-4 py-2'>Contact</NavLink>
        <NavLink to='login'
            className='nav-link px-4 py-2'>Login</NavLink>
    </div>
    return (
        <div className='p-6 px-10 bg-base-200 shadow-md flex items-center justify-between'>
            <div>
                <img src="https://hamiltonleigh.com/wp-content/uploads/2021/09/si-advanced-authentication-feature.jpeg"
                    alt=""
                    className='h-10 rounded-sm' />
            </div>
            {
                links
            }
        </div>
    );
};

export default Header;