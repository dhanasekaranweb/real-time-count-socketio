import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

	private socket = io("http://localhost:3000")	
  constructor() { }

  getCount = () => {
  	const count = new Observable((observer) => {
  		this.socket.on('count',(data) => {
  			observer.next(data)
  		});
  	})

  	return count;
  }

}
