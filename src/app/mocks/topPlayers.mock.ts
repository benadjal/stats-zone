import { Player } from "../models/player.model";

export const topPlayersMock: Player[] = [
    {
        id: 1,
        name: "Lamine",
        lastName: "Yamal",
        pictureUrl: "assets/yamal-picture.png",
        birthDay: new Date('23/08/1995'),
        position: 'Striker',
        goals: 19,
        assists: 7,
        mark: 7.99,
        team: "FC Barcelone",
        country: "Espagne"
    },
    {
        id: 2,
        name: "Riyad",
        lastName: "Mahrez",
        pictureUrl: "assets/mahrez-picture.png",
        birthDay: new Date('23/08/1995'),
        position: 'Striker',
        goals: 12,
        assists: 9,
        mark: 7.66,
        team: "Al Ahli",
        country: "Algérie"

    },
    {
        id: 3,
        name: "Kyliane",
        lastName: "Mbappe",
        pictureUrl: "assets/mbappe-picture.png",
        birthDay: new Date('23/08/1995'),
        position: 'Striker',
        goals: 22,
        assists: 5,
        mark: 7.77,
        team: "Real Madrid FC",
        country: "France"

    },
    {
        id: 4,
        name: "Erling",
        lastName: "Haaland",
        pictureUrl: "assets/haaland-picture.jpeg",
        birthDay: new Date('23/08/1995'),
        position: 'Striker',
        goals: 18,
        assists: 8,
        mark: 7.83,
        team: "Manchester City",
        country: "Norvège"

    },
    {
        id: 5,
        name: "Ousmane",
        lastName: "Dembele",
        pictureUrl: "assets/dembele-picture.webp",
        birthDay: new Date('23/08/1995'),
        position: 'Striker',
        goals: 16,
        assists: 10,
        mark: 7.49,
        team: "Paris Saint Germain",
        country: "France"

    },
]