import { Injectable } from '@angular/core';
import {Output, EventEmitter} from '@angular/core'
@Injectable({
  providedIn: 'root'
})
export class MidService {

  @Output() open: EventEmitter<string> = new EventEmitter();

  constructor() { }

  emit(value : string){
  	this.open.emit(value);
  }


}
