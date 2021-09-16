import { Component } from '@angular/core';


@Component({
  selector: 'activity-ideas-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Random Activity Ideas Generator';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'activity', icon: 'view_list', title: 'Random Activities'}
  ]
}
