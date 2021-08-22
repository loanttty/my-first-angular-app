import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  title: string = ""
  body: string = ""
  
  @Output() addPost: EventEmitter<any> = new EventEmitter()

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    const post = {
      title: this.title,
      body: this.body,
      vote: 1
    }

    this.postsService.addPost(post)
    alert("Post added!")

    this.title = ""
    this.body = ""

  }

}
