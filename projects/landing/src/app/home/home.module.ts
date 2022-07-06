import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { OverviewComponent } from './overview/overview.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './items/item/item.component';
import { storeName } from './store/home.selectors';
import { reducer } from './store/home.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './store/home.effects';
import { DecimalPipe } from './pipe/decimal.pipe';
const routes: Routes = [{
    path: 'landing',
    component: HomeComponent,
    children: [
        {
            path: '',
            component: OverviewComponent,
        }
    ],
}];


@NgModule({
    declarations: [
        HomeComponent,
        OverviewComponent,
        ItemsComponent,
        ItemComponent,
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
export class HomeModule { }
