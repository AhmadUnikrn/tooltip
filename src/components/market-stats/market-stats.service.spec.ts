import { TestBed } from '@angular/core/testing';

import { MarketStatsService } from './market-stats.service';

describe('MarketStatsService', () => {
  let service: MarketStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
