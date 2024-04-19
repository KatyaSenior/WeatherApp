Team members: Katya, Doaa, Sarah

This is a GitHub test

Client: https://weatherapp-ponp.onrender.com/
Server: https://weatherappserver-7qde.onrender.com/

weather api - https://open-meteo.com/

geolocation api - https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

reverse geocoding api - https://geocode.maps.co/

Lighthouse score: 100

//

PRESENTATION:
Problem domain:
-Weather app using geolocation
User stories:
-As a user, we want the location of the user to appear on the screen as well as current temperature and forecast. ACHEIVED.
-As a user, we want to submit information through a form and see it displayed on the page without a full page refresh. Semi-acheived. Manual refresh required.
-As a user, we want to be able to view a list of entries that have been added by all the users, stored in the database. ACHEIVED.
We want the website to be accessible and easy to use on both desktop and mobile devices
-Original MVP goal was for London's temperature to appear based on longitude and latitude coordinates built into the API.
Stretch goals:
• Geolocation and comments…
• We also want the user to be able to select a different location to see the current weather and forecast
• User submitted comments appear based on locations
• Forecast for following days
• Adding photos to the comments
• Weather based background – background changes according to the weather
• Details such as windspeed, humidity, rainfall etc
• Let the user select a city

Collaboration and project management:
How was the project planned?
-Trello and figma – present this to the rest of the group
How did we go about completing the project?
-Mob programming
-Updating Trello first thing in the morning
-Regular git commits and pulls
-Communication via discord when other members unavailable

Project Objectives:

1. Create a wireframe and plan the layout and functionality of your web application: ACHEIVED. FigJam utilised.
2. Develop the user interface with HTML and CSS, focusing on a responsive and intuitive design. ACHEIVED. Functioning mobile and desktop site.
3. Implement dynamic content on the front end using vanilla JavaScript for DOM manipulation. ACHEIVED. Dynamically changing background, icon, temperature and location.
4. Build a server with Express that handles HTTP requests and communicates with a SQLite database. ACHEIVED. Server communicates with weather database in point 5.
5. Design a database and use SQLite to store, update, and retrieve data efficiently using SQL queries. ACHEIVED. Comments stored, updated and retrieved.
6. Work as a team to design and build a web application that showcases your skills in full-stack development, and collaborate on code using Git and GitHub. ACHEIVED. See: GitHub commit history. Trello used for project management. Communication via Google Meet and Discord.

Technical Requirements:

1. The application must include both client-side and server-side code. ACHEIVED.
2. Ensure the application is fully responsive and works across modern browsers. TESTED IN CHROME. ACHEIVED IN CHROME.
3. Use Express.js to set up your server and define API endpoints. ACHEIVED.
4. Use SQLite with the better-sqlite3 library for database operations. ACHEIVED.
5. Implement async/await and the Fetch API for non-blocking database operations and API calls. ACHEIVED.
6. Demonstrate an understanding of database design, relationships, and SQL queries. ACHEIEVED.

Deliverables:

1. live version of the application, deployed on a platform like Render. ACHEIEVED.
2. A GitHub repository containing the source code with a detailed README.md about the project. ACHEIVED. You are looking at it.
3. A low-fidelity wireframe of the application's layout, ideally created with a tool like Figma or Excalidraw. Semi-acheived. Mobile wireframe in Figma. Desktop site exists but no wireframe.
   A seed.js file with SQL commands to set up and seed the database for initial development and testing. ACHEIVED.
   A brief presentation or document explaining the architecture of your application, the technologies used, and any challenges you faced. Presentation will be given.

Major Bugs:

1. Bug: Comments not appending.
   Status: Resolved.
   Resolved by: Sarah.

2. Bug: Website not deploying on Render.
   Status: Resolved.
   Resolved by: Katya.

3. Bug: Render Server and Client not communicating.
   Status: Resolved.
   Resolved by: Katya, with advice from Tim.

4. Bug: Manual refresh required for comments to append.
   Status: Unresolved.
   MVP breaking: No. However, user story not acheived due to bug.
