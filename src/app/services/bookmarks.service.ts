import { Injectable } from '@angular/core';
import { Bookmark } from '../models/Bookmark';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {
  bookmarkList: Bookmark[] = []

  constructor() { }

  getBookmarks() {
    return this.bookmarkList
  }
  addToBookmarks(bookmark: Bookmark) {
    const existingBookmark = this.bookmarkList.filter(bookmarkInList => bookmarkInList.id === bookmark.id)
    if (existingBookmark.length > 0) {
      return this.bookmarkList
    } else {
      this.bookmarkList.push(bookmark)
      return this.bookmarkList
    }
  }
  deleteBookmark(bookmark: Bookmark) {
      this.bookmarkList = this.bookmarkList.filter(bookmarkInList => bookmarkInList.id !== bookmark.id)
      return this.bookmarkList
  }
  clearBookmarks() {
    this.bookmarkList = []
    return this.bookmarkList
  }
}
