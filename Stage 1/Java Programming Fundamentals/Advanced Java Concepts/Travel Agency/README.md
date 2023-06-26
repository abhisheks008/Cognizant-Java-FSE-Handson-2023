### Travel Agency

Parveen agency, a registered IRCTC agent can book any number of e-Tickets. For Sleeper(SL) and Chair(2S), he earns a commission of Rs.60/passenger whereas, for First class AC(1A), Second class AC(2A) and Third class AC(3A) he earns Rs.100/passenger. The owner of Parveen agency decides to automate to calculate the commission he earned so far. Help him to calculate using Lambda expressions.

**Requirement 1**: Calculate the Commission amount

The owner wants to calculate the commission amount based on the class type.

**Component Specification: Ticket(POJO class)**

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/cdde4214-25f3-4d25-8e75-9290ad5cf9b5)

**Component Specification: CommisionInfo Interface - This is a Functional Interface.**

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/5af3ca92-0aef-4c45-b54e-2a76453dfbaa)

**Component Specification: UserInterfaceClass**

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/51bd0647-f134-47bd-a468-bd685810644a)

The UserInterface class contains the main method.

In the main method,

- Get the passengers count and based on the count get the ticket details like: pnrNo, passengerName, seatNo, classType and ticketFare of each passenger.
- Create the Ticket object as an array.
- Invoke the static method generateCommissionObtained(). It returns a CommissionInfo object.
- Capture the CommissionInfo object in a reference variable.
- Using the reference of CommissionInfo, invoke the calculateCommissionAmount by passing the Ticket object as a parameter and capture the commission amount which is returned.
- The output should be displayed as shown in the sample output.

Note:

- In the Sample Input / Output provided, the highlighted text in bold corresponds to the input given by the user and the rest of the text represents the output.
- Ensure to follow the object oriented specifications provided in the question.
- Ensure to provide the name for classes, interfaces and methods as specified in the question.
- Adhere to the code template, if provided.
- Display the service charge correct to 2 decimal places. Use the System.out.printf method.
 

Sample Input 1:

Enter the no of passengers

5

Details of Passenger 1:

Enter the pnr no:

4617813567

Enter passenger name:

Arun

Enter seat no:

34

Enter class type:

1A

Enter ticket fare:

240

Details of Passenger 2:

Enter the pnr no:

4617813567

Enter passenger name:

Aruna

Enter seat no:

36

Enter class type:

2A

Enter ticket fare:

200

Details of Passenger 3:

Enter the pnr no:

4617813590

Enter passenger name:

Rachel

Enter seat no:

23

Enter class type:

2S

Enter ticket fare:

150

Details of Passenger 4:

Enter the pnr no:

4617813570

Enter passenger name:

Helen

Enter seat no:

48

Enter class type:

1a

Enter ticket fare:

240

Details of Passenger 5:

Enter the pnr no:

4617813567

Enter passenger name:

Andrews

Enter seat no:

78

Enter class type:

3a

Enter ticket fare:

240

Sample Output 1:

Commission Obtained

Commission obtained per each person: Rs.460.00 





