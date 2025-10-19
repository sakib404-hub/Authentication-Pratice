import React from 'react';
import { LuLogIn } from "react-icons/lu";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const Login = () => {
    return (
        <div className='p-10 flex flex-col items-center justify-center rounded-2xl space-y-4 bg-base-200 shadow-md'>
            <div>
                <LuLogIn className='text-2xl' />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-base font-semibold'>Sign In with Email</h3>
                <p className='text-gray-500'>Make a new Doc to Bring Your Data and Teams Togather.</p>
            </div>
            <div>
                <button className='flex items-center
                gap-2 bg-red-500 hover:bg-red-600 text-white font-medium px-5 py-2 rounded-lg shadow transition-all duration-300'>
                    <BiLogoGmail />
                    Sign Up With Gmail
                </button>
            </div>
            <div>
                <button className='flex items-center gap-2 font-medium bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded-lg shadow transition-all duration-300'>
                    <FaGithub />
                    Sign Up With Github
                </button>
            </div>
        </div >
    );
};

export default Login;