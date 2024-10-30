import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

const Redirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.location.href = 'https://xhj91lsy6tk.typeform.com/to/PwQVNSXI';
    }, [navigate]);

    return (
        <div>
            <Analytics />
        </div>
    );
};

export default Redirect;
