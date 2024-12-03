import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { SearchbarComponent } from "./components/searchbar/searchbar.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { PromosComponent } from "./components/promos/promos.component";
import { BannersComponent } from "./components/banners/banners.component";
import { ProdutosComponent } from "./components/produtos/produtos.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CartComponent } from './components/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SearchbarComponent, CarouselComponent, PromosComponent, BannersComponent, ProdutosComponent, FooterComponent, NavbarComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gamemania';
}
