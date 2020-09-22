import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  isLoad:boolean;
  pathToFile:string;

  constructor(private activatedRoute:ActivatedRoute, private router:Router) { 
    this.routeDetection(this.activatedRoute.snapshot.params['md']);
  }

  ngOnInit(): void {
    
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
