import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../article.service';
import {Articles} from '../articles';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LikesService} from '../likes.service';
import {ILikes} from '../i-likes';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Articles[] = [];
  likes: ILikes[] = [];
  article = {
    id: null,
    title: '',
    url: '',
    like: 0
  };
  constructor(private articleService: ArticleService,
              private likesService: LikesService) { }

  ngOnInit(): void {
    this.articles = this.articleService.getArticle();
    this.likes = this.likesService.getLikes();
  }
  addArticle() {
    this.article.id = (document.getElementById('article.id') as HTMLInputElement).value;
    this.article.title = (document.getElementById('article.title') as HTMLTextAreaElement).value;
    this.article.url = (document.getElementById('article.url') as HTMLTextAreaElement).value;
    this.articles.push(<Articles> this.article);
    console.log(<Articles> this.article);
  }

  onClick(id: number){
    let like = this.getLikeByArticleId(id);
    for(let i = 0; i< this.likes.length; i++) {
      if(like === this.likes[i]) {
        this.likes[i].amountOfLike++;
      }
    }
  }

  getLikeByArticleId(id: number): ILikes {
    for (let i=0; i<this.likes.length; i++) {
      if (this.likes[i].article_id == id) {
        return this.likes[i];
      }
    }
  }
}
