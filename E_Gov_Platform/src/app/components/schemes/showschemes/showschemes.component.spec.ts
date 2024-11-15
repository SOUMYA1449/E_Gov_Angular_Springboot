import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowschemesComponent } from './showschemes.component';

describe('ShowschemesComponent', () => {
  let component: ShowschemesComponent;
  let fixture: ComponentFixture<ShowschemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowschemesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowschemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
