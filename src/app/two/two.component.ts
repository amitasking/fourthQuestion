import { Component, OnInit } from '@angular/core';
import { MidService } from '../mid.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  constructor(private MidService : MidService) { }
   display = ""
  ngOnInit() {
  	this.MidService.open.subscribe((d)=>{
  		this.display = d;
  	})
  }

}
