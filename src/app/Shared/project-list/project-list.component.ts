import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project, ProjectRow } from 'src/app/Models/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() data : Observable<ProjectRow[]>


}



