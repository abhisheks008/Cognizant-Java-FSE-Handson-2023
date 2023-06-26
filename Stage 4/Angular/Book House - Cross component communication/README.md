### Book House - Cross component communication


**Problem Specification**

You are assigned the task to develop an Angular application to perform cross-component communication by using a service. You are provided with BookComponent, CustomerComponent, Book model, and BookService class. BookComponnet should communicate with CustomerComponent through service. To implement this, Whenever book quantity gets updated, status should be emitted and it should display in the Customer component.

**Instructions**

- Create a new Angular project using the Angular CLI version 12.1.4.
- Generate the components BookComponent and CustomerComponent, as well as the classes BookService class and Book model class using the Angular CLI respectively.
- The application should have a main 'AppComponent' that serves as the entry point to the application.
- You are provided with Book model Class, which is already given as part of the code skeleton
- The AppComponent should contain the selector values of BookComponent and CustomerComponent to display the respective UI.
- Open the book.component.html file and design the web page using the constraints given in the BookComponent - HTML File.
- Open the book.component.ts file, and write the code for updating the book quantity as mentioned in the BookComponent - TS File.
- Open the customer.component.html file and design the component to display the book details in tabular form as mentioned in the CustomerComponent - HTML File.
- Open the customer.component.ts file, and write the code to get the book details as mentioned in the CustomerComponent - TS File.
- Open the service class book.service.ts file, this file contains a bookList array as part of the code skeleton. Then write business logic for updation and display the book details and status as mentioned in the BookService Class Specification.
- Run the application using Angular CLI.
- View the application in your browser and ensure that the web page is designed as shown in the screenshot and check all the functionalities working properly.


**AppComponent Specification**

**AppComponent - HTML File**

- In order to display the user interface for the BookComponent and CustomerComponent, their selector values need to be added to the AppComponent.


**BookComponent Specification**

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/4d130553-e53b-4f20-ade2-18eec35ae0af)

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/d4d35d08-d622-4253-879d-f930f8b52de5)

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/9608eb99-9df6-4bed-95aa-eb4d86bf1929)

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/97537965-abc2-42cf-a4ee-8187f949ea0d)

**CustomerComponent - HTML File**

Refer to the screenshot2 and create the UI based on the requirements listed below.

- The CustomerComponent should display book details in tabular format.
- Create a table element, the first row of the table should contain the heading as ISBN, Book Name, Category, Price and Quantity respectively.
- The book details should be fetched from BookService class and stored in an array variable in customer.component.ts file. [refer to CustomerComponent - TS File]
- Now iterate the array variable in table row (HTML file) and display the book details in the table.
- As per the screenshot display the update status in the div tag.

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/a7aa1378-a606-4292-ad14-07dad6384fff)

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/5a4da8ca-4a25-438b-8849-e875ff4579b3)

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/ae9ae5d1-a60a-486d-bcf8-bc841d7d32b2)






