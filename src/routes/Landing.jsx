import React from 'react';
import { Helmet } from 'react-helmet';
import { Analytics, track } from '@vercel/analytics/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bg from "../../public/assets/bg.webp";
import strip from "../../public/assets/strip.png";
import circles from "../../public/assets/circles.png";
import whiteCircle from "../../public/assets/whiteCircle.png";
import star05 from "../../public/assets/star-05.png";
import star7 from "../../public/assets/star-7.png";
import cube02 from "../../public/assets/cube-02.png";
import cube04 from "../../public/assets/cube-04.png";
import bellicon from "../../public/assets/bellicon.png";
import doc1 from "../../public/assets/doc1.webp";
import doc2 from "../../public/assets/doc2.webp";
import doc3 from "../../public/assets/doc3.webp";
import doc4 from "../../public/assets/doc4.webp";
import doc5 from "../../public/assets/doc5.webp";
import nickJones from "../../public/assets/nickjones.png";
import doctorsTalking from "../../public/assets/doctorsTalking.webp";
import { handleCtaClick } from '../handleCtaClick';
import { useState } from 'react';

const Landing = () => {
    const [showingBanner, setShowingBanner] = useState(true);

    const handleApplyBtn = () => {
        track('apply_click');

        window.location.href = "mailto:hiring@onlinemed.tech?subject=Physician Telehealth Opportunities - OnlineMed";
    }

    const handelDismissBtn = () => {
        setShowingBanner(false);
    }

    <Helmet>
6       <link rel="preload" as="image" href={bg} />
7  </Helmet>
    return (
        <div className='w-screen h-fit relative overflow-hidden px-8 md:px-0'>
            <img className='w-screen absolute -z-10' src={bg} alt="Background pattern" />

            {showingBanner &&
                <div className="-ml-8 w-screen relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
                    <div className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
                        <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30" ></div>
                    </div>
                    <div className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
                        <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30" ></div>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <p className="text-sm/6 text-gray-900">
                        <strong className="font-medium">Jobs</strong><svg viewBox="0 0 2 2" className="mx-2 inline size-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>Are you a physician? Partner with us to provide flexible telehealth care.
                        </p>
                        <button onClick={handleApplyBtn} className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Apply<span aria-hidden="true">&rarr;</span></button>
                    </div>
                    <div className="flex flex-1 justify-end">
                        <button onClick={handelDismissBtn} type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                            <span className="sr-only">Dismiss</span>
                            <svg className="size-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            }

            <Navbar />

            {/* Hero */}
            <section className='w-full flex items-center pt-8 md:pt-16'>
                <div className='md:w-[60%] md:pl-32 flex flex-col gap-3'>
                    <h1 className='text-5xl md:text-6xl font-medium'>Get a Verifiable Doctors Note in Under 8 Mins</h1>
                    <p className='md:text-lg text-gray-500 pt-1.5 pb-4 md:pb-2.5'>Need a doctors note for work or school? We’re here to help.  Licensed healthcare providers offering real, verifiable excuse notes for workers and students. Quick, reliable, and hassle-free.</p>
                
                    <div className='flex flex-col md:flex-row gap-4 mb-1.5'>
                        <button onClick={()=>handleCtaClick("landing-hero")} className='flex items-center gap-3 bg-black text-white py-3 px-4 rounded-xl font-medium'>Get Started <img className='h-8' loading="lazy" src="https://img.icons8.com/windows/50/ffffff/long-arrow-right.png" alt="Long arrow" /></button>
                        <a href='https://firebasestorage.googleapis.com/v0/b/doctorsnotev2.appspot.com/o/z52n4k?alt=media&token=5517dd91-2805-4287-b727-99c1cf5a084d' className='py-3 px-2 rounded-xl font-medium flex items-center gap-1.5'><img className='h-8' src="https://img.icons8.com/material-rounded/50/play--v1.png" alt="Play" />View a Sample</a>
                    </div>

                </div>

                <div className='hidden md:flex grow justify-center items-center'>
                    <img className='w-[82%] rounded-2xl' src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip" alt="Doctor with a stethoscope" />
                </div>
            </section>
            <img className='hidden md:block w-[32%] ml-24' src={strip} alt="Achievement strip" />


            {/* Advantages List Section */}
            <section className='mt-14 w-full h-fit flex flex-col md:flex-row'>
                <div className='hidden md:flex mt-10 md:mt-0 md:w-1/2 justify-center items-center relative'>
                    <img loading="lazy" className='absolute md:w-[72%]' src={circles} alt="circles" />
                    <img loading="lazy" className='md:w-[65%] z-10' src="https://static.vecteezy.com/system/resources/previews/036/094/750/non_2x/ai-generated-senior-doctor-black-man-arms-crossed-with-smile-pride-on-transparent-background-free-png.png" alt="" />
                </div>

                <div className='flex flex-col w-full md:w-1/2'>
                    <p className='text-[#A7C7E7] text-lg'>OUR VALUES</p>
                    <h2 className='font-medium text-4xl'>Supporting Workers</h2>

                    <div className='md:w-5/6 pt-6 flex flex-col gap-7'>
                        <div className='flex flex-col gap-1.5'>
                            <span className='flex items-center gap-2'>
                                <img loading="lazy" className='h-6' src={star05} alt="" />
                                <p className='font-medium'>Quick Access</p>
                            </span>

                            <p className='text-gray-500'>No more waiting rooms. Get a real doctor's excuse note within an hour during our business hours of 6 am - 10 pm ET.</p>
                        </div>

                        <div className='flex flex-col gap-1.5'>
                            <span className='flex items-center gap-2'>
                                <img loading="lazy" className='h-6' src={cube02} alt="" />
                                <p className='font-medium'>Affordability</p>
                            </span>

                            <p className='text-gray-500'>Get verified without breaking the bank. Our excuse notes cost only $25.</p>
                        </div>

                        <div className='flex flex-col gap-1.5'>
                            <span className='flex items-center gap-2'>
                                <img loading="lazy" className='h-6' src={cube04} alt="" />
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
                        <h2 className='font-medium text-4xl'>Why Choose OnlineMed?</h2>

                        <div className='pt-7'>
                            <span className='flex items-center gap-4 mb-2'>
                                <img loading="lazy" className='h-9' src={bellicon} alt="" />
                                <p className='font-medium text-2xl'>Peace of Mind</p>
                            </span>

                            <p className='text-gray-500'>Trust in the authenticity of your excuse note. Our notes are provided by licensed professionals and are 100% verifiable.</p>
                        </div>
                    </div>
                </div>

                <div className='order-first md:order-last mb-8 md:mb-0 md:w-2/5 flex justify-center items-center relative'>
                    <img loading="lazy" className='hidden md:block absolute w-full' src={circles} alt="circles" />
                    <img loading="lazy" className='md:w-[60%] z-10 rounded-2xl' src="https://t4.ftcdn.net/jpg/06/33/37/31/360_F_633373121_OoIiIFCExhCTdJB7pXxoOr74dsJrgIqt.jpg" alt="" />
                </div>
            </section>

            {/* Specific Advantage Section */}
            <section className='mt-24 md:mt-56 w-full h-fit flex flex-col md:flex-row justify-center'>
                <div className='md:w-2/5 flex justify-center items-center relative'>
                    <img loading="lazy" className='hidden md:block absolute w-full' src={circles} alt="circles" />
                    <img loading="lazy" className='md:w-[70%] z-10 rounded-2xl' src={doctorsTalking} alt="" />
                </div>

                <div className='w-full md:w-1/2 flex justify-end'>
                    <div className='md:w-[90%]'>
                        <div className='pt-7'>
                            <span className='flex items-center gap-4 mb-4'>
                                <img loading="lazy" className='h-9' src={bellicon} alt="" />
                                <p className='font-medium text-3xl'>Get Your Valid Excuse Note Now</p>
                            </span>

                            <p className='text-gray-500 text-xl'>Dealing with illness is hard enough. Don't stress about getting an excuse note. With our service, you'll receive prompt, genuine documentation, allowing you to focus solely on your recovery.</p>
                        </div>

                        <div className='flex flex-col md:flex-row gap-4 mb-1.5 pt-9'>
                            <button onClick={()=>handleCtaClick("landing-mid-page")} className='flex items-center gap-3 bg-black text-white py-3 px-4 rounded-xl font-medium'>Start Your Note <img className='h-8' src="https://img.icons8.com/windows/50/ffffff/long-arrow-right.png" alt="Long arrow" /></button>
                            <a href='https://firebasestorage.googleapis.com/v0/b/doctorsnotev2.appspot.com/o/z52n4k?alt=media&token=5517dd91-2805-4287-b727-99c1cf5a084d' className='py-3 px-2 rounded-xl font-medium flex items-center gap-1.5'><img className='h-8' src="https://img.icons8.com/material-rounded/50/play--v1.png" alt="Play" />View a Sample</a>
                        </div>
                    </div>
                </div>
            </section>


            {/* About Us Section */}
            <section className='mt-24 md:mt-56 w-full h-fit'>
                <div className='w-full flex flex-col items-center'>
                    <p className='text-lg'>About Us</p>
                    <h2 className='font-medium text-4xl text-center'>Meet the OnlineMed Team</h2>
                </div>

                <div className='mt-14 w-full h-fit py-2 md:py-2 rounded-xl grid grid-cols-2 gap-4 lg:grid-cols-3 md:gap-6 md:px-6 justify-center justify-items-center'>
                    <div className='h-fit w-fit shrink-0 bg-[#f7f3e7] relative rounded-2xl overflow-hidden hover:scale-105 transition-all'>
                        <img loading="lazy" className='h-48 w-full md:h-80 md:w-72 object-cover' src={doc1} alt="" />
                        <div className='absolute bottom-2 py-1.5 px-4 bg-white bg-opacity-85 translate-x-1/2 right-1/2 w-[90%] rounded-xl'>
                            <p className='font-medium text-sm md:text-lg'>Dr. Kelvin Jackson, MD</p>
                            <p className='hidden md:block text-gray-600 text-sm md:text-base'>Medical Director</p>
                        </div>
                    </div>

                    <div className='h-fit w-fit shrink-0 bg-[#f7f3e7] relative rounded-2xl overflow-hidden hover:scale-105 transition-all'>
                        <img loading="lazy" className='h-48 w-full md:h-80 md:w-72 object-cover' src={doc2} alt="" />
                        <div className='absolute bottom-2 py-1.5 px-4 bg-white bg-opacity-85 translate-x-1/2 right-1/2 w-[90%] rounded-xl'>
                            <p className='font-medium text-sm md:text-lg'>Dr. Rajesh
                            Kumar, MD</p>
                            <p className='hidden md:block text-gray-600'>Occupational Health Physician</p>
                        </div>
                    </div>

                    <div className='h-fit w-fit shrink-0 bg-[#f7f3e7] relative rounded-2xl overflow-hidden hover:scale-105 transition-all'>
                        <img loading="lazy" className='h-48 w-full md:h-80 md:w-72 object-cover' src={doc3} alt="" />
                        <div className='absolute bottom-2 py-1.5 px-4 bg-white bg-opacity-85 translate-x-1/2 right-1/2 w-[90%] rounded-xl'>
                            <p className='font-medium text-sm md:text-lg'>Dr. Lucy Crawford, DO</p>
                            <p className='hidden md:block text-gray-600'>Family Medicine Physician</p>
                        </div>
                    </div>

                    <div className='h-fit w-fit shrink-0 bg-[#f7f3e7] relative rounded-2xl overflow-hidden hover:scale-105 transition-all'>
                        <img loading="lazy" className='h-48 w-full md:h-80 md:w-72 object-cover' src={doc4} alt="" />
                        <div className='absolute bottom-2 py-1.5 px-4 bg-white bg-opacity-85 translate-x-1/2 right-1/2 w-[90%] rounded-xl'>
                            <p className='font-medium text-sm md:text-lg'>Dr. Elena Rodriguez, MD</p>
                            <p className='hidden md:block text-gray-600'>Urgent Care Specialist</p>
                        </div>
                    </div>

                    <div className='h-fit w-fit shrink-0 bg-[#f7f3e7] relative rounded-2xl overflow-hidden hover:scale-105 transition-all'>
                        <img loading="lazy" className='h-48 w-full md:h-80 md:w-72 object-cover' src={doc5} alt="" />
                        <div className='absolute bottom-2 py-1.5 px-4 bg-white bg-opacity-85 translate-x-1/2 right-1/2 w-[90%] rounded-xl'>
                            <p className='font-medium text-sm md:text-lg'>Jacob Santana</p>
                            <p className='hidden md:block text-gray-600'>Customer Success Director</p>
                        </div>
                    </div>
                </div>

                <a href='/team' className='mt-12 mx-auto w-fit flex items-center gap-3 bg-black text-white py-3 px-4 rounded-xl font-medium'>Our Team <img className='h-8' src="https://img.icons8.com/windows/50/ffffff/long-arrow-right.png" alt="Long arrow" /></a>
            </section>

            <section className='mt-24 md:mt-56 w-full h-fit'>
                <div className='w-full flex flex-col items-center'>
                    <p className='text-lg'>ABOUT US</p>
                    <h2 className='font-medium text-4xl text-center'>Doctor's Note Solutions</h2>
                </div>

                <div className='w-full flex flex-col md:flex-row pt-10 md:pt-14'>
                    <div className='hidden md:flex w-1/2 justify-center items-center relative'>
                        <img loading="lazy" className='absolute w-full' src={circles} alt="circles" />
                        <img loading="lazy" className='w-[60%] z-10 rounded-2xl' src="https://png.pngtree.com/thumb_back/fw800/background/20220504/pngtree-determined-young-doctor-gazes-confidently-at-the-camera-in-a-serious-portrait-photo-image_36357256.jpg" alt="" />
                    </div>

                    <div className='md:w-1/2'>
                        <h4 className='mb-8 md:mb-10 text-3xl md:w-3/5'>Sick note requirements strain the healthcare system and add stress to sick employees and students. We offer a trusted and convenient way to alleviate this.</h4>
                        <p className='text-gray-500 text-lg md:w-3/5'>“This service isn't just about convenience; it's about understanding, compassion, and making the recovery journey a little easier for everyone involved.”</p>

                        <img loading="lazy" className='mt-6 h-8 mb-5' src={nickJones} alt="" />

                        <p className='font-medium text-lg'>Nick Jones</p>
                    </div>
                </div>
            </section>

            <section className='mt-24 md:mt-36 mx-auto md:w-4/5 py-40 px-8 md:px-20 bg-black flex flex-col rounded-xl relative overflow-hidden'>
                <h3 className='text-white text-4xl font-medium'>Ready To Get Your Note?</h3>
                <p className='mt-4 mb-5 md:mt-3.5 md:mb-4.5 text-lg text-gray-400 md:w-4/6'>Our service ensures you receive a real, verifiable doctor's note in minutes, so you can focus on your recovery without any added stress.</p>
                <button onClick={()=>handleCtaClick("landing-footer")} className='z-10 w-fit bg-white py-3 px-5 rounded-xl font-medium'>Get Your Doctors Note</button>

                <img loading="lazy" className='hidden md:block absolute -top-[60%] -right-[20%] h-[120%] object-cover' src={whiteCircle} alt="White circle designs" />
                <img loading="lazy" className='hidden md:block absolute -bottom-[75%] -left-[20%] h-[120%] object-cover' src={whiteCircle} alt="White circle designs" />
                <img loading="lazy" className='absolute h-14 left-[55%] top-[10%] rotate-[10deg] object-cover' src={star7} alt="White star icon" />
                <img loading="lazy" className='absolute h-10 right-[62%] bottom-[15%] rotate-[-25deg] object-cover' src={star7} alt="Whit star icon" />
            </section>

            <Footer/>

            <Analytics />
        </div>
    );
};

export default Landing;