import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContingencyManagementComponent } from './contingency-management.component';

describe('ContingencyManagementComponent', () => {
  let component: ContingencyManagementComponent;
  let fixture: ComponentFixture<ContingencyManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContingencyManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContingencyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
