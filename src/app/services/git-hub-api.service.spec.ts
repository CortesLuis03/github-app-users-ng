import { TestBed } from '@angular/core/testing';

import { GitHubAPIService } from './git-hub-api.service';

describe('GitHubAPIService', () => {
  let service: GitHubAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitHubAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
