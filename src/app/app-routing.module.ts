import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./pages/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'visibility',
    loadChildren: () => import('./pages/visibility/visibility.module').then( m => m.VisibilityPageModule)
  },
  {
    path: 'addlocation',
    loadChildren: () => import('./pages/addlocation/addlocation.module').then( m => m.AddlocationPageModule)
  },
  {
    path: 'editlocation',
    loadChildren: () => import('./pages/editlocation/editlocation.module').then( m => m.EditlocationPageModule)
  },
  {
    path: 'postevent',
    loadChildren: () => import('./pages/postevent/postevent.module').then( m => m.PosteventPageModule)
  },
  {
    path: 'sharelocation',
    loadChildren: () => import('./pages/sharelocation/sharelocation.module').then( m => m.SharelocationPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
