import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowappliedtenderComponent } from './showappliedtender.component';

describe('ShowappliedtenderComponent', () => {
  let component: ShowappliedtenderComponent;
  let fixture: ComponentFixture<ShowappliedtenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowappliedtenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowappliedtenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
