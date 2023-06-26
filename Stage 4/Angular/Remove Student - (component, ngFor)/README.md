### Remove Student - (component, ngFor)


**Problem Specification**

You are assigned the task to develop an Angular application to work with Directive and Bindings to show and delete the details of the Students in a table

Student Database - A School needs a web application, and for that you have to develop an application using angular. You are provided with the AppComponent and Student model class. The requirement is to show and delete the details of the Student in a table.

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
- To delete the student report: On clicking the row of the table, the respective row should be deleted. [Refer to screenshot2]


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

| Attribute | Type |
| --- | --- |
| name | string | 
| registerNumber | string |
| age | number |

**Screenshot :1**

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/d20fc26f-779a-44f4-9535-cacd73601c6a)


**Screenshot 2 : On clicking 3rd row(John), it gets deleted.**

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/66fe0545-dbd8-4fd6-b9da-4556e054cdce)


**Note :  In the grading process, styles are not included.**

