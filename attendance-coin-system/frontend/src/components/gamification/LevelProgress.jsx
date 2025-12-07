import React from 'react';
import { TrendingUp, Award, Zap } from 'lucide-react';
import { getLevelByXP, getProgressToNextLevel, LEVELS } from '../../constants/gamification';

const LevelProgress = ({ currentXP = 0, totalEarned = 0 }) => {
    const level = getLevelByXP(currentXP);
    const { percentage, remaining } = getProgressToNextLevel(currentXP);
    const nextLevel = LEVELS[level.level]; // Next level

    return (
        <div className="glass-card p-6 hover-lift">
            <div className="flex items-start justify-between mb-6">
                <div>
                    <p className="text-text-muted-dark text-sm font-medium uppercase tracking-wider mb-2">
                        Your Level
                    </p>
                    <div className="flex items-baseline gap-3">
                        <span className="text-5xl font-bold gradient-text">{level.level}</span>
                        <div>
                            <div className="text-xl font-bold text-text-light">{level.name}</div>
                            <div className="text-sm text-text-muted-dark">{currentXP} XP</div>
                        </div>
                    </div>
                </div>
                <div className="p-3 bg-gradient-to-br from-primary-violet to-secondary-cyan rounded-xl shadow-glow-primary">
                    <Award className="w-8 h-8 text-white" />
                </div>
            </div>

            {/* Progress to Next Level */}
            {nextLevel && (
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-text-muted-dark">
                            Next: <span className="text-text-light font-semibold">{nextLevel.name}</span>
                        </span>
                        <span className="text-sm font-bold text-primary-violet">
                            {remaining} XP needed
                        </span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden relative">
                        <div
                            className="h-full bg-gradient-to-r from-primary-violet to-secondary-cyan transition-all duration-500 relative"
                            style={{ width: `${percentage}%` }}
                        >
                            <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                        </div>
                    </div>
                    <div className="text-right text-xs text-text-muted-dark mt-1">
                        {percentage.toFixed(1)}%
                    </div>
                </div>
            )}

            {/* Perks */}
            {level.perks && level.perks.length > 0 && (
                <div className="p-4 bg-white/5 rounded-lg border border-glass-border">
                    <div className="flex items-center gap-2 mb-3">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-bold text-text-light">Active Perks</span>
                    </div>
                    <ul className="space-y-2">
                        {level.perks.map((perk, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-text-muted-dark">
                                <span className="text-primary-violet mt-0.5">•</span>
                                <span>{perk}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Total Earned */}
            <div className="mt-4 pt-4 border-t border-glass-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-text-muted-dark" />
                    <span className="text-sm text-text-muted-dark">Total Coins Earned</span>
                </div>
                <span className="text-sm font-bold text-text-light">{totalEarned}</span>
            </div>
        </div>
    );
};

export default LevelProgress;
