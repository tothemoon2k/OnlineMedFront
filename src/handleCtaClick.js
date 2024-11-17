import { Analytics, track } from '@vercel/analytics/react';

export const handleCtaClick = (location) => {
    track('cta_click', {
        location: location,
    });

    window.location.href = 'https://xhj91lsy6tk.typeform.com/to/DUnRBKg7';
}