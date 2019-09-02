import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomModeComponent } from './random-mode.component';

describe('RandomModeComponent', () => {
  let component: RandomModeComponent;
  let fixture: ComponentFixture<RandomModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
