import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Create the first script element
        const script1 = document.createElement('script');
        script1.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16749261252';
        script1.async = true;

        // Create the second script element
        const script2 = document.createElement('script');
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16749261252');
        `;

        // Append both scripts to the document head
        document.head.appendChild(script1);
        document.head.appendChild(script2);

        // Redirect the user to the Typeform link
        window.location.href = 'https://xhj91lsy6tk.typeform.com/to/hnIsFmiP';

        // Cleanup function to remove the scripts when the component is unmounted
        return () => {
            document.head.removeChild(script1);
            document.head.removeChild(script2);
        };
    }, [navigate]);

    return null;
};

export default Redirect;
