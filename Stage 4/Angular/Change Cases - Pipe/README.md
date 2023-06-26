### Change Cases - Pipe


**Problem Specification**

You are assigned the task to develop an Angular application to work with PIPES to show the details of Students in a table

Student Database - A School needs a web application, and for that you have to develop an application using angular. You are provided with the AppComponent and Student model class. The requirement is to show the students details in UI using pipes.

**Instructions**

- Create a new Angular project using the Angular CLI version 12.1.4.
- The application should have a main 'AppComponent' that serves as the entry point to the application.
- You are provided with Student model Class, which is already given as part of the code skeleton
- The AppComponent should design the web page using the constraints given in the AppComponent - HTML File.
- Open the app.component.ts file, and import the Student Model Class. Then assign the values for the student array as mentioned in the AppComponent - TS File
- Run the application using the Angular CLI.
- View the application in your browser to ensure that the web page is designed as shown in the screenshot.


**AppComponent Specification**

**AppComponent - HTML File**

Refer to the screenshot and create the UI based on the requirements listed below

- The AppComponent should display the student details in tabular format.
- Create a table element, the first row of the table should contain the heading Name, Register Number and Age respectively.
- By using the ngFor directive, iterate the student details which are stored in the array variable student in the app.component.ts file. [refer to AppComponent - TS File]
- While iterating the student array, change all the Name to Upper Case using the pipe function 'uppercase' and change all the Register Number to Lower Case using the pipe function 'lowercase' respectively.


**AppComponent - TS File**

- Import the Student Model Class in the app.component.ts file
- student : any; - is an array variable given as part of the code skeleton.
- Change the student variable type "any" to "Student[ ]"
- Then assign the values for the student array as
```
        [new Student('Sam' , 'RS200' , 21 ),

          new Student('John' , 'ST001' , 22 ),

          new Student('Lilly' , 'UV023' , 20 ),

        ]
```

**Student Class Specification**

The Student model class is already provided as part of the code skeleton.

**Class : Student**

| **Attribute**      | **Type** |
|--------------------|----------|
| name               | String   |
| registrationNumber | String   |
| age                | number   |

 

Screenshot :

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/dea87cf2-ae35-44d1-8928-4dc998e6b86f)




**Note :** 
In the grading process, styles are not included.
