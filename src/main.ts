import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { CartComponent } from './app/components/cart/cart.component';
import { HeaderComponent } from './app/components/header/header.component';

bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));

  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter([
        { path: '', component: HeaderComponent },
        { path: 'carrinho', component: CartComponent }, // Adiciona a rota do carrinho
      ]),
    ],
  });

