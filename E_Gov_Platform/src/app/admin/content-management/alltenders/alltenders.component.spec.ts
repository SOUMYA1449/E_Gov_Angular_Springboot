import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltendersComponent } from './alltenders.component';

describe('AlltendersComponent', () => {
  let component: AlltendersComponent;
  let fixture: ComponentFixture<AlltendersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlltendersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlltendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
