import { Component } from '@angular/core';

interface flightClass{
    name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Flight Reservation Form';
  status ="";

  flightClassList:FlightClass[] = [
    //Fill code here
    { name: 'First Class' },
    { name: 'Second Class' },
    { name: 'Economy Class' },
    { name: 'Bussiness Class' }
  ];
  
  //status: string = '';

  showStatus() {
    this.status = 'Flight ticket has been booked successfully';
  }
}

export class FlightClass {
  
  name:string;
  
  constructor( name:string) {
    this.name=name;
  }
}
