import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// https://stackoverflow.com/questions/51237023/sub-module-child-routes-not-working-error-cannot-match-any-routes
// https://stackblitz.com/edit/nested-routes-angular-lazyloading?file=app%2Fadmin%2Fadmin.module.ts
const routes: Routes = [
  {
    path: 'line',
    loadChildren: () => import('./modules/line/line.module').then(m => m.LineModule)
  },
  {
    path: 'geo',
    loadChildren: () => import('./modules/geo/geo-routing.module').then(m => m.GEORoutingModule)
  },
  {
    path: 'random',
    loadChildren: () => import('./modules/random/random.module').then(m => m.RandomModule)
  },
  {
    path: '**',
    redirectTo: 'line',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
