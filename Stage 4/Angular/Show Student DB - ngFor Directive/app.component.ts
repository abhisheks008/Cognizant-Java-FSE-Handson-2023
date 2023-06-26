import { Component } from '@angular/core';
//IMPORT STUDENT MODEL CLASS

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  student:any ; //Assign the Student details to the variable student which is type Student[].
  title = 'Student-db';
}
