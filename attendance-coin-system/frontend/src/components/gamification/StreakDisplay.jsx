import React from 'react';
import { Flame, TrendingUp } from 'lucide-react';

const StreakDisplay = ({ currentStreak, longestStreak, nextMilestone = 10 }) => {
    const getStreakEmoji = (streak) => {
        if (streak >= 30) return '🔥🔥🔥';
        if (streak >= 15) return '🔥🔥';
        if (streak >= 7) return '🔥';
        return '⚡';
    };

    const getStreakStatus = (streak) => {
        if (streak >= 30) return 'Legendary Streak!';
        if (streak >= 15) return 'On Fire!';
        if (streak >= 7) return 'Keep it up!';
        if (streak >= 3) return 'Building momentum';
        return 'Start your streak';
    };

    const progressToMilestone = Math.min(100, (currentStreak / nextMilestone) * 100);

    return (
        <div className="glass-card p-6 hover-lift">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <p className="text-text-muted-dark text-sm font-medium uppercase tracking-wider mb-1">
                        Attendance Streak
                    </p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-text-light">{currentStreak}</span>
                        <span className="text-2xl">{getStreakEmoji(currentStreak)}</span>
                    </div>
                    <p className="text-primary-violet font-semibold mt-2">{getStreakStatus(currentStreak)}</p>
                </div>
                <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-glow-soft">
                    <Flame className="w-8 h-8 text-white" />
                </div>
            </div>

            {/* Progress to Next Milestone */}
            <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-text-muted-dark">Next milestone: {nextMilestone} days</span>
                    <span className="text-xs font-bold text-primary-violet">{currentStreak}/{nextMilestone}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500"
                        style={{ width: `${progressToMilestone}%` }}
                    ></div>
                </div>
            </div>

            {/* Longest Streak */}
            <div className="mt-4 pt-4 border-t border-glass-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-text-muted-dark" />
                    <span className="text-sm text-text-muted-dark">Best Streak</span>
                </div>
                <span className="text-sm font-bold text-text-light">{longestStreak} days</span>
            </div>
        </div>
    );
};

export default StreakDisplay;
