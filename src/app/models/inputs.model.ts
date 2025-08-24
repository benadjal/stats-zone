export interface LeagueInput {
    id : number;
    name : string
}


export type Season = 2021 | 2022 | 2023;

export interface SeasonInput {
    year : Season
}

export type Card = "red" | "yellow";