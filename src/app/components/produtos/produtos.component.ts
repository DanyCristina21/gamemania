import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-produtos',
  imports: [ NgFor ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent implements OnInit {

  categories: string[] = ['GAMES - Os melhores jogos do mercado', 'MONTE O SEU PC - tudo para montar e turbinar a sua máquina', 'HARDWARE - As melhores ofertas de hardware estão aqui', 'PERIFÉRICOS - aqui você encontra todos os dispositivos que necessita', 'SMARTPHONES - celulares para todos gostos e bolsos', 'WORK - tudo o que você precisa para o seu home office'];
  selectedCategory: string = 'Games'; // Categoria inicial

  products: any[] = [
    { id: 1, name: 'Red Dead Redemption II para PS4', category: 'GAMES - Os melhores jogos do mercado', price: 125, imageUrl: 'assets/products/jogo.png' },
    { id: 2, name: 'Memória RAM Corsair, 4GB, 1333MHz, DDR3, CL9', category: 'HARDWARE - As melhores ofertas de hardware estão aqui', price: 99, imageUrl: 'assets/products/memoria.png' },
    { id: 3, name: 'Cadeira Mymax Presidente Mesh Giratoria', category: 'WORK - tudo o que você precisa para o seu home office', price: 280, imageUrl: 'assets/products/cadeira.png' },
    { id: 4, name: 'Notebook Acer Aspire 5 Intel Core i5, 8GB RAM 512GB SSD, Tela 15,6 Full HD', category: 'WORK - tudo o que você precisa para o seu home office', price: 2499, imageUrl: 'assets/products/notebook.png' },
    { id: 5, name: 'Headphone Gamer Brazilpc Bpc-m18 RGB C/ Microfone RGB Box', category: 'PERIFÉRICOS - aqui você encontra todos os dispositivos que necessita', price: 120, imageUrl: 'assets/products/fone.png' },
    { id: 6, name: 'Smartphone Motorola Moto G04s, 8GB RAM, 128GBt', category: 'SMARTPHONES - celulares para todos gostos e bolsos', price: 720, imageUrl: 'assets/products/celular.png' },
    { id: 7, name: 'Jogo EA Sports FC 25, PS5', category: 'GAMES - Os melhores jogos do mercado', price: 190, imageUrl: 'assets/products/jogo1.png' },
    { id: 8, name: 'Jogo Assassins Creed Mirage - PS4', category: 'GAMES - Os melhores jogos do mercado', price: 250, imageUrl: 'assets/products/jogo2.png' },
  ];

  filteredProducts: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filterProductsByCategory();
  }

  // Filtra os produtos com base na categoria selecionada
  filterProductsByCategory() {
    this.filteredProducts = this.products.filter(product => product.category === this.selectedCategory);
  }

  // Função para alterar a categoria selecionada
  onCategoryChange(category: string) {
    this.selectedCategory = category;
    this.filterProductsByCategory();
  }

  // Função para adicionar o produto ao carrinho (apenas exemplo)
  addToCart(product: any) {
    console.log(`${product.name} foi adicionado ao carrinho!`);
    // Aqui você poderia adicionar o produto a um serviço de carrinho, por exemplo.



  }
}
