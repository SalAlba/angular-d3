import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.scss']
})
export class Ex3Component implements OnInit, AfterViewInit {
  @ViewChild('myDiv') myDiv: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.f()
  }

  f() {
    console.log('adadad')
    console.log(this.myDiv)
    console.log(this.myDiv.nativeElement)
    console.log(this.myDiv.nativeElement.innerHTML)
  }

}
