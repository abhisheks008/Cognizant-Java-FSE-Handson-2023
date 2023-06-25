### Bootstraps Navigation Bar

Design a web page as indicated in the sample screen below:

Topics Coverage: Bootstrap Navigation and table classes

Sample Screen:

Large Screen:

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/4cbba16c-9598-48c9-9451-d06c11374c7c)


Medium and Small Screen:

![image](https://github.com/abhisheks008/Cognizant-Java-FSE-Hands-ons-2023/assets/68724349/c19fd747-5c60-4c06-bfcb-13122dcb69af)



Requirements:

1. Create a nav tag for a dark horizontal navbar that becomes vertical on medium screens with dark background using Bootstrap classes.  It should be within the header tag with the class "container". 
2. Add a navigation brand name as "TrackIt" using anchor tag and appropriate Bootstrap class.
3. Add a button with a navigation toggler class. Use a span tag to display the navigation toggler icon as a button.
4. Make the navigation bar collapsible by using a 'div' tag with its id as "myNavbar" inside the nav tag.
5. Create an unordered list of links for: 'Home', 'About Us', and  'Contact' belongs to the bootstrap navigation bar class and make the list anchor value 'Home'  as  active.
6. Create another unordered list for 'Login' which should belong to the bootstrap navigation bar and it should be right aligned by using the bootstrap class to set its left margin as auto. 
7. Create a bootstrap hover table with the table column headings as: No., Bill, Payment Date and Payment status.(as given in the table below)
8. According to the payment status, choose appropriate contextual classes for each row.

  - Pending status: Indicates a warning that might need attention
  - Paid status: Indicates a successful or positive action
  - Due status: Indicates a dangerous or potentially negative action


Table contents should be the same as given below. The table should be created within the `<div>` with `id="tableContainer"` as given in the code template. 

Table Contents:
```
No.          Bill             Payment Date          Payment Status
1         Credit Card          05/07/2022               Pending
2          Internet            05/07/2022                Paid
3         Telephone            05/07/2022                 Due
```
 

`The table structure expected is a <table> with 4 rows<tr> and 4 columns<td> at each row.`

Note:

- Fill in only the specified part of the given template.
- Refer to the given sample screen for more clarifications
