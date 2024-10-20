import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSchemesComponent } from './total-schemes.component';

describe('TotalSchemesComponent', () => {
  let component: TotalSchemesComponent;
  let fixture: ComponentFixture<TotalSchemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalSchemesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
