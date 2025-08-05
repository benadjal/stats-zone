import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPlayerListComponent } from './top-player-list.component';

describe('TopPlayersComponent', () => {
  let component: TopPlayerListComponent;
  let fixture: ComponentFixture<TopPlayerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopPlayerListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopPlayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
