import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private _appTitle = 'Batiment Concept 78';
  public get appTitle() {
    return this._appTitle;
  }
 

  constructor() { }

  ngOnInit() {
  }

}
