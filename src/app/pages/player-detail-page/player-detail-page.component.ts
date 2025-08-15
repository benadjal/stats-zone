import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap, tap } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { RadarChartComponent } from '../../components/charts/radar-chart/radar-chart.component';
import { FootballApiService } from '../../services/football-api.service';
import { League, PlayerDetails, PlayerWithStatistics } from '../../models/player.model';

@Component({
  selector: 'app-player-detail-page',
  standalone: true,
  imports: [AsyncPipe, SearchBarComponent, DatePipe, AccordionModule, CardModule, RadarChartComponent],
  templateUrl: './player-detail-page.component.html',
  styleUrl: './player-detail-page.component.scss',
})
export class PlayerDetailPageComponent {
  router = inject(ActivatedRoute);
  footballService = inject(FootballApiService);

  player$: Observable<PlayerDetails> = this.router.params.pipe(
    tap((res) => console.log(res)),
    switchMap((params) => this.footballService.getPlayerProfil(+params['id'])),
    tap((res) => console.log(res)),
    map((player: PlayerWithStatistics) => {

      const nationalTeamStats = player.statistics.filter((stats) => (stats.team.name ?? '') === player.player.nationality);

      const clubStats = player.statistics.filter((stats) => !(stats.team.name ?? '').includes(player.player.nationality));

      console.log(clubStats)

      const leagueData : League = clubStats[0].league
      

      const goalsWithNationalTeam = nationalTeamStats.reduce((acc, current) => acc + current.goals.total, 0);
      const assistsWithNationalTeam = nationalTeamStats.reduce((acc, current) => acc + (current.goals.assists ?? 0), 0);

      //Match 
      const appearences = clubStats.reduce((acc,current) => acc + current.games.appearences, 0);
      const lineups = clubStats.reduce((acc,current) => acc + current.games.lineups, 0);
      const minutes = clubStats.reduce((acc,current) => acc + current.games.minutes, 0);
      const ratingArray = clubStats.filter((stats) => stats.games.rating)

      const rating = (ratingArray.reduce((acc,current) => acc + Number(current.games.rating ?? 0),0) / ratingArray.length).toFixed(2)


      //Attaque
      const goals = clubStats.reduce((acc,current) => acc + current.goals.total, 0);
      const assists = clubStats.reduce((acc,current) => acc + (current.goals.assists ?? 0), 0);

      const shots = clubStats.reduce((acc,current) => acc + (current.shots.total ?? 0), 0);
      const shotsOn = clubStats.reduce((acc,current) => acc + (current.shots.on ?? 0), 0);
      const penaltyScored = clubStats.reduce((acc,current) => acc + (current.penalty.scored ?? 0), 0);

      //Passes
      
      const totalPasses = clubStats.reduce((acc,current) => acc + (current.passes.total ?? 0), 0);
      const keyPasses = clubStats.reduce((acc,current) => acc + (current.passes.key ?? 0), 0);

      //Défense
      const totalDuel = clubStats.reduce((acc,current) => acc + (current.duels.total ?? 0), 0);
      const duelWon = clubStats.reduce((acc,current) => acc + (current.duels.won ?? 0), 0);
      const tackles = clubStats.reduce((acc,current) => acc + (current.tackles.total ?? 0), 0);
      const interceptions = clubStats.reduce((acc,current) => acc + (current.tackles.interceptions ?? 0), 0);
      const foulsCommited = clubStats.reduce((acc,current) => acc + (current.fouls.committed ?? 0), 0);
      const foolsDrawn = clubStats.reduce((acc,current) => acc + (current.fouls.drawn ?? 0), 0);

      return {
        ...player,
        computed: {
          goalsWithNationalTeam,
          assistsWithNationalTeam,
          nationalTeamStats,
          appearences,
          lineups,
          minutes,
          goals,
          assists,
          shots,
          shotsOn,
          penaltyScored,
          totalPasses,
          keyPasses,
          totalDuel,
          duelWon,
          tackles,
          interceptions,
          foulsCommited,
          foolsDrawn,
          leagueData
        }
      }
    })
  );
}
