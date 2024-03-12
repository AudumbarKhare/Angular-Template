import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCoupensComponent } from './list-coupens.component';

describe('ListCoupensComponent', () => {
  let component: ListCoupensComponent;
  let fixture: ComponentFixture<ListCoupensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCoupensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCoupensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
