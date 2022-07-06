import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './home/overview/overview.component';
const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
  children: [
      {
          path: '',
          component: OverviewComponent,
      }
  ],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
