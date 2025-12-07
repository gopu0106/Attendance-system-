/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Dark Antigravity Theme
                'deep-purple': '#1a1035',
                'deep-navy': '#0b1020',
                'accent-purple-dark': '#4c1d95',
                'accent-cyan-dark': '#0ea5e9',
                'primary-violet': '#8b5cf6',
                'secondary-cyan': '#22d3ee',
                'glass-border': 'rgba(148, 163, 184, 0.2)',
                'text-light': 'rgba(226, 232, 240, 0.95)',
                'text-muted-dark': 'rgba(226, 232, 240, 0.6)',

                // Keep existing light theme colors for compatibility
                'deep': '#050318',
                'indigo-dark': '#1e1440',
                'card-light': '#f4e4ff',
                'accent-purple': '#a855f7',
                'accent-indigo': '#4f46e5',
                'accent-pink': '#ec4899',
                'accent-peach': '#ffbda1',
                'text-primary': '#020617',
                'text-muted': '#64748b',
            },
            backgroundImage: {
                'gradient-dark': 'linear-gradient(135deg, #1a1035 0%, #0b1020 100%)',
                'gradient-primary': 'linear-gradient(90deg, #a855f7 0%, #22d3ee 100%)',
                'gradient-button': 'linear-gradient(135deg, #a855f7 0%, #22d3ee 100%)',
                'glass-card': 'rgba(15, 23, 42, 0.85)',
            },
            borderRadius: {
                'card': '32px',
                'card-glass': '28px',
                'card-sm': '24px',
                'card-md': '16px',
                'button': '999px',
            },
            boxShadow: {
                'card': '0 40px 120px rgba(0, 0, 0, 0.7)',
                'glass': '0 24px 60px rgba(15, 23, 42, 0.8)',
                'cta': '0 16px 40px rgba(15, 23, 42, 0.7)',
                'elevation': '0 12px 30px rgba(0, 0, 0, 0.4)',
                'glow-primary': '0 0 40px rgba(139, 92, 246, 0.5)',
                'glow-cyan': '0 0 40px rgba(34, 211, 238, 0.5)',
                'glow-soft': '0 8px 32px rgba(139, 92, 246, 0.15)',
                'glow-intense': '0 0 60px rgba(139, 92, 246, 0.6)',
            },
            backdropBlur: {
                'glass': '20px',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'blob': 'blob 7s infinite',
                'float': 'float 6s ease-in-out infinite',
                'orbit': 'orbit 20s linear infinite',
                'breathe': 'breathe 3s ease-in-out infinite',
                'pulse-glow': 'glowPulse 2s ease-in-out infinite',
                'shimmer': 'shimmer 2s ease-in-out infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(16px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                orbit: {
                    'from': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
                    'to': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
                },
                breathe: {
                    '0%, 100%': { transform: 'scale(1)', opacity: '1' },
                    '50%': { transform: 'scale(1.03)', opacity: '0.95' },
                },
                glowPulse: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)' },
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
            },
        },
    },
    plugins: [],
}
