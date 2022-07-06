import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { OrdersComponent } from './orders.component';
import { storeName } from './store/home.selectors';
import { reducer } from './store/home.reducer';
import { HomeEffects } from './store/home.effects';

const routes: Routes = [{
    path: 'orders',
    component: OrdersComponent,
    pathMatch: 'full'
}];

@NgModule({
    declarations: [
        OrdersComponent
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
export class OrderModule { }
