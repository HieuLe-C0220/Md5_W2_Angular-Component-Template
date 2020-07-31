import { Injectable } from '@angular/core';
import {ILikes} from './i-likes';
import {Articles} from './articles';

@Injectable({
  providedIn: 'root'
})
export class LikesService {
  likes: ILikes[] = [
    {
      article_id: 1,
      amountOfLike: 6
    },
    {
      article_id: 2,
      amountOfLike: 8
    },
    {
      article_id: 3,
      amountOfLike: 10
    },
    {
      article_id: 4,
      amountOfLike: 20
    },
    {
      article_id: 5,
      amountOfLike: 0
    }
  ];
  constructor() { }
  getLikes() {
    return this.likes;
  }

}
