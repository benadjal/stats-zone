

export interface Player {
  player: Player;
  statistics: Statistic[];
}

export interface TopPlayer {
  playerData : Player;
  goals : number;
  assists : number;
}

export interface PlayersApiResponse {
  get: string;
  parameters: PlayersParameters;
  errors: unknown[];
  results: number;
  paging: Paging;
  response: PlayerWithStatistics[];
}

export interface PlayersParameters {
  id: string;
  season: string;
}

export interface Paging {
  current: number;
  total: number;
}

export interface PlayerWithStatistics {
  player: Player;
  statistics: Statistic[];
}

export interface Player {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: Birth;
  nationality: string;
  height: string;
  weight: string;
  injured: boolean;
  photo: string;
}

export interface Birth {
  date: string;
  place: string;
  country: string;
}

export interface Statistic {
  team: Team;
  league: League;
  games: Games;
  substitutes: Substitutes;
  shots: Shots;
  goals: Goals;
  passes: Passes;
  tackles: Tackles;
  duels: Duels;
  dribbles: Dribbles;
  fouls: Fouls;
  cards: Cards;
  penalty: Penalty;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface League {
  id: number | null;
  name: string;
  country: string | null;
  logo: string | null;
  flag: string | null;
  season: number;
}

export interface Games {
  appearences: number; 
  lineups: number;
  minutes: number;
  number: number | null;
  position: string;
  rating: string | null;
  captain: boolean;
}

export interface Substitutes {
  in: number;
  out: number;
  bench: number;
}

export interface Shots {
  total: number | null;
  on: number | null;
}

export interface Goals {
  total: number;
  conceded: number | null;
  assists: number | null;
  saves: number | null;
}

export interface Passes {
  total: number | null;
  key: number | null;
  accuracy: number | null;
}

export interface Tackles {
  total: number | null;
  blocks: number | null;
  interceptions: number | null;
}

export interface Duels {
  total: number | null;
  won: number | null;
}

export interface Dribbles {
  attempts: number | null;
  success: number | null;
  past: number | null;
}

export interface Fouls {
  drawn: number | null;
  committed: number | null;
}

export interface Cards {
  yellow: number;
  yellowred: number;
  red: number;
}

export interface Penalty {
  won: number | null;
  commited: number | null;
  scored: number | null;
  missed: number | null;
  saved: number | null;
}
