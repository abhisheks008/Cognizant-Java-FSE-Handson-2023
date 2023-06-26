### EB Connection - Switch Enhancements & Compact Number Formatting

EIA is major responsible for the electricity bill generation all over the United States of America. They are traditionally generating the bill. So, they have planned to automate the bill generation. You are their software consultant, have been approached to develop software to implement the functionality using Java 11/12 concepts to generate the electricity bill.  

**COMPONENT SPECIFICATION: UserInterface class**

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/7368dd11-3303-4bc7-a8a0-60ae8dc53d03)

**Note:** Include **Enhanced switch** concept in checkConnectionType() method and use Compact number formatting concepts in  longNumberFormat() and shortNumberFormat() method in Java 11/12.

Formula to calculate the bill amount in the ElectricityBill class: 

**Reading value = currentReadingValue - previousReadingValue**

**Bill amount = Reading value * Price**

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/08bc35a0-d672-4c34-9e34-739970480f00)

 Example:

Previous Reading Value = 123456 

Current Reading Value = 234567 

Reading value = 234567 - 123456 = 111111 (Since the reading value is > 200, the unit price is 5) 

Bill amount = 111111 * 5 = 555555

 

Please Note: 

The main method is already provided as a part of code skeleton.

In the UserInterface class, 

- If the checkConnectionType method returns "Valid Connection" then display the Bill Amount as shown in the sample output.
- If the checkConnectionType method returns "Invalid Connection" then terminate the program. 

Note: 

- In the Sample Input / Output provided, the highlighted text in bold corresponds to the input given by the user, and the rest of the text represents the output. 
- You are free to change the code in the main method for testing purposes. 
* Ensure to follow the object-oriented specifications provided in the question description. 
- Ensure to provide the names for classes, attributes, and methods as specified in the question description. 
- Adhere to the code template, if provided.
- Please do not use System.exit(0) to terminate the program.


Sample Input/Output 1:  

Enter the Connection ID : 

987987 

Enter the Connection Type : 

SinglePhase 

Enter the Previous Reading : 

123456 

Enter the Current Reading : 

234567 

Valid Connection 

Bill Amount (LongNumberFormat) : 556 thousand 

Bill Amount (ShortNumberFormat) : 556K 

  

 

Sample Input/Output 2: 

Enter the Connection ID : 

123234 

Enter the Connection Type : 

TwoPhase 

Enter the Previous Reading : 

23444 

Enter the Current Reading : 

12334 

Invalid Connection 

