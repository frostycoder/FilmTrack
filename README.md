# Light Bulb Test app  

**Problem Description**  
Let's say there are 100 light bulbs lined up in a row in a long room. Each bulb has its own switch and is currently switched off. The room has an entry door and an exit door. There are 100 people lined up outside the entry door. Each bulb is numbered consecutively from 1 to 100. So is each person. Person No. 1 enters the room, switches on every bulb, and exits. Person No. 2 enters and flips the switch on every second bulb (turning off bulbs 2, 4, 6, etc.) Person No. 3 enters and flips the switch on every third bulb (changing the state on bulbs 3, 6, 9, and so forth). This continues until all 100 people have passed through the room. How many of the light bulbs are illuminated after the 100th person has passed through the room? More specifically, which light bulbs are still illuminated?

**Solution Requirements**  
Please create a solution to the above problem. You can use any technology you wish, though a solution using C# and/or Angular 8+ is preferred. The result should have a user interface to allow the user to input the number of people and the number of light bulbs. It should output which light bulbs are on at the end of the process and how many in total are illuminated. Please submit a link to a GitHub or Bitbucket repository. Do not include any compiled executable files.

**Solutions**  
I have created two solutions for this application. Solution one was written all in Angular. Solution two is angular with an API backend. Use the main navigation bar above to test both solution.

## Setup
*  Clone the repo
*  Open FilmTrack.sln in Visual Studio 2019
   *  Run IIS Express configuration in debug mode
   *  FilmTrack API will run on localhost port 44367
*  In commandline navigate to FilmTrack directory
   *  Run `npm i`
   *  Run `npm start`
   *  Open new Chrome browser tab
   *  Navigate to localhost:4205
*  Top menu has two links to two problem solutions: Client side and Client/Server side
   *  Click on Client Solution link. It navigates to the page where the problem solution is implemented in Angular code
   *  Click on Client/Server Solution link. It navigates to the page where the problem solution is implemented in Web API and presented in Angular code
*  Enjoy!
