import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsComparatorComponent } from './stats-comparator.component';

describe('StatsComparatorComponent', () => {
  let component: StatsComparatorComponent;
  let fixture: ComponentFixture<StatsComparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsComparatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatsComparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
