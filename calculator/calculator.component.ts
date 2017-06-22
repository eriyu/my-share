import { Component, OnInit, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  @Input() price: number;
  @Input() qty: number;
  total: number;

  constructor() { }

  ngOnInit() {
  }

  Calculator(){
    this.total = this.price * this.qty;
  }

}
