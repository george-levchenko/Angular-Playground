import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GMoviesComponent } from './movies.component';

describe('MoviesComponent', () => {
  let component: GMoviesComponent;
  let fixture: ComponentFixture<GMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GMoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
