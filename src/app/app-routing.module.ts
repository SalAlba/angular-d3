import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'line',
    loadChildren: () => import('./modules/line/line.module').then(m => m.LineModule)
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
