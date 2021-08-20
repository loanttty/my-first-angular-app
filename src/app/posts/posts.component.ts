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
    this.postService.getPost().subscribe( res => {
      for (let index = 0; index < res.length; index++) {
        const post = res[index]
        post["vote"] = 1
      }
      this.posts = res
    })
  }

  hidePost(post:Post):void {
    this.posts = this.posts.filter(p => p.id !== post.id)
  }

}
