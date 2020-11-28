import { Component, OnInit } from '@angular/core';
import { MidService } from '../mid.service';
@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {

 constructor(private MidService : MidService) { }
   display = ""
  ngOnInit() {
  	this.MidService.open.subscribe((d)=>{
  		this.display = d;
  	})
  }
}
