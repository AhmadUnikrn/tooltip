import { Injectable } from '@angular/core';
import { Game } from '../../types';

const marketsStats = {
  cs2: [
    {
      id: 'fixture_team_winner',
      title: 'Match Up Winner',
      teams: {
        left: {
          id: 'TEM_TK_15206',
          name: 'INTZ',
          slug: 'INT',
          logo: null,
          is_logo_forbidden: true,
          data: {
            score: 435,
          },
        },
        right: {
          id: 'TEM_TK_62877',
          name: 'Fluxo',
          slug: 'FX',
          logo: null,
          is_logo_forbidden: true,
          data: {
            score: 201,
          },
        },
      },
    },
    {
      id: 'fixture_team_maps_won',
      title: 'Team Maps Won',
      teams: {
        left: {
          id: 'TEM_TK_15206',
          name: 'INTZ',
          slug: 'INT',
          logo: null,
          is_logo_forbidden: true,
          data: {
            score: 2.4,
          },
        },
        right: {
          id: 'TEM_TK_62877',
          name: 'Fluxo',
          slug: 'FX',
          logo: null,
          is_logo_forbidden: true,
          data: {
            score: 2.6,
          },
        },
      },
    },
  ],
};

@Injectable({
  providedIn: 'root',
})
export class MarketStatsService {
  getMarketStats(game: Game, marketId: string) {
    return marketsStats[game]?.find((market) => market.id === marketId);
  }
}
