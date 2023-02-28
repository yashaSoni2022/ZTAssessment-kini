import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctm001002Component } from './ctm001002.component';

describe('Ctm001002Component', () => {
  let component: Ctm001002Component;
  let fixture: ComponentFixture<Ctm001002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ctm001002Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ctm001002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
