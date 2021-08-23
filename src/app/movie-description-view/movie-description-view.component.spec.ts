import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDescriptionViewComponent } from './movie-description-view.component';

describe('MovieDescriptionViewComponent', () => {
  let component: MovieDescriptionViewComponent;
  let fixture: ComponentFixture<MovieDescriptionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDescriptionViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDescriptionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
