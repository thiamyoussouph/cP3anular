import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ArticleComponent } from "./article/article.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fistProject';
  comment1="velo";
  comment2="voiture";
  comment3="avion";
  phot2="/assets/voiture.jpg";
  phot3="/assets/avion.jpg";
  photo1="/assets/velo.jpg";
  prix1=100;
  prix2=200;
  prix3=300;
  
  message="";
  onaffiche(arg:string){
    
    this.message="merci d avoir liker "+arg;
  }
}
