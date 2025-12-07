import React from 'react';
import { X } from 'lucide-react';
import GlowButton from '../ui/GlowButton';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message, confirmText = 'Confirm', cancelText = 'Cancel', loading = false, type = 'warning' }) => {
    if (!isOpen) return null;

    const typeColors = {
        warning: 'border-yellow-500',
        danger: 'border-red-500',
        success: 'border-green-500',
        info: 'border-primary-violet',
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className={`glass-card max-w-md w-full p-6 border-2 ${typeColors[type]} fade-in-up`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-text-light">{title}</h3>
                    <button
                        onClick={onClose}
                        disabled={loading}
                        className="p-1 hover:bg-white/10 rounded transition-smooth"
                    >
                        <X className="w-5 h-5 text-text-muted-dark" />
                    </button>
                </div>

                {/* Message */}
                <p className="text-text-muted-dark mb-6">{message}</p>

                {/* Actions */}
                <div className="flex gap-3 justify-end">
                    <button
                        onClick={onClose}
                        disabled={loading}
                        className="px-6 py-2 rounded-lg border border-glass-border text-text-light hover:bg-white/5 transition-smooth disabled:opacity-50"
                    >
                        {cancelText}
                    </button>
                    <GlowButton onClick={onConfirm} loading={loading} disabled={loading}>
                        {confirmText}
                    </GlowButton>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
