import React from 'react';
import { Lock } from 'lucide-react';
import { BADGES } from '../../constants/gamification';

const BadgeGrid = ({ earnedBadges = [], userProgress = {} }) => {
    const getBadgeStatus = (badge) => {
        const earned = earnedBadges.find(b => b.badge_id === badge.id);
        if (earned) return { status: 'earned', progress: badge.requirement, earnedAt: earned.earned_at };

        const progress = userProgress[badge.id] || 0;
        if (progress >= badge.requirement) return { status: 'ready', progress };
        return { status: 'locked', progress };
    };

    return (
        <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-text-light mb-2 flex items-center gap-2">
                🏆 Badge Collection
            </h3>
            <p className="text-text-muted-dark text-sm mb-6">
                Earn badges by completing challenges
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {BADGES.map((badge) => {
                    const { status, progress } = getBadgeStatus(badge);
                    const percentage = Math.min(100, (progress / badge.requirement) * 100);

                    return (
                        <div
                            key={badge.id}
                            className={`
                                relative p-4 rounded-xl border-2 transition-all duration-300
                                ${status === 'earned'
                                    ? `bg-gradient-to-br ${badge.color} border-transparent shadow-glow-soft`
                                    : status === 'ready'
                                        ? 'border-primary-violet bg-primary-violet/10 hover:shadow-glow-soft'
                                        : 'border-glass-border bg-white/5 opacity-60'
                                }
                                ${status !== 'locked' && 'hover-lift cursor-pointer'}
                            `}
                            title={badge.description}
                        >
                            {/* Locked Overlay */}
                            {status === 'locked' && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl backdrop-blur-sm">
                                    <Lock className="w-6 h-6 text-white/50" />
                                </div>
                            )}

                            {/* Badge Icon */}
                            <div className="text-4xl mb-2 text-center">{badge.icon}</div>

                            {/* Badge Name */}
                            <div className={`text-xs font-bold text-center mb-1 ${status === 'earned' ? 'text-white' : 'text-text-light'}`}>
                                {badge.name}
                            </div>

                            {/* Progress Bar */}
                            {status !== 'earned' && (
                                <div className="mt-2">
                                    <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary-violet transition-all duration-300"
                                            style={{ width: `${percentage}%` }}
                                        ></div>
                                    </div>
                                    <div className="text-xs text-center mt-1 text-text-muted-dark">
                                        {progress}/{badge.requirement}
                                    </div>
                                </div>
                            )}

                            {/* Earned Checkmark */}
                            {status === 'earned' && (
                                <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                    <span className="text-sm">✓</span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BadgeGrid;
