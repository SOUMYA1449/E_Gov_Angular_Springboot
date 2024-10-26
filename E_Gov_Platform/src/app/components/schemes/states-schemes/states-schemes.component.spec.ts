import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesSchemesComponent } from './states-schemes.component';

describe('StatesSchemesComponent', () => {
  let component: StatesSchemesComponent;
  let fixture: ComponentFixture<StatesSchemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatesSchemesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatesSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
