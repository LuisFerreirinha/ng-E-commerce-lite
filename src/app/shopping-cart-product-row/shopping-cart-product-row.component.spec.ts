import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartProductRowComponent } from './shopping-cart-product-row.component';

describe('ShoppingCartProductRowComponent', () => {
  let component: ShoppingCartProductRowComponent;
  let fixture: ComponentFixture<ShoppingCartProductRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartProductRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartProductRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
