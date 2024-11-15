import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyperlinkPolicyComponent } from './hyperlink-policy.component';

describe('HyperlinkPolicyComponent', () => {
  let component: HyperlinkPolicyComponent;
  let fixture: ComponentFixture<HyperlinkPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HyperlinkPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HyperlinkPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
