import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import * as d3 from 'd3';

import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

const DATA = [
  { x: 1, y: 3 },
  { x: 2, y: 6 },
  { x: 3, y: 5 },
  { x: 4, y: 1 },
  { x: 5, y: 2 },
]

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
    this.initAxis();
    this.drawAxis();
    this.drawLine();
  }

  private initSvg() {
    this.svg = d3.select('svg')
      .append('g')
      .attr('transform', `translate( ${this.margin.left}, ${this.margin.top})`);
  }

  private initAxis() {
    this.x = d3Scale.scaleTime().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.x.domain(d3Array.extent(DATA, (d) => d.x));
    this.y.domain(d3Array.extent(DATA, (d) => d.y));
  }

  private drawAxis() {
    this.svg.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));

    this.svg.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y))
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Price ($)');
  }

  private drawLine() {
    this.line = d3Shape.line()
      .x((d: any) => this.x(d.x))
      .y((d: any) => this.y(d.y));

    this.svg.append('path')
      .datum(DATA)
      .attr('class', 'line')
      .attr('d', this.line);
  }
}