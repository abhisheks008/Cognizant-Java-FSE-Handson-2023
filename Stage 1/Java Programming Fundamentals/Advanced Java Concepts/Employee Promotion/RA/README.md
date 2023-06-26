### Employee Promotion
Neyon software limited has decided to give promotions to their employees based on their salary. The management has fixed a salary limit for the promotion. The management needs a report on the number of employees who have met the required condition.

Example: If the salary limit set by the management is 40000, then the employee whose salary is greater than or equal to 40000 should be considered for the count.

You being their software consultant have been approached to develop an application which can be used for managing their requirement. You need to implement a java program using multi-threading to find the count of employees as their requirement. Employee details should be obtained from the user on the console.

**Component Specification: Employee (Model Class)**

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/f7bf0ac7-bff4-4b92-9cba-80d076240a14)

**Requirement 1:** Find the number of employees whose salaries are greater than or equal to the salary limit value set by the management.

**Component Specification: Management (Thread Class)**

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/1f31d659-cb92-4202-8d0b-16aefe90df08)

Create a class called Main with the main method and perform the given tasks:

- Get the inputs like the number of employees,employee details, number of times to be searched and the salary limit from the user.

The complex details will be in the form of a String in the following format

empName:empId:empSalary

- Parse the employee details and set the values for all the attributes in the Employee class using a constructor.

- Populate the Employee objects to the List.

- Get the number of times the salary limit value is to be entered by the user.

- Create a Management thread by passing the salary limit and the List created and then invoke the thread.

- Create a Management array and display the output as shown in the sample input/output

Note:

In the Sample Input / Output provided, the highlighted text in bold corresponds to the input given by the user and the rest of the text represents the output.
Ensure to follow the object oriented specifications provided in the question description.
Ensure to provide the names for classes, attributes and methods as specified in the question description.

Adhere to the code template, if provided.
Sample Input 1:
Enter the number of employees
4

Enter the employee details

Peter:E6322:65000

Alan:E6323:35000

Jeva:E6324:87000

Sam:E6325:40000

Enter the number of times salary limit to be searched

3

Enter the salary limit to be searched

40000

Enter the salary limit to be searched

75000

Enter the salary limit to be searched

30000

Sample Output 1:

40000.0 : 3

75000.0 : 1

30000.0 : 4



