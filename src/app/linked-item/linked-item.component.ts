import { Component, OnInit, Input } from '@angular/core';
import { Bookmark } from '../models/Bookmark';
import { BookmarksService } from'../services/bookmarks.service'

@Component({
  selector: 'app-linked-item',
  templateUrl: './linked-item.component.html',
  styleUrls: ['./linked-item.component.css']
})
export class LinkedItemComponent implements OnInit {
  @Input() link: Bookmark
  constructor( private bookmarksService:BookmarksService) { 
    this.link = {
      id: 1,
      name: "",
      url: ""
    }
  }

  ngOnInit(): void {
  }

  addToBookmarks(bookmark: Bookmark): void {
    // Invoke addToBookmarks() from the Bookmark service below
    this.bookmarksService.addToBookmarks(bookmark)

    alert("Added!");
  }

}
