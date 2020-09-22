import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, timeout } from 'rxjs/operators';
import { PostPreviewHttp } from '../Models/http-models/post-preview.http';
import { Post } from '../Models/post';
import { PostPreview } from '../Models/post-preview';
import { Project } from '../Models/project';







@Injectable({providedIn:"root"})
export class MdDataService
{
    constructor(private http: HttpClient)
    {
        
    }

    postPreviews() : Observable<PostPreviewHttp[]>
    {
       return this.http.get<PostPreviewHttp[]>('./assets/mds/posts.json');
    }

    projects() : Observable<Project[]>
    {
        return this.http.get<Project[]>('./assets/mds/projects.json');
    }


}