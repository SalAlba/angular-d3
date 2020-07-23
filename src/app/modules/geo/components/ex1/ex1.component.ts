import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
// Very important, allow to use css with d3.js
// https://stackoverflow.com/questions/56530840/ionic-4-d3-styling-with-scss-class
import { ViewEncapsulation } from '@angular/core';

import * as d3 from 'd3';

import { POLAND_WOJ as DATA } from "../../../../shared/mock/mock-geo-pl";

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Ex1Component implements OnInit, AfterViewInit {

  @ViewChild('myDiv') myDiv: ElementRef;
  private margin = { top: 20, right: 20, bottom: 30, left: 50 };
  private width: number;
  private height: number;
  private svg: any;
  private projection: any;
  private path: any;

  private cities = [
    {
      city: 'Warszawa',
      longitude: 20.5613689422608,
      lattitude: 52.373596191406364
    }
  ];



  constructor() {
  }

  ngOnInit(): void {
    console.log(DATA)
  }

  ngAfterViewInit(): void {
    this.generateMap();
  }

  generateMap() {
    // console.log('adadad')
    // console.log(this.myDiv)
    // console.log(this.myDiv.nativeElement)

    // ...
    this.width = 1400;
    this.height = 700;
    this.createSVG();
    this.creat___();
    this.drawMap(DATA.features);
    this.drawPoints(this.cities);
    this.drawLabels(this.cities);
  }

  private createSVG() {
    this.svg = d3.select(this.myDiv.nativeElement)
      .append("svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .style("background-color", "#c9e8fd")
      .attr("viewBox", `0 0 ${this.width} ${this.height}`)
      .classed("svg-content", true);
  }

  private creat___() {
    // 21.5613689422608, 53.373596191406364
    this.projection = d3.geoMercator().translate([this.width / 2, this.height / 2]).scale(4000).center([20, 52]);
    this.path = d3.geoPath().projection(this.projection);

  }

  private drawMap(features: any) {
    this.svg.selectAll("path")
      .data(features)
      .enter()
      .append("path")
      .attr("class", "continent")
      // .attr("fill", "red")
      // .attr("stroke", "white")
      // .attr("stroke-width", "0.5")
      .attr("d", this.path);
  }

  private drawPoints(positions) {
    this.svg.selectAll("circle")
      .data(positions)
      .enter()
      .append("circle")
      .attr("class", "circles")
      .attr("cx", (d) => this.projection([d.longitude, d.lattitude])[0])
      .attr("cy", (d) => this.projection([d.longitude, d.lattitude])[1])
      .attr("r", "10px");
  }

  private drawLabels(labels: any) {
    this.svg.selectAll("text")
      .data(labels)
      .enter()
      .append("text")
      .text((d) => d.city)
      .attr("x", (d) => this.projection([d.longitude, d.lattitude])[0] + 5)
      .attr("y", (d) => this.projection([d.longitude, d.lattitude])[1] + 15)
      .attr("class", "labels");

  }


}
