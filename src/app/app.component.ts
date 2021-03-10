import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-shopping';
  a=100;
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  today = new Date();
  time = new Observable<string>(observer=>{
setInterval(()=>{
  observer.next(new Date().toLocaleString())
},1000)
  });
}
