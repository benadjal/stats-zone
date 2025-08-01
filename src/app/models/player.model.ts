import { PlayerStats } from "./player-stats.model";

export interface Player {
    id : number,
    name : string,
    lastName : string,
    pictureUrl : string,
    birthDay : Date,
    position : string,
    goals : number,
    assists : number,
    mark : number,
    team : string,
    country : string;
    contractEndDate : Date,
    age : number,
    size : number,
    bestFoot : string,
    shirtNumber : number,
    marketValue : number
    stats?: PlayerStats
}