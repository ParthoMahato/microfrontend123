import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { CartComponent } from './cart.component';
import { CartSummaryComponent } from './cartSummary/cart-summary.component';
import { CartItemscomponent } from './cartItems/cart-items.component';
import { storeName } from './store/home.selectors';
import { reducer } from './store/home.reducer';
import { HomeEffects } from './store/home.effects';
import { DecimalPipe } from './pipe/decimal.pipe';
const routes: Routes = [{
    path: 'mycart',
    component: CartComponent,
    pathMatch: 'full'
}];

@NgModule({
    declarations: [
        CartComponent,
        CartSummaryComponent,
        CartItemscomponent,
        DecimalPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        StoreModule.forRoot({}),
        StoreModule.forFeature(storeName, reducer),
        EffectsModule.forRoot([HomeEffects]),
    ]
})
export class CartModule { }
