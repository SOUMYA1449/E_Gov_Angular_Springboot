import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyRightPolicyComponent } from './copy-right-policy.component';

describe('CopyRightPolicyComponent', () => {
  let component: CopyRightPolicyComponent;
  let fixture: ComponentFixture<CopyRightPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyRightPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyRightPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
