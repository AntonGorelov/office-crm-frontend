import { Component, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
// use for dropdown menu
import * as jquery from 'jquery';

@Component({
  selector: 'header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})

export class HeaderComponent {

  @Input() open: boolean;

  private element: jquery;

  constructor(private el: ElementRef, public router: Router) {
    this.open = false;
    this.element = jquery(el.nativeElement);
  }

  public sendData(data: boolean) {
    this.open = data;
  }

  openDropdown(id: string): void {
    document.getElementById(id).classList.toggle('show');
  }

}
