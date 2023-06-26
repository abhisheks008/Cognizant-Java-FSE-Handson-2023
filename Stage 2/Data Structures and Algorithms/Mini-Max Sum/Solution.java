import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {

    /*
     * Complete the 'miniMaxSum' function below.
     *
     * The function accepts INTEGER_ARRAY arr as parameter.
     */

    public static void miniMaxSum(List<Integer> arr) {
    // Write your code here
    long minSum = 0;
    long maxSum = 0;
    int minIndex = 0;
    int maxIndex = 0;
    
    // Find the index of the minimum and maximum elements
    for (int i = 0; i < arr.size(); i++) {
        if (arr.get(i) < arr.get(minIndex)) {
            minIndex = i;
        }
        if (arr.get(i) > arr.get(maxIndex)) {
            maxIndex = i;
        }
    }
    
    // Calculate the minimum sum
    for (int i = 0; i < arr.size(); i++) {
        if (i != maxIndex) {
            minSum += arr.get(i);
        }
    }
    
    // Calculate the maximum sum
    for (int i = 0; i < arr.size(); i++) {
        if (i != minIndex) {
            maxSum += arr.get(i);
        }
    }
    
    // Print the results
    // 2262986
    System.out.println(minSum + " " + maxSum);

    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());

        Result.miniMaxSum(arr);

        bufferedReader.close();
    }
}
