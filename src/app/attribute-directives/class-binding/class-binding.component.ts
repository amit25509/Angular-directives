import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss']
})
export class ClassBindingComponent implements OnInit {

  classList: string[];
  constructor() { }

  ngOnInit() {
    this.classList = ['burlywood', 'border'];
  }

  changeCssClass(cssClass: string) {
    const pos: number = this.classList.indexOf(cssClass);
    if (pos > -1){
      this.classList.splice(pos, 1);
    } else {
      this.classList.push(cssClass);
    }
  }
}
