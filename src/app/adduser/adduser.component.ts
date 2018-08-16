import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms'


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  taskForm:FormGroup;

  constructor() { }

  ngOnInit() {
  }

  clear(){}

  SaveTask(value){}
}
