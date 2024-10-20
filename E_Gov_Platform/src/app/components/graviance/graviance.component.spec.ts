import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GravianceComponent } from './graviance.component';

describe('GravianceComponent', () => {
  let component: GravianceComponent;
  let fixture: ComponentFixture<GravianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GravianceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GravianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
