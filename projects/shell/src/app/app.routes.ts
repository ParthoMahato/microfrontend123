import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { NotFoundComponent } from './not-found/not-found.component';
import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { CounterComponent } from './counter/counter.component';
//import { DashboardComponent } from './dashboard/dashboard.component';

let URL = 'http://localhost:3000/remoteEntry.js';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch: 'full'
  }, 
  {
    path: 'login',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: 'https://microfrontend123.vercel.app/login/remoteEntry.js',
        remoteName: 'login',
        exposedModule: './LoginModule'
      })
        .then(m => m.LoginModule)
    }
  },
  {
    path: 'home',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: 'http://localhost:5001/remoteEntry.js',
        remoteName: 'landing',
        exposedModule: './HomeModule'
      })
        .then(m => m.HomeModule)
    }
  },
  {
    path: 'home/cart',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: 'http://localhost:5002/remoteEntry.js',
        remoteName: 'mycart',
        exposedModule: './CartModule'
      })
        .then(m => m.CartModule)
    }
  },
  {
    path: 'home/order',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: 'http://localhost:5003/remoteEntry.js',
        remoteName: 'orders',
        exposedModule: './OrdersModule'
      })
        .then(m => m.OrderModule)
    }
  },
  {
    path: 'home/address',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: 'http://localhost:5004/remoteEntry.js',
        remoteName: 'address',
        exposedModule: './AddressModule'
      })
        .then(m => m.AddressModule)
    }
  },
  // Your route here:

  // Local usage
  // {
  //   path: 'flights',
  //   loadChildren: () => {
  //     return loadRemoteModule({
  //       remoteEntry: URL,
  //       remoteName: 'mfe1',
  //       exposedModule: './Module'
  //     })
  //     .then(m => m.FlightsModule) }
  // },

  {
    path: 'angular1',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'https://nice-grass-018f7d910.azurestaticapps.net/remoteEntry.js',
      remoteName: 'angular1',
      exposedModule: './web-components',
      elementName: 'angular1-element'
    } as WebComponentWrapperOptions
  },

  // {
  //   path: 'login',
  //   component: WebComponentWrapper,
  //   data: {
  //     remoteEntry: 'http://localhost:5000/remoteEntry.js',
  //     remoteName: 'login',
  //     exposedModule: './LoginComponent',
  //     elementName: 'angular1-element'
  //   } as WebComponentWrapperOptions
  // },     
  {
    matcher: startsWith('angular3'),
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'https://gray-river-0b8c23a10.azurestaticapps.net/remoteEntry.js',
      remoteName: 'angular3',
      exposedModule: './web-components',
      elementName: 'angular3-element'
    } as WebComponentWrapperOptions
  }

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.

];

