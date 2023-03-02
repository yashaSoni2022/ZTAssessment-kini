import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphicalinteraction12Component } from './graphicalinteraction12.component';

describe('Graphicalinteraction12Component', () => {
  let component: Graphicalinteraction12Component;
  let fixture: ComponentFixture<Graphicalinteraction12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Graphicalinteraction12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Graphicalinteraction12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
