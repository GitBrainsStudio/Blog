import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {

  isLoad:boolean;
  pathToFile:string;

  constructor(private activatedRoute:ActivatedRoute, private router:Router) { 
    this.routeDetection(this.activatedRoute.snapshot.params['md']);
  }

  routeDetection(mdParam)
  {
    if (mdParam != undefined) this.pathToFile = 'assets/mds/' + mdParam + '.md'; 
    else this.onError();
  }



  onLoad()
  {
    this.isLoad = true;
  }

  onError()
  {
    this.router.navigate(['/']);
  }

}
