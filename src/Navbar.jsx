import React from 'react';

const typeformLink = "https://xhj91lsy6tk.typeform.com/to/hnIsFmiP";

const Navbar = () => {
    return (
        <nav className='w-full h-10 flex items-center justify-between px-6 md:px-32 py-10'>
            <div className='flex gap-6 items-center'>
                <a className='text-3xl font-semibold' href="">OnlineMed</a>

                <div className='flex items-center gap-3 font-medium text-lg'>
                    <a className='' href="">Home</a>
                    <a className='' href="">FAQ</a>
                </div>
            </div>

            <a href={typeformLink} className='hidden md:block bg-black text-white py-3 px-5 rounded-xl font-medium'>Get Your Doctors Note</a>
        </nav>
    );
};

export default Navbar;