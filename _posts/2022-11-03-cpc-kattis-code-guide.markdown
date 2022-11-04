---
layout: post
title:  "CPC Kattis Code Guide"
date:   2022-10-28 08:17:42 -0400
categories: 
---
This page is a reference for members that are new to Kattis. 
If you're unsure on how to recieve Input and give Output, this page should be able to help you understand a little bit better.
Scroll through our examples to see various 

# Example 1: FizzBuzz
	
These are all stubs for Kattis' version of the FizzBuzz interview problem. [Try it yourself!](https://open.kattis.com/problems/fizzbuzz)

#### Java

```java
import java.util.Scanner;

public class fizzbuzz {
	public static void main(String[] args) {
		int x; // the value you divide by to check if we print "Fizz"
		int y; // the value you divide by to check if we print "Buzz"
		int n; // The final number

		// Create a scanner for user input
		Scanner sc = new Scanner(System.in);

		// Get the user input
		x = sc.nextInt();
		y = sc.nextInt();
		n = sc.nextInt();

		// Debug Print : Echoes all the inputs back
		//System.out.println("You input: " + x + ", " + y + ", " + n);
		/ * TO IMPLEMENT * /
		System.out.println("Insert Result Here!");
	}
}
```

#### C++

```cpp
#include <iostream>

using namespace std;

int main() {
	int x, y, n; // input variables
	cin >> x >> y >> n;

	// program logic

	cout << "FizzBuzz" << endl; // example
}
```

# Example 2: This Ain't Ya Grandpa's Checkerboard

This is a stub for solving the Kattis Problem [This Ain't Ya Grandpa's Checkerboard.](https://open.kattis.com/contests/x3jzw8/problems/thisaintyourgrandpascheckerboard)  
This is a more advanced input example. There are a lot of Kattis problems that take in a more complex input, 
such as this case in which the input is a grid of black & white squares. 
Hopefully this stub can help you understand a more abstract input scenario.

*The approach I wanted to take for this problem was to insert the input into a character array representation,
but I couldn't find a way of grabbing individual characters using a Scanner. So I ended up taking input of an entire line as a string,
and from that I would grab individual characters using indexing (not involving I/O)  
\- Spencer Pham*

#### Java

```java
import java.util.Scanner;

public class GrabbingInput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in); // instantiate a scanner
        char[][] grid;

        int x = sc.nextInt();
        grid = new char[x][x];

        for (int row = 0; row < x; row++){
            // I was unable to grab an individual character at a time, so instead I go line by line.
            String thisLine = sc.nextLine(); // grabs input.
            for (int col = 0; col < x; col++) {
                // this grabs each individual character of the thisLine String.
                char curr = thisLine.charAt(col);
                grid[row][col] = curr; // store the character
            }
        }
    }
}

```

