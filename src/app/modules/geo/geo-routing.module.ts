import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootComponent } from "./components/root/root.component";
import { Ex1Component } from "./components/ex1/ex1.component";
// import { Ex2Component } from "./components/ex2/ex2.component";
// import { Ex3Component } from "./components/ex3/ex3.component";

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      { path: 'ex1', component: Ex1Component },
    ]
  },
  // {
  //   path: '**',
  //   redirectTo: 'ex1',
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GEORoutingModule { }
