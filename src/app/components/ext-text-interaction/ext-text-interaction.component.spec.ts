import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtTextInteractionComponent } from './ext-text-interaction.component';

describe('ExtTextInteractionComponent', () => {
  let component: ExtTextInteractionComponent;
  let fixture: ComponentFixture<ExtTextInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtTextInteractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtTextInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
