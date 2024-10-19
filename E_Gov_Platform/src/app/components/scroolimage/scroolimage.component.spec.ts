import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScroolimageComponent } from './scroolimage.component';

describe('ScroolimageComponent', () => {
  let component: ScroolimageComponent;
  let fixture: ComponentFixture<ScroolimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScroolimageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScroolimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
