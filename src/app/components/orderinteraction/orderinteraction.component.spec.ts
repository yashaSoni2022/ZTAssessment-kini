import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderinteractionComponent } from './orderinteraction.component';

describe('OrderinteractionComponent', () => {
  let component: OrderinteractionComponent;
  let fixture: ComponentFixture<OrderinteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderinteractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderinteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
