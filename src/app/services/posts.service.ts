import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPost() {
    return [
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
}
