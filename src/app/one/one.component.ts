import { Component, OnInit } from '@angular/core';
import { MidService } from '../mid.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(private MidService : MidService) { }

  display = ""
  ngOnInit() {
  	this.MidService.open.subscribe((d)=>{
  		this.display = d;
  	})
  }

}
