import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Helmet} from "react-helmet";

const Redirect = () => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     window.location.href = 'https://xhj91lsy6tk.typeform.com/to/hnIsFmiP';
    // }, [navigate]);

    return (
        <div>
            <Helmet>
                <title>Redirecting...</title>
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
        </div>
    );
};

export default Redirect;
