import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public emailAddress = "batimentconcept78@yahoo.com";
  public address = "Baia Mare";
  public phoneNumber = "08 92 97 62 34";
  public ownerName = "Batiment Concept";

  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormMessage': ['', Validators.required]
    });
  }


  onSubmit() {
    if (this.contactForm.valid) {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/xrgoqevn',
        { name: this.contactForm.controls.contactFormName.value, replyto: this.contactForm.controls.contactFormEmail.value, message: this.contactForm.controls.contactFormMessage.value },
        { 'headers': headers }).subscribe();
      this.contactForm.reset();
    }
  }

  ngOnInit() {
  }

  ImgClick(element) {
    console.log((element));
    const el: HTMLImageElement = document.getElementById('img01') as HTMLImageElement;
    el.src = element.path[0].currentSrc;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.srcElement.alt;
  }


}
