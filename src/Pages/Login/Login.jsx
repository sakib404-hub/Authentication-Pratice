import React, { useState } from 'react';
import { LuLogIn } from "react-icons/lu";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebase.config';
import NoUser from '../NoUser/NoUser';
import UserFound from './UserFound/UserFound';
import { FaSignOutAlt } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

const Login = () => {

    const [user, setUser] = useState(null);
    const [provider, setProvider] = useState('');

    const handleGoogleSignInButtonClick = () => {
        // console.log('The Button is Clicked!');
        signInWithPopup(auth, googleAuthProvider)
            .then((result) => {
                setProvider('google')
                // console.log(result.user);
                setUser(result.user);
                toast('Successfully Signed In!');
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(() => {
                toast("SuccessFully Signed Out!");
                setUser(null);
                setProvider('');
            })
            .catch((error => {
                console.log(error);
            }))

    }

    const handleGithubButtonSignOnClick = () => {
        signInWithPopup(auth, githubAuthProvider)
            .then((result) => {
                setProvider('github');
                setUser(result.user)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleGithubButtonSignOutClick = () => {
        signOut(auth)
            .then(() => {
                setProvider('');
                setUser(null);
            })
            .catch((error) => {
                console.log(error);
            })
    }
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
                {
                    (user && provider === 'google') ? (
                        <button className='flex items-center
                gap-2 bg-red-500 hover:bg-red-600 text-white font-medium px-5 py-2 rounded-lg shadow transition-all duration-300'
                            onClick={handleGoogleSignOut}>
                            <FaSignOutAlt />
                            Sign Out
                        </button>
                    ) : <button className='flex items-center
                gap-2 bg-red-500 hover:bg-red-600 text-white font-medium px-5 py-2 rounded-lg shadow transition-all duration-300'
                        onClick={handleGoogleSignInButtonClick}>
                        <BiLogoGmail />
                        Sign Up With Gmail
                    </button>
                }
            </div>
            <div>
                {
                    (user && provider === 'github') ? (<button className='flex items-center gap-2 font-medium bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded-lg shadow transition-all duration-300'
                        onClick={handleGithubButtonSignOutClick}>
                        <FaSignOutAlt />
                        Sign Out
                    </button>) : (<button className='flex items-center gap-2 font-medium bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded-lg shadow transition-all duration-300'
                        onClick={handleGithubButtonSignOnClick}>
                        <FaGithub />
                        Sign Up With Github
                    </button>)
                }
            </div>
            {
                user ? (
                    <UserFound user={user}></UserFound>
                ) : (
                    <NoUser></NoUser>
                )
            }
            <ToastContainer position="top-right" />
        </div >
    );
};

export default Login;