import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { PostComponent } from './Pages/post/post.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'post/:md', component: PostComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
