import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HottextInteractionComponent } from './hottext-interaction.component';

describe('HottextInteractionComponent', () => {
  let component: HottextInteractionComponent;
  let fixture: ComponentFixture<HottextInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HottextInteractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HottextInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
