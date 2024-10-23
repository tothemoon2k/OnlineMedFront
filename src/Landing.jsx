import React from 'react';
import Navbar from './Navbar';
import bg from "../public/assets/bg.png";
import strip from "../public/assets/strip.png";
import circles from "../public/assets/circles.png";
import whiteCircle from "../public/assets/whiteCircle.png";
import standin from "../public/assets/iphone.png";
import star05 from "../public/assets/star-05.png";
import star7 from "../public/assets/star-7.png";
import cube02 from "../public/assets/cube-02.png";
import cube04 from "../public/assets/cube-04.png";
import bellicon from "../public/assets/bellicon.png";
import nickJones from "../public/assets/nickjones.png";

const typeformLink = "https://xhj91lsy6tk.typeform.com/to/hnIsFmiP";

const Landing = () => {
    return (
        <div className='w-screen h-fit relative overflow-hidden px-8 md:px-0'>
            <img className='w-screen absolute -z-10' src={bg} alt="Background pattern" />
            <Navbar />

            {/* Hero */}
            <section className='w-full flex items-center pt-8 md:pt-16'>
                <div className='md:w-[60%] md:pl-32 flex flex-col gap-3'>
                    <h1 className='text-5xl md:text-6xl font-semibold'>Get a Verifiable Doctors Note in Under 8 Mins</h1>
                    <p className='md:text-lg text-gray-500 pt-1.5 pb-4 md:pb-2.5'>Need a doctors note for work or school? We’re here to help.  Licensed healthcare providers offering real, verifiable excuse notes for workers and students. Quick, reliable, and hassle-free.</p>
                
                    <div className='flex flex-col md:flex-row gap-4 mb-1.5'>
                        <a href={typeformLink} className='flex items-center gap-3 bg-black text-white py-3 px-4 rounded-xl font-medium'>Get Started <img className='h-8' src="https://img.icons8.com/windows/50/ffffff/long-arrow-right.png" alt="Long arrow" /></a>
                        <a href='https://firebasestorage.googleapis.com/v0/b/doctorsnotev2.appspot.com/o/sfduzi?alt=media&token=801ab62c-8292-4ea8-b350-ebfd30f6fd64' className='py-3 px-2 rounded-xl font-medium flex items-center gap-1.5'><img className='h-8' src="https://img.icons8.com/material-rounded/50/play--v1.png" alt="Play" />View a Sample</a>
                    </div>

                    {/* <p className='mb-8 text-lg text-gray-500'>Questions? Reach out to us at support@excusemed.com</p> */}
                </div>

                <div className='hidden md:flex grow justify-center items-center'>
                    <img className='w-[82%] rounded-2xl' src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip" alt="Doctor with a stethoscope" />
                </div>
            </section>
            <img className='hidden md:block w-[32%] ml-24' src={strip} alt="Achievement strip" />


            {/* Advantages List Section */}
            <section className='mt-14 w-full h-fit flex flex-col md:flex-row'>
                <div className='hidden md:flex mt-10 md:mt-0 md:w-1/2 justify-center items-center relative'>
                    <img className='absolute md:w-[72%]' src={circles} alt="circles" />
                    <img className='md:w-[65%] z-10' src="https://static.vecteezy.com/system/resources/previews/036/094/750/non_2x/ai-generated-senior-doctor-black-man-arms-crossed-with-smile-pride-on-transparent-background-free-png.png" alt="" />
                </div>

                <div className='flex flex-col w-full md:w-1/2'>
                    <p className='text-[#A7C7E7] text-lg'>OUR VALUES</p>
                    <h2 className='font-semibold text-4xl'>Supporting Workers</h2>

                    <div className='md:w-5/6 pt-6 flex flex-col gap-7'>
                        <div className='flex flex-col gap-1.5'>
                            <span className='flex items-center gap-2'>
                                <img className='h-6' src={star05} alt="" />
                                <p className='font-medium'>Quick Access</p>
                            </span>

                            <p className='text-gray-500'>No more waiting rooms. Get a real doctor's excuse note within an hour during our business hours of 6 am - 10 pm ET.</p>
                        </div>

                        <div className='flex flex-col gap-1.5'>
                            <span className='flex items-center gap-2'>
                                <img className='h-6' src={cube02} alt="" />
                                <p className='font-medium'>Affordability</p>
                            </span>

                            <p className='text-gray-500'>Get verified without breaking the bank. Our excuse notes cost only $25.</p>
                        </div>

                        <div className='flex flex-col gap-1.5'>
                            <span className='flex items-center gap-2'>
                                <img className='h-6' src={cube04} alt="" />
                                <p className='font-medium'>Convenience</p>
                            </span>

                            <p className='text-gray-500'>Whether you're in bed or on the go, access our platform from anywhere, anytime.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Specific Advantage Section */}
            <section className='mt-24 md:mt-56 w-full h-fit flex flex-col md:flex-row justify-center'>
                <div className='w-full md:w-1/2 flex justify-end'>
                    <div className='md:w-[90%]'>
                        <p className='text-[#A7C7E7] text-lg'>Advantages</p>
                        <h2 className='font-semibold text-4xl'>Why Choose Uifry?</h2>

                        <div className='pt-7'>
                            <span className='flex items-center gap-4 mb-2'>
                                <img className='h-9' src={bellicon} alt="" />
                                <p className='font-medium text-2xl'>Peace of Mind</p>
                            </span>

                            <p className='text-gray-500'>Trust in the authenticity of your excuse note. Our notes are provided by licensed professionals and are 100% verifiable.</p>
                        </div>
                    </div>
                </div>

                <div className='order-first md:order-last mb-8 md:mb-0 md:w-2/5 flex justify-center items-center relative'>
                    <img className='hidden md:block absolute w-full' src={circles} alt="circles" />
                    <img className='md:w-[60%] z-10 rounded-2xl' src="https://t4.ftcdn.net/jpg/06/33/37/31/360_F_633373121_OoIiIFCExhCTdJB7pXxoOr74dsJrgIqt.jpg" alt="" />
                </div>
            </section>

            {/* Specific Advantage Section */}
            <section className='mt-24 md:mt-56 w-full h-fit flex flex-col md:flex-row justify-center'>
                <div className='md:w-2/5 flex justify-center items-center relative'>
                    <img className='hidden md:block absolute w-full' src={circles} alt="circles" />
                    <img className='md:w-[70%] z-10 rounded-2xl' src="https://www.adfinitashealth.com/wp-content/uploads/2024/01/flex-hours.png" alt="" />
                </div>

                <div className='w-full md:w-1/2 flex justify-end'>
                    <div className='md:w-[90%]'>
                        <div className='pt-7'>
                            <span className='flex items-center gap-4 mb-4'>
                                <img className='h-9' src={bellicon} alt="" />
                                <p className='font-medium text-3xl'>Get Your Valid Excuse Note Now</p>
                            </span>

                            <p className='text-gray-500 text-xl'>Dealing with illness is hard enough. Don't stress about getting an excuse note. With our service, you'll receive prompt, genuine documentation, allowing you to focus solely on your recovery.</p>
                        </div>

                        <div className='flex flex-col md:flex-row gap-4 mb-1.5 pt-9'>
                            <a href={typeformLink} className='flex items-center gap-3 bg-black text-white py-3 px-4 rounded-xl font-medium'>Start Your Note <img className='h-8' src="https://img.icons8.com/windows/50/ffffff/long-arrow-right.png" alt="Long arrow" /></a>
                            <button className='py-3 px-2 rounded-xl font-medium flex items-center gap-1.5'><img className='h-8' src="https://img.icons8.com/material-rounded/50/play--v1.png" alt="Play" />View a Sample</button>
                        </div>
                    </div>
                </div>
            </section>


            {/* About Us Section */}
            <section className='mt-24 md:mt-56 w-full h-fit'>
                <div className='w-full flex flex-col items-center'>
                    <p className='text-lg'>ABOUT US</p>
                    <h2 className='font-semibold text-4xl text-center'>Doctor's Note Solutions</h2>
                </div>

                <div className='w-full flex flex-col md:flex-row pt-10 md:pt-14'>
                    <div className='hidden md:flex w-1/2 justify-center items-center relative'>
                        <img className='absolute w-full' src={circles} alt="circles" />
                        <img className='w-[60%] z-10 rounded-2xl' src="https://png.pngtree.com/thumb_back/fw800/background/20220504/pngtree-determined-young-doctor-gazes-confidently-at-the-camera-in-a-serious-portrait-photo-image_36357256.jpg" alt="" />
                    </div>

                    <div className='md:w-1/2'>
                        <h4 className='mb-8 md:mb-10 text-3xl md:w-3/5'>Sick note requirements strain the healthcare system and add stress to sick employees and students. We offer a trusted and convenient way to alleviate this.</h4>
                        <p className='text-gray-500 text-lg md:w-3/5'>“This service isn't just about convenience; it's about understanding, compassion, and making the recovery journey a little easier for everyone involved.”</p>

                        <img className='mt-6 h-8 mb-5' src={nickJones} alt="" />

                        <p className='font-medium text-lg'>Nick Jones</p>
                    </div>
                </div>
            </section>

            <section className='mt-24 md:mt-40 mx-auto md:w-4/5 py-40 px-8 md:px-20 bg-black flex flex-col rounded-xl relative overflow-hidden'>
                <h3 className='text-white text-4xl font-semibold'>Ready To Get Your Note?</h3>
                <p className='mt-4 mb-5 md:mt-2 md:mb-3.5 text-lg text-gray-400'>Our service ensures you receive a legitimate and verifiable note in minutes, so you can focus on your recovery without any added stress.</p>
                <a href={typeformLink} className='z-10 w-fit bg-white py-3 px-5 rounded-xl font-medium'>Get Your Doctors Note</a>

                <img className='hidden md:block absolute -top-[60%] -right-[20%] h-[120%] object-cover' src={whiteCircle} alt="White circle designs" />
                <img className='hidden md:block absolute -bottom-[75%] -left-[20%] h-[120%] object-cover' src={whiteCircle} alt="White circle designs" />
                <img className='absolute h-14 left-[55%] top-[10%] rotate-[10deg] object-cover' src={star7} alt="White star icon" />
                <img className='absolute h-10 right-[62%] bottom-[15%] rotate-[-25deg] object-cover' src={star7} alt="Whit star icon" />
            </section>

            <footer className="mt-32 mb-8 w-[85%] mx-auto bg-white rounded-lg shadow">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
                </div>
            </footer>

        </div>
    );
};

export default Landing;