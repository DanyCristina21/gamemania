import { Component } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';

@Component({
  selector: 'app-header',
  imports: [SearchbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
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
