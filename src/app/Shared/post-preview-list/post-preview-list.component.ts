import { Component, Input, OnInit } from '@angular/core';
import { PostPreviewHttp } from 'src/app/Models/http-models/post-preview.http';

@Component({
  selector: 'app-post-preview-list',
  templateUrl: './post-preview-list.component.html',
  styleUrls: ['./post-preview-list.component.css']
})
export class PostPreviewListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  @Input() data : PostPreviewHttp[];

}
