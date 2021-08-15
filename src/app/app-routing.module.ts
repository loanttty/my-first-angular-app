import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component'
import { PostsComponent } from './posts/posts.component'
import { DirectoryComponent} from './directory/directory.component'
import { BookmarksComponent } from './bookmarks/bookmarks.component'

const routes: Routes = [
  {path: '',component:PostsComponent},
  {path: 'history',component:HistoryComponent},
  {path: 'usefulLinks',component:DirectoryComponent},
  {path: 'bookmarks',component:BookmarksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
