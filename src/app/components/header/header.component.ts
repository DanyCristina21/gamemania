import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  totalItens: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartService.itens$.subscribe((quantidade: number) => {
      this.totalItens = quantidade;
    });
  }

  rolarParaCarrinho() {
    const elemento = document.getElementById('carrinho');
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  rolarParaLogin() {
    const elemento = document.getElementById('login');
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
