import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HomeComponent } from './Pages/home/home.component';
import { PostComponent } from './Pages/post/post.component';
import { PostReaderComponent } from './Shared/post-reader/post-reader.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { TopMenuComponent } from './Layout/top-menu/top-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    FooterComponent,
    HomeComponent,
    PostComponent,
    PostReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
