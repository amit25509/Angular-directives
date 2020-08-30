import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent implements OnInit {

  mycolor: string;
  myfontsize: number;
  myborder: string;
  borderRadius: number;

  constructor() { }

  ngOnInit() {
    this.myborder = '2px solid';
  }

  customizeCss(color: string, fontsize: number, border: string, borderRadius: number) {
    console.log(color);
    this.mycolor = color;
    this.myfontsize = fontsize;
    this.myborder = border;
    this.borderRadius = borderRadius;
  }
}
