export const calculatePoints = (scoreTeam1, scoreTeam2) => {
    if (scoreTeam1 > scoreTeam2) {
        return { points1: 3, points2: 0 }; 
    } else if (scoreTeam2 > scoreTeam1) {
        return { points1: 0, points2: 3 };
    } else {
        return { points1: 1, points2: 1 }; 
    }
};