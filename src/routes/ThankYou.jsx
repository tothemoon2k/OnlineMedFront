import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const ThankYou = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.googletagmanager.com/gtag/js?id=AW-16749261252";
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16749261252');
        };
    }, []);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h1 className="text-2xl font-bold mb-4">Thank You for Your Order!</h1>
                <p className="text-gray-700 mb-4">Your order has been successfully placed. We appreciate your business!</p>
                <p className="text-gray-700 mb-4">
                    If you have any questions, feel free to <Link to="/contact" className="text-blue-500 hover:underline">contact us</Link>.
                </p>
                <Link to="/" className="text-blue-500 hover:underline">Return to Home</Link>
            </div>
        </div>
    );
};

export default ThankYou;