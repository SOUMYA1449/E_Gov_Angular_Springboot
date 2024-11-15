import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyTenderComponent } from './apply-tender.component';

describe('ApplyTenderComponent', () => {
  let component: ApplyTenderComponent;
  let fixture: ComponentFixture<ApplyTenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyTenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
