/**
 * Custom Hook for Form Submissions with Async Actions
 */

import { useState } from 'react';
import toast from 'react-hot-toast';

/**
 * Hook for handling form submissions with loading states
 * @param {Function} submitFunction - The async function to call on submit
 * @param {Object} options - Configuration options
 * @returns {Object} - { loading, error, handleSubmit }
 */
export const useAsyncAction = (submitFunction, options = {}) => {
    const {
        onSuccess,
        onError,
        successMessage = 'Action completed successfully!',
        showSuccessToast = true,
    } = options;

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (...args) => {
        try {
            setLoading(true);
            setError(null);

            const result = await submitFunction(...args);

            if (showSuccessToast) {
                toast.success(successMessage);
            }

            if (onSuccess) {
                onSuccess(result);
            }

            return { success: true, data: result };
        } catch (err) {
            const errorMessage = err.response?.data?.error || err.message || 'Action failed';
            setError(errorMessage);

            if (onError) {
                onError(errorMessage);
            }

            return { success: false, error: errorMessage };
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        handleSubmit,
    };
};

export default useAsyncAction;
