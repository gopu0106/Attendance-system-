/**
 * Badge Data Configuration
 */

export const BADGES = [
    {
        id: 'early_bird',
        name: 'Early Bird',
        description: '10 on-time arrivals',
        icon: '🌅',
        requirement: 10,
        type: 'punctuality',
        color: 'from-yellow-400 to-orange-500',
    },
    {
        id: 'perfect_week',
        name: 'Perfect Week',
        description: '7-day attendance streak',
        icon: '🔥',
        requirement: 7,
        type: 'streak',
        color: 'from-orange-500 to-red-500',
    },
    {
        id: 'perfect_month',
        name: 'Perfect Month',
        description: '30-day attendance streak',
        icon: '⭐',
        requirement: 30,
        type: 'streak',
        color: 'from-purple-500 to-pink-500',
    },
    {
        id: 'coin_collector_100',
        name: 'Coin Collector',
        description: 'Earned 100 coins',
        icon: '💰',
        requirement: 100,
        type: 'coins',
        color: 'from-green-400 to-emerald-500',
    },
    {
        id: 'coin_collector_500',
        name: 'Coin Master',
        description: 'Earned 500 coins',
        icon: '💎',
        requirement: 500,
        type: 'coins',
        color: 'from-blue-400 to-indigo-500',
    },
    {
        id: 'coin_collector_1000',
        name: 'Coin Legend',
        description: 'Earned 1000 coins',
        icon: '👑',
        requirement: 1000,
        type: 'coins',
        color: 'from-yellow-400 to-amber-500',
    },
    {
        id: 'streak_master_15',
        name: 'Streak Master',
        description: '15-day streak',
        icon: '🚀',
        requirement: 15,
        type: 'streak',
        color: 'from-cyan-400 to-blue-500',
    },
    {
        id: 'never_late',
        name: 'Never Late',
        description: 'No late arrivals this month',
        icon: '⏰',
        requirement: 30,
        type: 'punctuality',
        color: 'from-teal-400 to-green-500',
    },
];

export const LEVELS = [
    { level: 1, name: 'Newcomer', minXP: 0, maxXP: 100, perks: [] },
    { level: 2, name: 'Beginner', minXP: 100, maxXP: 250, perks: ['Unlock badges'] },
    { level: 3, name: 'Regular', minXP: 250, maxXP: 500, perks: ['Unlock badges', '+2% redemption bonus'] },
    { level: 4, name: 'Dedicated', minXP: 500, maxXP: 1000, perks: ['Unlock badges', '+5% redemption bonus'] },
    { level: 5, name: 'Bronze Scholar', minXP: 1000, maxXP: 2000, perks: ['Priority redemptions', '+5% bonus'] },
    { level: 6, name: 'Silver Scholar', minXP: 2000, maxXP: 3500, perks: ['Priority redemptions', '+8% bonus'] },
    { level: 7, name: 'Gold Scholar', minXP: 3500, maxXP: 5000, perks: ['Fast-track approvals', '+10% bonus'] },
    { level: 8, name: 'Platinum Scholar', minXP: 5000, maxXP: 10000, perks: ['All perks', '+15% bonus'] },
    { level: 9, name: 'Diamond Scholar', minXP: 10000, maxXP: 20000, perks: ['VIP status', '+20% bonus'] },
    { level: 10, name: 'Legendary', minXP: 20000, maxXP: 999999, perks: ['Ultimate status', '+25% bonus'] },
];

export const getLevelByXP = (xp) => {
    for (let i = LEVELS.length - 1; i >= 0; i--) {
        if (xp >= LEVELS[i].minXP) {
            return LEVELS[i];
        }
    }
    return LEVELS[0];
};

export const getProgressToNextLevel = (xp) => {
    const currentLevel = getLevelByXP(xp);
    const nextLevel = LEVELS[currentLevel.level]; // Next level index

    if (!nextLevel) return { percentage: 100, remaining: 0 };

    const currentLevelXP = xp - currentLevel.minXP;
    const xpNeeded = currentLevel.maxXP - currentLevel.minXP;
    const percentage = Math.min(100, (currentLevelXP / xpNeeded) * 100);
    const remaining = currentLevel.maxXP - xp;

    return { percentage, remaining, xpNeeded };
};

export default { BADGES, LEVELS, getLevelByXP, getProgressToNextLevel };
