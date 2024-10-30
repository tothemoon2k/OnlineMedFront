import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Analytics } from '@vercel/analytics/react';
import {Helmet} from "react-helmet";

const ThankYou = () => {
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center px-10 relative'>
            <Helmet>
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16749261252"></script>
                <script type="text/javascript">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-16749261252');
                `}
                </script>
                <script type="text/javascript">
                {`
                    gtag('event', 'conversion', {
                        'send_to': 'AW-16749261252/mfBOCLOu7-AZEMTj1bI-',
                        'value': 1.0,
                        'currency': 'USD'
                    });
                `}
                </script>
            </Helmet>

            <Navbar absolute={true} button={false}/>
            <div>
                <h1 className='mb-5 text-4xl md:text-5xl font-medium text-center'>Your're all set! 🎉✨</h1>
                <h2 className='mb-9 text-gray-600 text-center text-2xl md:text-3xl'>Your note should be in your email in under 15 mins</h2>

                <p className='text-gray-600 md:text-xl text-center'>If you don't receive an email within 15 mins, <br className='hidden md:block'/> please  call us at (984) 204-7128 or email us at hello@onlinemed.tech</p>
            </div>

            <Footer absolute={true}/>
            
            <Analytics />
        </div>
    );
};

export default ThankYou;