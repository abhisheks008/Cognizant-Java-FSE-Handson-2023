### Rent A Home - Routing with Query param


**Problem Specification**

You are assigned the task to develop a RentAHome application. This application is for owners who are renting their homes and tenants who are searching for rented accommodation.
To achieve this you are provided with AppComponent and HomeComponent. Based on the type of user, the home component should dynamically render the UI.

**Instructions**

- Create a new Angular project using the Angular CLI version 12.1.4.
- Generate a new component called HomeComponent using the Angular CLI.
- The application should have a main 'AppComponent' that serves as the entry point to the application.
- The AppComponent should contain 2 hyperlinks as "Rent a Home" and "Search Home". While click-on the hyperlinks HomeComponent should dynamically render the UI for Rent A Home (or) Search Home.
- This rendering should happen using the QueryParams Routing. [Refer to the Table in AppComponent HTML file]
- Open the app.module.ts file and create the routing path for the HomeComponent. The path value for a HomeComponent should be "home".
- Open the home.component.html file and design the web page using the constraints given in the HomeComponent - HTML file. Those form elements should be embedded within the <ng-template> </ng-template> element.
- Open the home.component.ts file, import the Activated Route from @angular/router and write the required code to do the routing using queryParams.
```
                this._Activatedroute.queryParams.subscribe(params => {

                       // Fill the required code for options

                });
```


- Run the application using Angular CLI.
- View the application in your browser and verify that the hyperlink in AppComponent navigates properly to Rent a Home (or) Search Home in HomeComponent.


**AppComponent Specification**

**AppComponent - HTML File**
- Design the AppComponent UI with hyperlinks as "Rent a Home" and "Search Home"
- Use the QueryParams with a flag to dynamically render the UI. If the flag is 1, then HomeComponent UI should display the Rent a Home Page. If the flag is 2, then display Search Home page.

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/16eed1a1-74bb-4ec0-90ef-6dd39031dd68)

**HomeComponent Specifiaction**

**HomeComponent - HTML File**

**Screenshot1** - Rent A Home

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/32c96ce9-7a60-46e2-acba-b2f3ad1193a9)

**Design constraints for Rent a Home - refer screenshot1**

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/e72efc35-92c0-4e14-8f30-bd33391d3020)

**Screenshot2 - Search Home**

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/191e72a2-e79c-4116-b97a-55405099e706)

**Design constraints for Search Home - refer screenshot2**

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/98fdbb7c-c40b-4521-98b4-8878f49a781b)


Note : In the grading process, styles are not included.















