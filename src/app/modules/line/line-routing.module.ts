import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex1Component } from "./components/ex1/ex1.component";
import { Ex2Component } from "./components/ex2/ex2.component";
import { Ex3Component } from "./components/ex3/ex3.component";

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
    path: 'ex2',
    component: Ex2Component,
  },
  {
    path: 'ex3',
    component: Ex3Component,
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
