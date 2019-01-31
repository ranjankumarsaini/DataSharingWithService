import { Component, OnInit } from '@angular/core';
import{DataService} from'../dataservice';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {
  message: string;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message=>this.message=message);
  }
newMessage(){
  this.data.changeMessage("Hello Ranjan");
}
}