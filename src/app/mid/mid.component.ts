import { Component, OnInit } from '@angular/core';
import { MidService } from '../mid.service';
@Component({
  selector: 'app-mid',
  templateUrl: './mid.component.html',
  styleUrls: ['./mid.component.css']
})
export class MidComponent implements OnInit {

  constructor(private MidService : MidService) {

  }
  
 content : string = "";



  ngOnInit() {
 
  }

 onSearchChange(value : string){
 	this.MidService.emit(value);
 }


}
