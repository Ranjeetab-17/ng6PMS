import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  position:any;  
  constructor(public snacbars:MatSnackBar) { 
    this.position="left";

    this.snacbars.openFromComponent(SnacBarComponent,{
      duration:5000
    });
  }

  ngOnInit() {
  }

}

@Component({
   selector:'snack-bar-component-example-snack',
   templateUrl:'./SnacBar.html'
})

export class SnacBarComponent{}
