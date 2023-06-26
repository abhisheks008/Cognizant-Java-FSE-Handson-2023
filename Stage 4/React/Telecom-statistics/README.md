### Telecom-statistics



**Problem Specification**

You have been asked to create a React application for Stock Securities, that displays the current statistics of the commodities on their web page using JSX.

Your application should have the following functionalities:

- Create a file named ShareMarket.js.
- The application should have two components "ShareMarket" and "Telecom" to display the current statistics.


**ShareMarket Component**

-  The application should have a parent component as ShareMarket that displays the current date and statistics.
-  Write a code to find the Current Date.
-  Create an h1 tag with the heading Share Market Statistics within the div tag of the render method in the ShareMarket Component.
-  Render the following details in an h3 heading tag followed by the h1 tag. (Refer to Screenshot 2)
                 o     **"Commodity Report Dated: [Current date]"**

- Render the Telecom component.

**Telecom Component**

-   Create a child component Telecom that displays the statistics report of the current commodities.
-   Define the following variables to a const type
```  
                commodity='Telecom';

                price=3000;

                change=200;

                percentage=3;   
```
-   Create a table with a border value of 2 within the div tag of the render method in the Telecom Component. (Refer to Screenshot 1)
-   The 1st  row of the table must contain the td tags with the headings- Commodity, Price, Change and Change %.
-   The 2nd row of the table must contain the td tags with the respective values of the defined variables.


**Requirements**

Your solution should meet the following requirements: 

-  Your application should be built using React version 16.6.3.
-  Your application should use the function component for the 'ShareMarket' component and the class component for the 'Telecom' component.

**Constraints**

You have the following constraints:

-   You may not use any third-party libraries or frameworks.
-   Your solution should be well-organized, well-documented, and easy to understand.
-   Upload only the required files in the zip format for a successful evaluation.

Screenshot 1

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/6af57637-107e-4784-bcf8-038ca11af919)


Screenshot 2

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/0b842afa-8fe2-4d48-bcfc-b59ccbb1edb5)


**Note:**

- The .css  file is already given in the template and imported the same.
- The index.js file is already given as a part of template.
- Do not make any changes in the given template.
