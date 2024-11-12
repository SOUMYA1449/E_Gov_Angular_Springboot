import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtendersComponent } from './addtenders.component';

describe('AddtendersComponent', () => {
  let component: AddtendersComponent;
  let fixture: ComponentFixture<AddtendersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddtendersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
