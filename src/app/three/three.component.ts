import { Component, OnInit } from '@angular/core';
import { MidService } from '../mid.service';
@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

 constructor(private MidService : MidService) { }
   display = ""
  ngOnInit() {
  	this.MidService.open.subscribe((d)=>{
  		this.display = d;
  	})
  }

}
