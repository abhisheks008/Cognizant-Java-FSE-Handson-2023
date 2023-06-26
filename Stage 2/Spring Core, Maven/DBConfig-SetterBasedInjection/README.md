### DBConfig-SetterBasedInjection

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/e4fd4e84-1d43-470b-a28f-a97d84d43902)

Include getters and setters for all the above mentioned attributes.

DBConfig class should be registered as a bean with the spring container via XML file

The  attributes inside the DBConfig should be configured in the xml with the below values

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/6ee5f9ee-b7fc-445a-8b19-f87fdcd156bc)

Include getter/setter for the above attribute

EmployeeDAO should be registered as a bean with the spring container via XML file and DBConfig should be injected using setter based injection into the EmployeeDAO class

Create a class called Driver with the main method. Retrieve the EmployeeDAO object and display the details as shown in the sample input/output.

**Assumption:**

Assume the bean id for DBConfig bean in the beans.xml is db

**Design Constraints:**

DBConfig class should be present in com.spring.app package

EmployeeDAO class should be present in com.spring.app package

Main class should be present in com.app.driver package

DBConfig and EmployeeDAO class should have the necessary getters and setters.

The className/Attribute Name/PackageName should be same as specified in the problem statement. Do not create any new packages.

The XML configuration should be done in the file beans.xml. This XML should be available under the resources folder of the created maven project.

Sample Input/Output:

oracle.jdbc.driver.OracleDriver

jdbc:oracle:thin:@localhost:1521:oracle

john

john@123



