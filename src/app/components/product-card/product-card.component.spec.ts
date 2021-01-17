import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { PopUpService } from 'src/app/_services/pop-up.service';
import * as fromShoppingCart from '../../_store/_reducers/shopping-cart.reducer';
import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  let popupService: PopUpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      imports: [
        StoreModule.forRoot({
          shoppingCart: fromShoppingCart.shoppingCartReducer,
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = { name: 'test', id: 1, price: 10, photo: '' };
    popupService = fixture.debugElement.injector.get(PopUpService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
