import React from 'react';
import { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword } from '../firebase/auth';
import { useAuth } from '../contexts/authContext';

const Login = () => {
    const userLoggedIn = useAuth();
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        if(!isSigningIn) {
            setIsSigningIn(true);
            await doSignInWithEmailAndPassword(email, password);
            console.log(userLoggedIn);
        }
    };

    return (
        <div className='w-screen h-screen flex'>
            {userLoggedIn && (<Navigate to={'/docportal'} replace={true} />)}
            <div className='w-1/2 h-full flex flex-col justify-center items-center'>
                <div className='w-1/2 flex flex-col'>
                    <h1 className='text-4xl font-medium mb-12'>Welcome back <br />Doc!</h1>

                    <div className='mb-10 w-full'>
                        <div className="mb-5 max-w-sm">
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" 
                                placeholder="you@site.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="max-w-sm">
                            <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <button 
                        className='w-fit self-end flex items-center gap-3 bg-black text-white py-3 px-4 rounded-xl font-medium'
                        onClick={handleLogin}
                    >
                        Login <img className='h-8' src="https://img.icons8.com/windows/50/ffffff/long-arrow-right.png" alt="Long arrow" />
                    </button>
                </div>
            </div>

            <div className='w-1/2 h-full bg-blue-500'>

            </div>
        </div>
    );
};

export default Login;