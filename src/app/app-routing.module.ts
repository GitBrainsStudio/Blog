import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';


const routes: Routes = [
  {
    path: '', component: PostsListComponent
  },
  {
    path: 'post/:md', component: PostDetailsComponent
  },
  {
    path: '**', component: PostsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
