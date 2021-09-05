import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public brand = "Batiment Concept 78";
  public year = (new Date()).getFullYear();
  public emailAddress = "batimentconcept78@yahoo.com";
  public addressLine1 = "Baia Mare";
  public addressLine2 = "Maramures";
  public addressLine3 = "România";
  public phoneNumber = "08 92 97 62 34";


  constructor() { }

  ngOnInit() {
  }

}
