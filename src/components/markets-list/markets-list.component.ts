import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MarketStatsComponent } from '../market-stats/market-stats.component';

@Component({
  selector: 'app-markets-list',
  standalone: true,
  imports: [MarketStatsComponent],
  templateUrl: './markets-list.component.html',
  styleUrl: './markets-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketsListComponent {
  readonly markets = [
    { name: 'Match Up Winner', id: 'fixture_team_winner' },
    { name: 'Team Maps Won', id: 'fixture_team_maps_won' },
    { name: 'Match Up Winner', id: 'fixture_team_winner' },
    { name: 'Team Maps Won', id: 'fixture_team_maps_won' },
    { name: 'Match Up Winner', id: 'fixture_team_winner' },
    { name: 'Team Maps Won', id: 'fixture_team_maps_won' },
    { name: 'Match Up Winner', id: 'fixture_team_winner' },
    { name: 'Team Maps Won', id: 'fixture_team_maps_won' },
    { name: 'Match Up Winner', id: 'fixture_team_winner' },
    { name: 'Team Maps Won', id: 'fixture_team_maps_won' },
    { name: 'Match Up Winner', id: 'fixture_team_winner' },
    { name: 'Team Maps Won', id: 'fixture_team_maps_won' },
    { name: 'Match Up Winner', id: 'fixture_team_winner' },
    { name: 'Team Maps Won', id: 'fixture_team_maps_won' },
    { name: 'Match Up Winner', id: 'fixture_team_winner' },
    { name: 'Team Maps Won', id: 'fixture_team_maps_won' },
    { name: 'Match Up Winner', id: 'fixture_team_winner' },
    { name: 'Team Maps Won', id: 'fixture_team_maps_won' },
    { name: 'Match Up Winner', id: 'fixture_team_winner' },
    { name: 'Team Maps Won', id: 'fixture_team_maps_won' },
    { name: 'Match Up Winner', id: 'fixture_team_winner' },
    { name: 'Team Maps Won', id: 'fixture_team_maps_won' },
  ];

  readonly game = 'cs2';
}
