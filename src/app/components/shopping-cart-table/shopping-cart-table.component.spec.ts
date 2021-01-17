import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import * as fromShoppingCart from '../../_store/_reducers/shopping-cart.reducer';
import { ShoppingCartTableComponent } from './shopping-cart-table.component';

describe('ShoppingCartTableComponent', () => {
  let component: ShoppingCartTableComponent;
  let fixture: ComponentFixture<ShoppingCartTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingCartTableComponent],
      imports: [
        StoreModule.forRoot({
          shoppingCart: fromShoppingCart.shoppingCartReducer,
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
