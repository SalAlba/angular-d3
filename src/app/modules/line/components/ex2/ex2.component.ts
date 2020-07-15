import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import * as d3 from 'd3';

import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';


@Component({
  selector: 'app-ex2',
  // encapsulation: ViewEncapsulation.None,
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.scss']
})
export class Ex2Component implements OnInit {

  private margin = { top: 20, right: 20, bottom: 30, left: 50 };
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private svg: any;
  private line: d3Shape.Line<[number, number]>;

  constructor() {
    // let scaleLinear_1 = d3.scaleLinear();
    // let scaleLinear_2 = d3Scale.scaleLinear();
  }

  // https://github.com/datencia/d3js-angular-examples/blob/master/src/app/01_line_chart/line-chart.component.ts
  ngOnInit(): void {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.initSvg();
    // this.initAxis();
    // this.drawAxis();
    // this.drawLine();
  }

  private initSvg() {
    this.svg = d3.select('svg')
      .append('g')
      .attr('transform', `translate( ${this.margin.left}, ${this.margin.top})`);
  }
}
