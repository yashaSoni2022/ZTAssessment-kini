import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Move1Component } from './move1.component';

describe('Move1Component', () => {
  let component: Move1Component;
  let fixture: ComponentFixture<Move1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Move1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Move1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
