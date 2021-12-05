import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPointComponent } from './grid-point.component';

describe('GridPointComponent', () => {
  let component: GridPointComponent;
  let fixture: ComponentFixture<GridPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
