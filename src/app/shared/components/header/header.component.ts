import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showNav = false;
  // @ViewChild('mySidepanel') mySidepanel: ElementRef;
  constructor(private _router: Router) {}

  ngOnInit(): void {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.showNav = false;
      }
    });
  }

  openNav() {
    this.showNav = true;
  }

  closeNav() {
    // document.getElementById('mySidepanel').style.width = '0';
  }
}
