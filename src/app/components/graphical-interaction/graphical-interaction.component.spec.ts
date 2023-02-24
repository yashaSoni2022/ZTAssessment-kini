import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicalInteractionComponent } from './graphical-interaction.component';

describe('GraphicalInteractionComponent', () => {
  let component: GraphicalInteractionComponent;
  let fixture: ComponentFixture<GraphicalInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicalInteractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicalInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
