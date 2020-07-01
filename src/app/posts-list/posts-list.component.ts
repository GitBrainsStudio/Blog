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
  }

  getPreviews()
  {
    this.http.get('./assets/mds/preview.json').subscribe((data:any[]) => { this.previewList = data; console.log(data) });
  }

  previewList:any[];

}
