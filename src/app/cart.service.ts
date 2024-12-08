import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Definindo a interface Product para garantir a tipagem
interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root', // Disponibiliza o serviço globalmente
})
export class CartService {
  private cartItems: Product[] = [];
  private cartItemsSubject = new BehaviorSubject<Product[]>(this.cartItems); // Emite o estado atual
  private itensNoCarrinho = new BehaviorSubject<number>(0);
  itens$ = this.itensNoCarrinho.asObservable();

  constructor() {}

  // Retorna um Observable para os itens no carrinho
  getCartItems() {
    return this.cartItemsSubject.asObservable(); // Permite que os componentes se inscrevam e recebam atualizações
  }

  atualizarItens(quantidade: number) {
    this.itensNoCarrinho.next(quantidade);
  }


  // Adiciona um item ao carrinho
  addToCart(product: Product) {
    console.log("Produto adicionado ao carrinho:", product); // Adiciona um log para verificar se o produto foi capturado corretamente
    this.cartItems.push(product); // Adiciona o produto ao array do carrinho
    this.cartItemsSubject.next(this.cartItems); // Emite os novos itens para os componentes
  }

  // Remove um item do carrinho
  removeFromCart(product: Product) {
    this.cartItems = this.cartItems.filter(item => item.id !== product.id); // Remove o produto do carrinho
    this.cartItemsSubject.next(this.cartItems); // Emite os novos itens para os componentes
  }

  // Obtém o número total de itens no carrinho
  getTotalItems(): number {
    return this.cartItems.length; // Retorna a quantidade de itens no carrinho
  }
}
