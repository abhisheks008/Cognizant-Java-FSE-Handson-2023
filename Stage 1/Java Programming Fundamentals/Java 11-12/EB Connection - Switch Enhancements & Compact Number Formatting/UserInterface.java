import java.util.Scanner; 
import java.util.Locale;
import java.text.NumberFormat;

public class UserInterface {
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the Connection ID :");
		int connectionId=sc.nextInt();
		System.out.println("Enter the Connection Type :" );
		String connectionType=sc.next();
		System.out.println("Enter the Previous Reading :" );
		int previousReading=sc.nextInt();
		System.out.println( "Enter the Current Reading :" );
		int currentReading=sc.nextInt();
		int readingValue = currentReading-previousReading; 
		outer: {
			String connection=checkConnectionType (connectionType);
			System.out.println(connection);
			if(connection.equals("Invalid Connection"))
			{
				break outer;
			}
			int billAmount;
			if(readingValue>0 && readingValue<=200)
			{
				billAmount readingValue*2;
			}
			else
			{
				billAmount = readingValue*5;
			}
			System.out.println("Bill Amount (LongNumberFormat) : "+longNumberFormat (billAmount)); 
			System.out.println("Bill Amount (Short NumberFormat) : "+shortNumberFormat(billAmount));
		}
	}
	// Use Enhanced switch statement to check the connection type
	public static String checkConnectionType(String connectionType) {
	//Fill the Code
		switch(connectionType) {
			case "Single Phase", "Three Phase", "SINGLEPHASE", "THREEPHASE" : 
				return ("Valid Connection");
				//break;
			default:
				return ("Invalid Connection");
		}
	}
  // Code by, Abhishek Sharma
	// Use Compact Number Formatting to convert the number into Long Number Format
	finden into Long Number
	public static String longNumberFormat(int number) {
	//Fill the Code
		NumberFormat formatter = NumberFormat.getCompact NumberInstance( Locale.US, NumberFormat.Style. LONG);
		String res = formatter.format(number);
		return res;
	}

	// Use compact number formatting to convert the number into  short number format
	public static String shortNumberFormat(int number){
		//Fill the code
		NumberFormat formatter = NumberFormat.getCompactNumberInstance(Locale.US, NumberFormat.Style.SHORT);
		String res1 = formatter.format(number);
		return res1;
	}
}
