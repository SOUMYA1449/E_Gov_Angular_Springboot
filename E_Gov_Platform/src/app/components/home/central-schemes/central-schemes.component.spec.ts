import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralSchemesComponent } from './central-schemes.component';

describe('CentralSchemesComponent', () => {
  let component: CentralSchemesComponent;
  let fixture: ComponentFixture<CentralSchemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentralSchemesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
