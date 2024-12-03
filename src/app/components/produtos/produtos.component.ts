import { Name } from './../../../../node_modules/ajv/lib/compile/codegen/code';
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CartService } from '../../cart.service';



@Component({
  selector: 'app-produtos',
  imports: [ NgFor ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent implements OnInit {

  categories = ['GAMES - Os melhores jogos do mercado', 'MONTE O SEU PC - tudo para montar e turbinar a sua máquina', 'HARDWARE - As melhores ofertas de hardware estão aqui', 'PERIFÉRICOS - aqui você encontra todos os dispositivos que necessita', 'SMARTPHONES - celulares para todos gostos e bolsos', 'WORK - tudo o que você precisa para o seu home office'];

  filteredProducts: any[] = [
    { id: 1, name: 'Red Dead Redemption II para PS4', category: 'GAMES - Os melhores jogos do mercado', price: 125, imageUrl: 'assets/products/jogo.png' },
    { id: 2, name: 'Memória RAM Corsair, 4GB, 1333MHz, DDR3, CL9', category: 'HARDWARE - As melhores ofertas de hardware estão aqui', price: 99, imageUrl: 'assets/products/memoria.png' },
    { id: 3, name: 'Cadeira Mymax Presidente Mesh Giratoria', category: 'WORK - tudo o que você precisa para o seu home office', price: 280, imageUrl: 'assets/products/cadeira.png' },
    { id: 4, name: 'Notebook Acer Aspire 5 Intel Core i5, 8GB RAM 512GB SSD, Tela 15,6 Full HD', category: 'WORK - tudo o que você precisa para o seu home office', price: 2499, imageUrl: 'assets/products/notebook.png' },
    { id: 5, name: 'Headphone Gamer Brazilpc Bpc-m18 RGB C/ Microfone RGB Box', category: 'PERIFÉRICOS - aqui você encontra todos os dispositivos que necessita', price: 120, imageUrl: 'assets/products/fone.png' },
    { id: 6, name: 'Smartphone Motorola Moto G04s, 8GB RAM, 128GBt', category: 'SMARTPHONES - celulares para todos gostos e bolsos', price: 720, imageUrl: 'assets/products/celular.png' },
    { id: 7, name: 'Jogo EA Sports FC 25, PS5', category: 'GAMES - Os melhores jogos do mercado', price: 190, imageUrl: 'assets/products/jogo1.png' },
    { id: 8, name: 'Jogo Assassins Creed Mirage - PS4', category: 'GAMES - Os melhores jogos do mercado', price: 250, imageUrl: 'assets/products/jogo2.png' },
    { id: 9, name: 'Smartphone LG K61, 128GB, 48MP, Tela 6.5", Branco', category: 'SMARTPHONES - celulares para todos gostos e bolsos', price: 1250, imageUrl: 'assets/products/celular1.png' },
    { id: 10, name: 'Celular Positivo P38, Dual Chip, Featura Phone, Tela 2.8', category: 'SMARTPHONES - celulares para todos gostos e bolsos', price: 210, imageUrl: 'assets/products/celular2.png' },
    { id: 11, name: 'Iphone 15 Apple, 128GB, Quadriband, Preto', category: 'SMARTPHONES - celulares para todos gostos e bolsos', price: 4600, imageUrl: 'assets/products/celular3.png' },
    { id: 12, name: 'Smartphone Samsung Galaxy A15, 128GB, 4GB RAM, Azul Escuro', category: 'SMARTPHONES - celulares para todos gostos e bolsos', price: 790, imageUrl: 'assets/products/celular4.png' },
    { id: 13, name: 'Smartphone Asus Zenfone 9, 6GB, 128GB, 5g Octa Core Snapdragon, Preto', category: 'SMARTPHONES - celulares para todos gostos e bolsos', price: 3140, imageUrl: 'assets/products/celular5.png' },
    { id: 14, name: 'Smartphone Lenovo Thinkphone Xt2309-2 5g Pe, 256GB', category: 'SMARTPHONES - celulares para todos gostos e bolsos', price: 2540, imageUrl: 'assets/products/celular6.png' },
    { id: 15, name: 'Caixa Arquivo Gaveteiro Organizador', category: 'WORK - tudo o que você precisa para o seu home office', price: 110, imageUrl: 'assets/products/office.png' },
  ];


  constructor(private cartService: CartService) { }

  ngOnInit(): void {}


// Método para adicionar ao carrinho
addToCart(product: any) {
  console.log("Adicionando ao carrinho:", product); // Log para verificar se o clique foi detectado
  this.cartService.addToCart(product); // Chama o serviço para adicionar o produto
    alert("O Produto foi adicionado ao carrinho"); // Alerta para o usuário
}

// Método para filtrar os produtos por categoria (exemplo simples)
onCategoryChange(category: string) {
  this.filteredProducts = this.filteredProducts.filter(product => product.name.includes(category));
  }
}
