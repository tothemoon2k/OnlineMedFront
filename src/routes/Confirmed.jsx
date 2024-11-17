import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Analytics } from '@vercel/analytics/react';

const Confirmed = () => {
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center px-10 relative'>
            <Helmet>
                <script type="text/javascript">
                {`
                    gtag('event', 'conversion', {
                        'send_to': 'AW-16749261252/mfBOCLOu7-AZEMTj1bI-',
                        'value': 1.0,
                        'currency': 'USD'
                    });
                `}
                </script>
                <script type="text/javascript">
                {`
                    window.__lc = window.__lc || {};
                    window.__lc.license = 18883233;
                    window.__lc.integration_name = "manual_onboarding";
                    window.__lc.product_name = "livechat";
                    (function(n,t,c){
                        function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}
                        var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},
                        once:function(){i(["once",c.call(arguments)])},
                        off:function(){i(["off",c.call(arguments)])},
                        get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},
                        call:function(){i(["call",c.call(arguments)])},
                        init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};
                        !n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e
                    }(window,document,[].slice));
                `}
                </script>
                <noscript>
                    <a href="https://www.livechat.com/chat-with/18883233/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a>
                </noscript>
            </Helmet>

            <Navbar absolute={true} button={false}/>
            <div>
                <h1 className='mb-5 text-4xl md:text-5xl font-medium text-center'>Your're all set! 🎉✨</h1>
                <h2 className='mb-9 text-gray-600 text-center text-2xl md:text-3xl'>Your note should be in your email in under 5 mins</h2>

                <p className='text-gray-600 md:text-xl text-center'>If you don't receive an email within 10 mins, <br className='hidden md:block'/> please contact us at hello@onlinemed.tech</p>
            </div>

            <Footer absolute={true}/>
            
            <Analytics />
        </div>
    );
};

export default Confirmed;