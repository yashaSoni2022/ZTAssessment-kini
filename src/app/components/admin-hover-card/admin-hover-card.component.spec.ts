import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHoverCardComponent } from './admin-hover-card.component';

describe('AdminHoverCardComponent', () => {
  let component: AdminHoverCardComponent;
  let fixture: ComponentFixture<AdminHoverCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHoverCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHoverCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
