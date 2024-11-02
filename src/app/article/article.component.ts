import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent {
  @Input() comment = '';
  @Output() info = new EventEmitter<string>();
  like: number = 0;
  @Input() photo = '';
  @Input() prix: number = 0;
  produits=[
    {
      comment:'velo',
      photo:'/assets/velo.jpg',
      prix:75000,
      dispo:true

    },
    {
      comment:'voiture',
      photo:'/assets/voiture.jpg',
      prix:200,
      dispo:false

    },
    {
      comment:'avion',
      photo:'/assets/avion.jpg',
      prix:300,
      dispo:true

    }
  ]
  commentaires = 'texte initial';
  @Input() dispo: boolean=false; 

  public addLike() {
    this.like++;
    this.info.emit(this.comment);
  }
  dislike() {
    if (this.like > 0) {
      this.like--;
    }
  }
}
