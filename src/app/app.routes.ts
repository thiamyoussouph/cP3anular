import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
