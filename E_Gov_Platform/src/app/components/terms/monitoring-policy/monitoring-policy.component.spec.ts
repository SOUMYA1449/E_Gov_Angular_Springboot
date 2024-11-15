import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringPolicyComponent } from './monitoring-policy.component';

describe('MonitoringPolicyComponent', () => {
  let component: MonitoringPolicyComponent;
  let fixture: ComponentFixture<MonitoringPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitoringPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitoringPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
