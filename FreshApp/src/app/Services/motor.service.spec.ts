/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MotorService } from './motor.service';

describe('Service: Motor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MotorService]
    });
  });

  it('should ...', inject([MotorService], (service: MotorService) => {
    expect(service).toBeTruthy();
  }));
});
