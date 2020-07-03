import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPreviews();
    this.getProjects();
  }

  getPreviews()
  {
    this.http.get('./assets/mds/posts.json').subscribe((data:any[]) => { this.posts = data;  });
  }

  getProjects()
  {
    this.http.get('./assets/mds/projects.json').subscribe((data:any[]) => { this.projects = data; });
  }

  posts:any[];
  projects:any[];

}
