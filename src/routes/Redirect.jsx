import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { track } from '@vercel/analytics';

const Redirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        track('click-cta');
        window.location.href = 'https://xhj91lsy6tk.typeform.com/to/ZdGdaqg4';
    }, [navigate]);

    return (
        <div>
            <Analytics />
        </div>
    );
};

export default Redirect;
