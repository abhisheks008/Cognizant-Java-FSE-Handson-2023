import { VariableAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    flag = "1";

  constructor(private router: Router,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {

    // fill the code
    this._Activatedroute.queryParams.subscribe(params => {
        this.flag = params['flag'];
    });

  }

}
