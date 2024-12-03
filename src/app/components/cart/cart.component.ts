import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { NgFor, NgIf } from '@angular/common';

// Definir a interface do produto
interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})


export class CartComponent implements OnInit {
  cartItems: Product [] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.calculateTotal();
    });
  }

  // Função para remover item do carrinho
  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);  // Chama o método do serviço
  }

  // Função para calcular o preço total
  private calculateTotal(): void {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}
