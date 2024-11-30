import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  imports: [],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  searchTerm: string = '';

  onSearch(): void {
    if (this.searchTerm.trim()) {
      console.log(`Pesquisando por: ${this.searchTerm}`);
      // Aqui você pode chamar um serviço ou filtrar dados com base no searchTerm.
    } else {
      console.log('Campo de pesquisa vazio!');
    }
  }
}
