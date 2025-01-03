import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GPlaceholderComponent } from './placeholder.component';

describe('PlaceholderComponent', () => {
  let component: GPlaceholderComponent;
  let fixture: ComponentFixture<GPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GPlaceholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
