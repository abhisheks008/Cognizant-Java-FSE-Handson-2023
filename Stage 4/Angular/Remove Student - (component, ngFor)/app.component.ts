import { Component } from '@angular/core';
import { Student } from './Student.model';
//IMPORT STUDENT MODEL CLASS

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  student: any; //Assign the Student details to the variable student which is type Student[].
  title = 'Student-db';
  
  deleteStudent(index : number){
      this.student.splice(index, 1);
  }
}
