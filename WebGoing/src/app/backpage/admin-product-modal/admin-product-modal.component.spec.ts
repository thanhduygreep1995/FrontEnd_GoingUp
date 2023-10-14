import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductModalComponent } from './admin-product-modal.component';

describe('AdminProductModalComponent', () => {
  let component: AdminProductModalComponent;
  let fixture: ComponentFixture<AdminProductModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProductModalComponent]
    });
    fixture = TestBed.createComponent(AdminProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
