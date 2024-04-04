# Employee-Tracker

I created a employee tracker that organizes and displays data in a table using inquirer and postgres

File Explanation I have a db folder for my database information schema and seeds you use `\i 'file name'` in the posgres command line to download the code written indside the SQL files

.gitignore is to block all the node module files

package.json and package-lock.json is for inquire, pg, and table.console to work 

Lastly is my server.js file that I have all those linked to make everything work together

Code explanation server.js
First I have all my imports inquirer to ask the questions in the console, pg for my database and console.table for a well organized table in postgres.

Then I made a auto sign in and jump into my database

Next is function start those are everywhere I want to restart the questioning process, after adding a new department, role, or employee I restart it for a cleaner interface.

After that is the iquirer prompts for the inquirer questions.

Then I have a long switch function that allows the function underneath the case to interact with the javascript later on

Next is pool querys, these allow you to SELECT/INSERT into the database 

Then theres if statements for errors after all of these 

1. [My repo Link](https://github.com/bmallar/Employee-Tracker)
2. [My video link](https://drive.google.com/file/d/1KX4SvbxbGGPrgvJToMTCYzKD0hbYz6kh/view)