import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  newPosts: Post[] = []

  constructor(private http:HttpClient) { }

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>("http://jsonplaceholder.typicode.com/posts?_limit=8")
  }

  getNewPosts(): Post[] {
    return this.newPosts
  }

  addPost(post: Post): void {
    this.newPosts.push(post)
  }
}
