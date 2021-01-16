import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { shoppingCartReducer } from './_store/_reducers/shopping-cart.reducer';
import { environment } from 'src/environments/environment';
import { ShoppingCartProductRowComponent } from './shopping-cart-product-row/shopping-cart-product-row.component';
import { ShoppingCartTableComponent } from './shopping-cart-table/shopping-cart-table.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShoppingCartComponent,
    FooterComponent,
    PopUpComponent,
    ProductCardComponent,
    SpinnerComponent,
    ShoppingCartProductRowComponent,
    ShoppingCartTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({ shoppingCart: shoppingCartReducer }),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
