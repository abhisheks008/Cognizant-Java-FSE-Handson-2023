### Flight Reservation Form - (Dynamic dropdown using ngFor)



**Problem Specification**

One of the famous travel agencies would like to open a private flight reservation platform. In their platform, they would like to create the flight class type dropdown as a dynamic dropdown. Help them to design the platform using angular.

**Instructions**

- Create a new Angular project using the Angular CLI version 12.1.4.
- The application should have a main 'AppComponent' that serves as the entry point to the application.
- The AppComponent should design the web page using the constraints given in the AppComponent - HTML file.
- On the web page, options for the Flight Class Type should not be written inside the select tag. It should be scripted in app.component.ts file in an array format using the array variable flightClassList.
- Open app.component.ts file, and create objects for the FlightClass as mentioned in the AppComponent - TS file
- Then finally display the booking status using the showStatus function.
- Run the application using the Angular CLI.
- View the application in your browser to ensure that the web page is designed as shown in the screenshot and that the dynamic dropdown is working properly.


**AppComponent Specification**

**AppComponent - HTML file**

- Design the AppComponent by creating the heading "Flight Reservation Form" using the h1 element
- Create the form elements by using the table below.

| **Label**         | **Element Id and Name** | **Control Type** |
|-------------------|-------------------------|------------------|
| Name              | name                    | Text             |
| Number of Tickets | tickets                 | Number           |
| Departure city    | departure               | Text             |
| Destination City  | destination             | Text             |
| Flight Class Type | flightClass             | Select           |
| Book Ticket       | submit                  | Button           |

- In the Flight Class Type - Use dropdown option "Select Flight Class Type" and by using directives invoke the flightClassList from the app.component.ts file and iterate the list to display the options.
- The Book Ticket button should invoke the showStatus( ) function in app.component.ts file and display the status in the paragraph element.

**Note:** Do not hard code the options of Flight Class List in HTML file.

**AppComponent - TS file**

- flightClassList : FlightClass[ ] = [ ] is an array variable given as a part of the code skeleton.
- In the flightClassList create an object for the FlightClass[] as "First Class", "Second Class", "Economy Class" and "Bussiness Class" as per the order.
- After the "Book Ticket" button click, the showStatus() should be invoked.
- This function should display the booking status as "Flight ticket has been booked successfully".


**Screenshot 1:**

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/c77f453b-f709-4a65-9c0b-564cee6cd0c5)


**Screenshot 2:**

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/53c6bf9c-0c05-4178-9c59-e5bf51b46042)


**Note :** 

In the grading process, styles are not included.
