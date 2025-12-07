/**
 * Custom Hook for Polling API Calls
 */

import { useState, useEffect, useRef } from 'react';

/**
 * Hook for polling an API endpoint at regular intervals
 * @param {Function} apiFunction - The API function to call
 * @param {number} interval - Polling interval in milliseconds
 * @param {Object} options - Configuration options
 * @returns {Object} - { data, loading, error, start, stop }
 */
export const usePolling = (apiFunction, interval = 5000, options = {}) => {
    const { enabled = true, dependencies = [] } = options;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isPolling, setIsPolling] = useState(enabled);

    const intervalRef = useRef(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const result = await apiFunction();
            setData(result);
        } catch (err) {
            setError(err.response?.data?.error || err.message);
        } finally {
            setLoading(false);
        }
    };

    const start = () => {
        setIsPolling(true);
    };

    const stop = () => {
        setIsPolling(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        if (isPolling) {
            // Fetch immediately
            fetchData();

            // Set up interval
            intervalRef.current = setInterval(fetchData, interval);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPolling, interval, ...dependencies]);

    return {
        data,
        loading,
        error,
        start,
        stop,
        isPolling,
    };
};

export default usePolling;
