/**
 * Custom Hook for API Calls with Loading and Error States
 */

import { useState, useCallback } from 'react';

/**
 * Hook for handling async API calls with loading/error states
 * @param {Function} apiFunction - The API function to call
 * @param {Object} options - Configuration options
 * @returns {Object} - { data, loading, error, execute, reset }
 */
export const useApi = (apiFunction, options = {}) => {
    const { onSuccess, onError, initialData = null } = options;

    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const execute = useCallback(
        async (...args) => {
            try {
                setLoading(true);
                setError(null);

                const result = await apiFunction(...args);
                setData(result);

                if (onSuccess) {
                    onSuccess(result);
                }

                return { success: true, data: result };
            } catch (err) {
                const errorMessage = err.response?.data?.error || err.message || 'An error occurred';
                setError(errorMessage);

                if (onError) {
                    onError(errorMessage);
                }

                return { success: false, error: errorMessage };
            } finally {
                setLoading(false);
            }
        },
        [apiFunction, onSuccess, onError]
    );

    const reset = useCallback(() => {
        setData(initialData);
        setLoading(false);
        setError(null);
    }, [initialData]);

    return {
        data,
        loading,
        error,
        execute,
        reset,
    };
};

/**
 * Hook for immediate API call on mount
 * @param {Function} apiFunction - The API function to call
 * @param {Array} deps - Dependencies array for re-fetching
 * @param {Object} options - Configuration options
 */
export const useFetch = (apiFunction, deps = [], options = {}) => {
    const { skip = false } = options;
    const hook = useApi(apiFunction, options);

    React.useEffect(() => {
        if (!skip) {
            hook.execute();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    return hook;
};

export default useApi;
