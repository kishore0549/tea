import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {

  color = 'purpledark';
  showSettings = false;
  showMinisidebar = false;
  showDarktheme = false;

  constructor() { }

  ngOnInit() {
  }

}
