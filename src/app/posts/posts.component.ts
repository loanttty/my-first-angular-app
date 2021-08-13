import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title: string = "Posts";
  posts: Post[] = []

  constructor() { }

  ngOnInit(): void {
    this.posts = [
      {
        id: 1,
        title: "Hello",
        body: "How are you doing today?",
        vote: 1,
      },
      {
        id: 2,
        title: "I'm good",
        body: "Have just recovered from the flu",
        vote: 1,
      }
    ]
  }

  hidePost(post:Post):void {
    this.posts = this.posts.filter(p => p.id !== post.id)
  }

}
