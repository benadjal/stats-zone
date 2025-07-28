import { Player } from "../models/player.model";

export const topPlayersMock: Player[] = [
    {
        id: 1,
        name: "Lamine",
        lastName: "Yamal",
        pictureUrl: "src/assets/yamal-picture.png",
        birthDay: new Date('23/08/1995'),
        position: 'Striker',
        goals: 19,
        assists: 7,
        mark: 7.99
    },
    {
        id: 2,
        name: "Riyad",
        lastName: "Mahrez",
        pictureUrl: "src/assets/mahrez-picture.png",
        birthDay: new Date('23/08/1995'),
        position: 'Striker',
        goals: 12,
        assists: 9,
        mark: 7.66
    },
    {
        id: 3,
        name: "Kyliane",
        lastName: "Mbappe",
        pictureUrl: "src/assets/mbappe-picture.png",
        birthDay: new Date('23/08/1995'),
        position: 'Striker',
        goals: 22,
        assists: 5,
        mark: 7.77
    },
    {
        id: 4,
        name: "Erling",
        lastName: "Haaland",
        pictureUrl: "src/assets/haaland-picture.png",
        birthDay: new Date('23/08/1995'),
        position: 'Striker',
        goals: 18,
        assists: 8,
        mark: 7.83
    },
]