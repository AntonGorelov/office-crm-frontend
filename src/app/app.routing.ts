import { AppComponent } from './app.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './main/components/profile/profile.component';
import { LoginComponent } from './login/components/login.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: MainComponent,
        children: [
          {
            path: 'profile',
            component: ProfileComponent
          }
        ]
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

export const routingComponents = [
  AppComponent
];

export const routing = RouterModule.forRoot(
  routes,
  { preloadingStrategy: PreloadAllModules },
);
