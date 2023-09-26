import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  styleUrls: ['./work.component.scss'],
  template: `<article id="work" class="mt-2">
    <h2 class="personal-test-h2">Mes projets personnelle</h2>
    <div class="cart-deck">
        <figure class="cart-personal">
          <img src="assets/images/dlf.jpg"/>
          <figcaption class="card-body">
            <h4>Dessanco Life France</h4>
            <p class="figure-description">Site vitrine de jeux</p>
            <a href="#NON-DISPONIBLE" target="_blank" class="personal-a">En savoir plus</a>  
          </figcaption>         
        </figure>
        <figure class="cart-personal">
          <img src="assets/images/voyage.jpg"/>
            <figcaption class="card-body">
            <h4>My travel voyage</h4>
            <p class="figure-description">Site d'entrainement</p>
            <a href="#NON-DISPONIBLE" target="_blank" class="personal-a">En savoir plus</a>
          </figcaption>
        </figure>
        <figure class="cart-personal">
            <img src="assets/images/burger.jpg"/>
            <figcaption class="card-body">
              <h4>Burger code</h4>
              <p class="figure-description">Site d'entrainement</p>
              <a href="#NON-DISPONIBLE" target="_blank" class="personal-a">En savoir plus</a>
            </figcaption>
        </figure>
        <figure class="cart-personal">
          <img src="assets/images/intranet.jpg"/>
          <figcaption class="card-body">
            <h4>Intranet arma 3</h4>
            <!--<p>Site d'interraction pour joueur</p>-->
            <a href="#NON-DISPONIBLE" target="_blank" class="personal-a">En savoir plus</a>
          </figcaption>
        </figure>
    </div>
    <h2 class="personal-test-h2">Projets école</h2>
    <div class="cart-deck">
        <figure class="cart-personal">
          <img src="assets/images/booki.png"/>
          <figcaption class="card-body">
            <h4>Booki projet openclassroom</h4>
            <p class="figure-description"> Création du site à partir d'une maquette </p>
            <a href="https://oceancefourdain.github.io/Booki/" target="_blank" class="personal-a">En savoir plus</a>
          </figcaption>   
        </figure>
        <figure class="cart-personal">
          <img src="assets/images/ohmyfood.png"/>
          <figcaption class="card-body">
            <h4>Ohmyfood projet openclassroom</h4>
            <p class="figure-description">Dynamisez une page web avec scss</p>
            <a href="https://oceancefourdain.github.io/Ohmyfood/" target="_blank" class="personal-a">En savoir plus</a>
          </figcaption>
        </figure>
        <figure class="cart-personal">
          <img src="assets/images/agence_panthere.png"/>
          <figcaption class="card-body">
            <h4>Agence la Panthère projet openclassroom</h4>
            <p class="figure-description">Optimisation du site</p>
            <a href="https://oceancefourdain.github.io/Agence-la-panth-re/" target="_blank" class="personal-a">En savoir plus</a>
          </figcaption>
        </figure>
        <figure class="cart-personal">
          <img src="assets/images/kanap.png"/>
          <figcaption class="card-body">
            <h4>Kanap projet openclassroom</h4>
            <p class="figure-description">Création d'un site e-commerce avec javascript</p>
            <a href="https://oceancefourdain.github.io/kanap/" target="_blank" class="personal-a">En savoir plus</a>
          </figcaption>
        </figure>
        <figure class="cart-personal">
          <img src="assets/images/piquante.png"/>
          <figcaption class="card-body">
            <h4>Piquante projet openclassroom</h4>
            <p class="figure-description">Création d'une api sécurisée</p>
            <a href="https://oceancefourdain.github.io/Agence-la-panth-re/" target="_blank" class="personal-a">En savoir plus</a>
          </figcaption>
        </figure>
        <figure class="cart-personal">
          <img src="assets/images/kasa.png"/>
          <figcaption class="card-body">
            <h4>Kasa projet openclassroom</h4>
            <p class="figure-description">Création d'une application web avec react</p>
            <a href="https://oceancefourdain.github.io/Agence-la-panth-re/" target="_blank" class="personal-a">En savoir plus</a>
          </figcaption>
        </figure>
        <figure class="cart-personal">
          <img src="assets/images/formule1.jpg"/>
          <figcaption class="card-body">
            <h4>Formule 1</h4>
            <p class="figure-description">Projet bts sio</p>
            <a href="#NON-DISPONIBLE" target="_blank" class="personal-a">En savoir plus</a>
          </figcaption>
        </figure>
        <figure class="cart-personal">
          <img src="assets/images/pokedex.png"/>
          <figcaption class="card-body">
            <h4>Pokedex</h4>
            <p class="figure-description">Projet licence RGI</p>
            <a href="" class="personal-a">En savoir plus</a>
          </figcaption>
        </figure>
    </div>
    <h2 class="personal-test-h2">Projets Professionnelle</h2>
    <div class="cart-deck">
        <figure class="cart-personal">
          <img src="assets/images/intranet.jpg"/>
          <figcaption class="card-body">
            <h4>Pictural</h4>
            <p class="figure-description">Site web de management et d'aide à la prise de décision</p>
            <a href="#NON-DISPONIBLE" target="_blank" class="personal-a">En savoir plus</a>
          </figcaption>
        </figure>
        <figure class="cart-personal">
          <img src="assets/images/portfolio.png"/>
          <figcaption class="card-body">
            <h4>Portfolio</h4>
            <p class="figure-description">CV en ligne</p>
            <a href="#NON-DISPONIBLE" target="_blank" class="personal-a">En savoir plus</a>
          </figcaption>
        </figure>
    </div>
  </article>`,
})
export class WorkComponent {

}
