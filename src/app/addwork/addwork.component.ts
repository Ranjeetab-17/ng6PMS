import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms'

@Component({
  selector: 'app-addwork',
  templateUrl: './addwork.component.html',
  styleUrls: ['./addwork.component.css']
})
export class AddworkComponent implements OnInit {

  taskForm:FormGroup;
  myTask:any;


  constructor() { }

  ngOnInit() {
  }

  SaveTask(value):void {

  }

  clear(){
    
  }

}
