import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules ...
import { LineRoutingModule } from "./line-routing.module";

// components ...
import { RootComponent } from './components/root/root.component';
import { Ex1Component } from './components/ex1/ex1.component';
import { Ex2Component } from './components/ex2/ex2.component';
import { Ex3Component } from './components/ex3/ex3.component';


@NgModule({
  declarations: [RootComponent, Ex1Component, Ex2Component, Ex3Component],
  imports: [
    CommonModule,
    LineRoutingModule
  ]
})
export class LineModule { }
