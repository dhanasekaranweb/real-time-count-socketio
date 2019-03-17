import { Component,OnInit } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  private count;

  constructor(private socketservice:SocketService){}

  ngOnInit(){
  	this.socketservice.getCount().subscribe(message => {
      this.count = message.count
      console.log(message)
    })
  	
  }
}
