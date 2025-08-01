export interface PlayerStats {
  games: {
    appearances: number;
    starts: number;
    minutesPerGame: number;
    totalMinutes: number;
    teamOfTheWeek: number;
  };
  attack: {
    goals: number;
    goalFrequency: string;
    goalsPerGame: number;
    totalShots: number;
    shotsOnTargetPerGame: number;
    bigChancesMissed: number;
    conversionRate: string;         
    penaltyGoals: number;
    penaltySuccessRate: string;     
    freeKickGoals: number;
    freeKickGoalPercentage: string; 
    goalsInsideBox: string;         
    goalsOutsideBox: string;       
    headedGoals: number;
    leftFootGoals: number;
    rightFootGoals: number;
    penaltySuccess: number;      
  };
  passes: {
    assists: number;
    touches: number;
    bigChancesCreated: number;
    keyPasses: number;
    passAccuracy: string;
    accuracyOwnHalf: string;
    accuracyOppHalf: string;
    longPasses: string;
    lobbedPasses: string;
    goodCrosses: string;
  };
  defense: {
    interceptions: number;
    tacklesPerMatch: number;
    possessionWon: number;
    ballsRecovered: number;
    dribbledPast: number;
    clearances: number;
    errorsLeadingToShot: number;
    errorsLeadingToGoal: number;
    penaltiesCommitted: number;
  };
}
