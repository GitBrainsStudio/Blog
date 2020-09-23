import { Component, Input, OnInit } from '@angular/core';
import { PostPreviewHttp } from 'src/app/Models/http-models/post-preview.http';
import { RefreshService } from 'src/app/Services/refresh.service';

@Component({
  selector: 'app-post-preview-list',
  templateUrl: './post-preview-list.component.html',
  styleUrls: ['./post-preview-list.component.css']
})
export class PostPreviewListComponent implements OnInit {

  constructor(public refreshService : RefreshService) { }

  ngOnInit(): void {
  }

  @Input() data : PostPreviewHttp[];


}
