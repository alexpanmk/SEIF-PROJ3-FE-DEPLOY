import { useState, useEffect } from 'react';

const useQuoteAPI = () => {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        // Fetch quote from API and set it in state
        const fetchQuote = async () => {
            try {
                const response = await fetch('https://api.example.com/quote');
                const data = await response.json();
                setQuote(data.quote);
            } catch (error) {
                console.error('Error fetching quote:', error);
            }
        };

        fetchQuote();
    }, []);

    return quote;
};

export default useQuoteAPI;
