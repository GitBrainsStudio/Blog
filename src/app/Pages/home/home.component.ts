import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostPreviewHttp } from 'src/app/Models/http-models/post-preview.http';
import { OpacityAnimation } from 'src/app/Models/opacity-animation';
import { Project } from 'src/app/Models/project';
import { MdDataService } from 'src/app/Services/md-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ OpacityAnimation ]
})
export class HomeComponent implements OnInit {

  constructor(private dataService : MdDataService) { }

  ngOnInit(): void {
    this.projects$ = this.dataService.projects();
    this.postPreviews$ = this.dataService.postPreviews();
  }

  postPreviews$ : Observable<PostPreviewHttp[]>
  projects$ : Observable<Project[]>
}
