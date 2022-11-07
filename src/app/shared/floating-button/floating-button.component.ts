import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.css']
})
export class FloatingButtonComponent implements OnInit {

  constructor() { }

  handleClick() : void
  {
    window.open('https://wa.me/601154024860?text=I%20wish%20to%20get%20a%20quotation%20for%20my%20space').focus();
  } 
  ngOnInit(): void {
  }

}
