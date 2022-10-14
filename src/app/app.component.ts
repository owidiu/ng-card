import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import examData from './exam_data.json';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'card-angular';
  data:any = examData;
  
}
