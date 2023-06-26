### Create Information Dashboard - With State And Props


**Share Market Investments**



**Problem Specification**

You have been asked to create a React application that displays the Information dashboard of client investments in the share market with simple state and props along with component composition.

Your application should have the following functionalities: 

-  Create a file named Info.js.
-  The application should have three components. "Info", "HealthCare", and "TeleCom" to display the Information dashboard of client investments in the share market.

**HealthCare Component**

- The application should have a HealthCare component that displays the Information dashboard of clients' investments in the Healthcare share market.
- Declare 3 state variables.
                  - stockNotation
                  - quantity
                  - stockValue

- Assign the props value (that starts with hc_ in the data variable which can be found in the index.js file) to the respective state variables. Props is sent with the name 'client'

-  Create the h2 tag with the heading Client's Investment in HealthCare within the div tag of the render method in the HealthCare component.
-  Display the values of state variables in the table format. (Refer to Screenshot)
-  Create a table with the border value 1.
-  The 1st row of the table must contain the th tags with the headings- Stock Notation, Quantity, Stock Value and Total Value
-  The 2nd row of the table must contain the td tags with the assigned values of respective state variables.
```
<tr>

    <td>{healthcare_stockNotation}</td>

    <td>{healthcare_quantity}</td>

    <td>{healthcare_stockValue}</td>

    <td>{healthcare_totalValue}</td>

</tr>
```
- Calculate the total value and display it as part of the table using the formula
                              Total value = quantity * stockValue  

**TeleCom Component**

-  The application should have a Telecom component that displays the Information dashboard of clients' investments in the Telecom share market.
-   Declare 3 state variables.
                  - stockNotation
                  - quantity
                  - stockValue

    Assign the props value (that starts with tc_ in the data variable which can be found in the index.js file) to the respective state variables. Props is sent with the name 'client'

- Create the h2 tag with the heading Client's Investment in TeleCom within the div tag of the render method in the TeleCom component.
- Display the values of state variables in the table format. (Refer to Screenshot)
-  Create a table with the border value 1.
-  The 1st row of the table must contain the th tags with the headings- Stock Notation, Quantity, Stock Value and Total Value
-  The 2nd row of the table must contain the td tags with the assigned values of respective state variables.
```
<tr>

    <td>{telecom_stockNotation}</td>

    <td>{telecom_quantity}</td>

    <td>{telecom_stockValue}</td>

    <td>{telecom_totalValue}</td>

</tr>
```
- Calculate the total value and display it as part of the table using the formula
                               Total value = quantity * stockValue

**Info Component**

-  The application should have an Info component that displays the Information dashboard of clients' investments in the Telecom share market.
-  Create the h1 tag with the heading 'Share Market Investments' within the div tag of the render method in the Info component.
-  Create the h2 tag with the heading 'Hello Client!' followed by the h1 tag.
-  Render the output of the HealthCare component as component composition.
-  Render the output of the Telecom component as component composition

**Requirements**

Your solution should meet the following requirements: 

-  Your application should be built using React version 16.6.3.
-  Your application should use state and props to display Clients' Investment details in the share market in the 'Info ' component.
-  Your application should use the class component for the 'Info' component, 'HealthCare' component and 'TeleCom' component.

**Constraints**

You have the following constraints:

- You may not use any third-party libraries or frameworks.
- Your solution should be well-organized, well-documented, and easy to understand.
- Upload only the required files in the zip format for a successful evaluation.


**Screenshot:**

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/d26e91cc-da92-4d76-ba1d-d57f4de5ae9b)


**NOTE:**

ALL THE MENTIONED VARIABLE NAMES MUST BE USED AS IT IS INCLUDING CASE-SENSITIVITY.

- The .css  file is already given in the template and imported the same.
- The index.js file is already given as a part of template.
- Do not make any changes in the given template.
