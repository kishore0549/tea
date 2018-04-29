import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallansListComponent } from './challans-list.component';

describe('ChallansListComponent', () => {
  let component: ChallansListComponent;
  let fixture: ComponentFixture<ChallansListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallansListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
