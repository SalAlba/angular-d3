import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules ...
import { LineRoutingModule } from "./line-routing.module";

// components ...
import { Ex1Component } from './components/ex1/ex1.component';


@NgModule({
  declarations: [Ex1Component],
  imports: [
    CommonModule,
    LineRoutingModule
  ]
})
export class LineModule { }
