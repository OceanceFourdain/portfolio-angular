import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  styleUrls: ['./landing-page.component.css'],
  template: `
    <header id="header" style="margin-top: 14.5%;">
      <div class="logo">
          <img src="assets/images/moi.jpg" width="130px" height="130px" style="border-radius: 50%; z-index: 2;">
      </div>
      <div class="content">
          <div class="inner">
              <h1>Développeur Informatique</h1>
              <p><span>La data d'aujourd'hui servira le monde de demain</span> <br> je suis Océance Fourdain développeur web depuis maintenant 2 ans, j'avoue avoir un faible pour le Backend</p>
          </div>
      </div>
  </header>`,
})
export class LandingPageComponent {

}
