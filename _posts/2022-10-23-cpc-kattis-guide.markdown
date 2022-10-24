---
layout: post
title:  "CPC Kattis Guide"
date:   2022-10-23 18:17:42 -0400
categories: 
---
![IMPORTANT! PLEASE FILL OUT THIS FORM FOR OUR CURRENT CONTEST](https://forms.gle/p6UdZo9w2rv3H7h87)
**ALSO: THE ROOM IS OFFICIALLY KINGSBURY N113**

*If competitive programming is new to you, feel free to check out some additional reference links at the bottom of the page.*

Kattis is a competitive programming platform we use in the UNH CPC. 
The Kattis Problem Archive holds over 3,500 programming problems with a wide range of difficulty.
The platform also supports auto-grading in dozens of coding languages. 
We host competitions through Kattis and often work through their problems in our weekly meetings. 

In addition to hosting competitive programming problems, Kattis helps interviewers find talented programmers. 
Startups especially like the platform, and they often post job ads on the website. 
So, doing well on Kattis could directly get you an interview! 
Kattis also hosts a Mimir-like grading service for universities. *(If we make it popular enough, we might be able to replace Gradescope one day...)* 

# Signing Up For Kattis

[Register for Kattis here.](https://open.kattis.com/register/)
After you register, you should get sent a confirmation email. Follow the link inside it to verify your account. 

The link should send you to your Profile Settings page. 
If it does not send you there, you can access it by clicking on your name in the top right corner of any page. 

![Kattis Profile Settings](/assets/kattis_guide/profile_settings_1.png)
*Kattis Home Page with an arrow pointing at the Settings Menu*

Once in your profile settings page, change your Country, Subdivision, and University settings to match the ones seen in the image below. 

![Kattis Profile Settings](/assets/kattis_guide/profile_settings_2.png)
*Kattis Profile Settings*


**Now your account is all set!**

*But what next?* 

# Solving Problems with Kattis 

Before you can solve a problem, you must first pick a problem. 
The home page for Kattis suggests a variety of problems that are suited to your account's level. 
Each problem has a difficulty from 1 to 10. Anyone who’s taken an intro CS course can solve a difficulty 1 problem. 
 
These should be refreshed every so often. 
Clicking on any of these problems will lead you to their problem page. 
*Alternatively, you can visit the [Kattis Problem Page here.](https://open.kattis.com/problems)*

Once you pick a problem, it will look something like this: 

![Kattis FizzBuzz Problem](/assets/kattis_guide/fizzbuzz.png)
*[Kattis FizzBuzz Problem](https://open.kattis.com/problems/fizzbuzz)*

Problems usually have the following layout: 

- A description of the problem, typically depicting a scenario 
- A detailed explanation of the input 
- A description of the expected output 
- Samples of the program's input & output in action 

There is also a CPU Time Limit (1-4 seconds, typically) and Memory Limit (always 1GB) at the bottom of the page. 
Kattis will let you know if your program exceeds either of them when you submit. 

You can solve the problem in your browser using their embedded IDE, or alternatively work in an IDE of choice and then upload the source code afterward. 

You need to take input from stdin to solve any problem, so make sure you understand how to grab input in your language of choice. 
Standard terminal input should work just fine (so Scanners in Java work just fine, streaming is unnecessary). 

After submitting a problem, the website will run your program against test cases. 
If you pass all the tests, you will earn points based on the difficulty of the problem! 
However, it only tells you the number of cases you pass or fail, and not why you failed them.
Because of this, you will have to test your program yourself. 

![Kattis Submission Results](/assets/kattis_guide/submission_results.png)
*Kattis Submission Results, showing date of submission, language, score, and other details*

**With all that, you should have more than enough information to get started!**

Once you finish a problem successfully, feel free to post your source code in the [club discord server](https://discord.com/invite/cUbRTvbV4j) under the #solutions channel! 
If you do, make sure to include documentation that explains your solution. 

![Screenshot of our Solutions Channel in Discord](/assets/kattis_guide/discord_solutions.png)
*Screenshot of our the #Solutions Channel inside of [our club Discord server.](https://discord.com/invite/cUbRTvbV4j)*

# Kattis Contests

Every week we hold a Kattis Contest. At the time of writing, these typically last for one full week. 
Sometimes we will hold one-day contests instead, which last from the start to the end of each meeting.
Details for each meeting will be announced via our [Discord Server](https://discord.com/invite/cUbRTvbV4j).

![Screenshot of a Kattis Contest](/assets/kattis_guide/kattis_contest.png)
*Screenshot of a Kattis Contest Page*

The bar at the top of the page represents the time left in the contest. 
*You may or may not need to click the "start contest" button at the bottom right of this bar to participate.*

There are four tabs below the bar. **The most important is the Problems tab**, which contains links to every problem in the contest.  

Once time is over, whoever has the highest # of points will become the winner of the contest. 
Points are solely determined by how long it took to solve the problem, with quicker solutions earning more points. 
<u>Difficulty does not impact score, so solve easy problems first.</u>
You can click on the **Standings Tab** to see everyone's current scores and what problems people are working on. 

# Additional Resources

Need more help getting started with Kattis? Checkout the link below for language specific guides made by Kattis themselves. 
These guides cover ore about input and output, which is essential for solving problems on their site.
[Language-specific Kattis Tutorial (7 Min read)](https://open.kattis.com/help)

Interested in learning more about Competitive Programming in general? Here's an article by USACO, 
which contains a high-level overview of Competitive Programming, common themes, and example problems.
Includes an example with full solutions in multiple languages from Kattis.
[Introduction to competitive programming with USACO (15-30 min read)](https://usaco.guide/general/intro-cp?lang=cpp)

