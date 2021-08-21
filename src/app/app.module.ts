import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostItemComponent } from './post-item/post-item.component';
import { HistoryComponent } from './history/history.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DirectoryComponent } from './directory/directory.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { LinkedItemComponent } from './linked-item/linked-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CreatePostComponent } from './create-post/create-post.component'

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostItemComponent,
    HistoryComponent,
    NavBarComponent,
    DirectoryComponent,
    BookmarksComponent,
    LinkedItemComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
