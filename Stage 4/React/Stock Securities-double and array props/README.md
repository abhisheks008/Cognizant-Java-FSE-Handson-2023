### Stock Securities-double and array props

**Problem Specification**

You have been asked to create a React application that displays the details of the current stock statistics with different datatype values as per the client's need using props.

Your application should have the following functionalities:

- Create a file named Stock.js.
- The application should have a Stock component that displays the data sent as props with the headings Stock Symbol, Market Price and Options respectively.
- Create an h1 tag with Stock Securities as the heading within the div tag of the render method in the Stock Component.
- While rendering the Stock component in the index.js file, the following three data of different types need to be sent as ONE props data using "stocks" as the variable name and NOT as separate props data.
```
                     stockSymbol - 'A'
                     marketPrice - 1118.55 
                     options - array of two values (already given in the code template of index.js)
```
- Send the above three data by rendering the Stock component as
                      `<Stock stocks= {{name1:value1, name2:value2, name3}}>`                                     

- The three variables given below are received through props and have to be displayed (CASE-SENSITIVE) under the heading h3 tags of Stock Symbol, Market Price and Options respectively followed by the h1 tag in the Stock component. (Refer to the screenshot below)
```
                              stockSymbol 

                              marketPrice 

                              options 
```

**Requirements**

Your solution should meet the following requirements: 

- Your application should be built using React version 16.6.3.
- Your application should use props for displaying the details of the stock's statistics of the different datatype in the 'Stock' component.
- Your application should use a class component for the 'Stock' component.

**Constraints**

You have the following constraints:

 -  You may not use any third-party libraries or frameworks.
 -  Your solution should be well-organized, well-documented, and easy to understand.
 -  Upload only the required files in the zip format for a successful evaluation.


**Screenshot:**

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/5526c09f-3d8c-4fdc-9773-f27c87f740df)



Note:

ALL THE MENTIONED VARIABLE NAMES MUST BE USED AS IT IS INCLUDING CASE-SENSITIVITY.

- The .css  file is already given in the template and imported the same.
- The index.js file is already given as a part of template.
- Do not make any changes in the given template.
