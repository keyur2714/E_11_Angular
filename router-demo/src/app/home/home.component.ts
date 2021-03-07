import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  msg : string = '';

  constructor(private activateRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (params)=>{
        this.msg= params.msg;
      }
    )
  }

}
