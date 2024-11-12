import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllschemeComponent } from './allscheme.component';

describe('AllschemeComponent', () => {
  let component: AllschemeComponent;
  let fixture: ComponentFixture<AllschemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllschemeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllschemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
