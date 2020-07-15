import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex1Component } from "./components/ex1/ex1.component";

const routes: Routes = [
  {
    path: '',
    component: Ex1Component,
  },
  {
    path: 'ex1',
    component: Ex1Component,
  },
  {
    path: '**',
    redirectTo: 'ex1',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LineRoutingModule { }
