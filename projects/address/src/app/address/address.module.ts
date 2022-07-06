import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { AddressComponent } from './address.component';
import { AddressListComponent } from './addressList/address-list.component';
import { storeName } from './store/home.selectors';
import { reducer } from './store/home.reducer';
import { HomeEffects } from './store/home.effects';

const routes: Routes = [{
    path: 'address',
    component: AddressComponent,
    pathMatch: 'full'
}];

@NgModule({
    declarations: [
        AddressComponent,
        AddressListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        StoreModule.forRoot({}),
        StoreModule.forFeature(storeName, reducer),
        EffectsModule.forRoot([HomeEffects]),
    ]
})
export class AddressModule { }
