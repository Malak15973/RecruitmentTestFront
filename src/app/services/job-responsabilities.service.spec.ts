import { TestBed } from '@angular/core/testing';

import { JobResponsabilitiesService } from './job-responsabilities.service';

describe('JobResponsabilitiesService', () => {
  let service: JobResponsabilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobResponsabilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
