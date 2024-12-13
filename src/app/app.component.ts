import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { SearchbarComponent } from "./components/searchbar/searchbar.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { PromosComponent } from "./components/promos/promos.component";
import { BannersComponent } from "./components/banners/banners.component";
import { ProdutosComponent } from "./components/produtos/produtos.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CartComponent } from './components/cart/cart.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from "./components/login/login.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CadastroComponent, RouterModule, HeaderComponent, SearchbarComponent, CarouselComponent, PromosComponent, BannersComponent, ProdutosComponent, FooterComponent, NavbarComponent, CartComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gamemania';

  isCadastro = false; // Controla se estamos no formulário de cadastro

  mostrarCadastro() {
    this.isCadastro = true;
  }

  mostrarLogin() {
    this.isCadastro = false;
  }

}
