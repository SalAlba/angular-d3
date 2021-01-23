import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ...
import { RoutingModule } from "./routing.module";
// ...
import { RootComponent } from "./components/root/root.component";

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class RandomModule { }
