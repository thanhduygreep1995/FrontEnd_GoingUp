import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductTableComponent } from './admin-product-table.component';

describe('AdminProductTableComponent', () => {
  let component: AdminProductTableComponent;
  let fixture: ComponentFixture<AdminProductTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProductTableComponent]
    });
    fixture = TestBed.createComponent(AdminProductTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
