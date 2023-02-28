import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchInteractionComponent } from './match-interaction.component';

describe('MatchInteractionComponent', () => {
  let component: MatchInteractionComponent;
  let fixture: ComponentFixture<MatchInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchInteractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
