import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../models/Bookmark';
// Import the bookmark service here
import { BookmarksService } from'../services/bookmarks.service'

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  bookmarkList: Bookmark[] = [];

  // Inject the Bookmark service into the constructor below
  constructor(private bookmarksService: BookmarksService) { }

  ngOnInit(): void {
    // Invoke getBookmarks() from the Bookmark service, and set its return value to bookmarkList
    this.bookmarkList = this.bookmarksService.getBookmarks()
  }

  clearBookmarks(): void {
    // Invoke clearBookmarks() from the Bookmark service below
    this.bookmarksService.clearBookmarks()
    // Then, clear the local bookmarkList array
    this.bookmarkList = []

    alert("Cleared!");
  }

  deleteBookmark(bookmark:Bookmark): void {
    this.bookmarkList = this.bookmarksService.deleteBookmark(bookmark)
    alert("Deleted!");
  }

}
