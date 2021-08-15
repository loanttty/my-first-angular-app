import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { PostsService } from '../services/posts.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title: string = "Posts";
  posts: Post[] = []

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPost()
  }

  hidePost(post:Post):void {
    this.posts = this.posts.filter(p => p.id !== post.id)
  }

}
