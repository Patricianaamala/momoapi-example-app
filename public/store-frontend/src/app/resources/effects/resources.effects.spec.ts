import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ResourcesEffects } from './resources.effects';

describe('ResourcesService', () => {
  let actions$: Observable<any>;
  let effects: ResourcesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ResourcesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ResourcesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
