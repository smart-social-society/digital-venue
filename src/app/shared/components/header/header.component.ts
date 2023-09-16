import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  hideNav = false;
  // @ViewChild('mySidepanel') mySidepanel: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  openNav() {
    this.hideNav = true;
  }

  closeNav() {
    // document.getElementById('mySidepanel').style.width = '0';
  }
}
