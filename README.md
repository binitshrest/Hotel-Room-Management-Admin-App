<h1>Hotel-Room-Management-Admin-App</h1>
<hr>

<h3>User Stories</h3>
<ul style="list-style-type:circle">
  <li>As per requirement, I can have Hotel  multiple rooms of multiple types</li>
  <li>As per requirement, I can book room based on room type with different price
        <ol style="list-style-type:upper-roman">
         <li>Room type A: 100 Rs per hour</li>
         <li>Room type B: 80 Rs per hour</li>
         <li>Room type C: 50 Rs per hour</li>
        </ol>
  </li>
  <li>
      As per requirement, I created a Page where the admin can book the room which takes the user’s email, room number, start time, and end time and books the room accordingly
      The Price of the booking should update as soon as the user updates any one of the room           number, start time or end time.
      No two bookings should have overlapping start and end time for the same room.
  </li>
    <li>
      <strong>Edit: </strong>As per requirement, Allow admin to edit any variables like user email, room number,start time, end time and correspondingly take confirmation on updated price.
    </li>
    <li>As per requirement, I have implemented below features
    <strong>Delete</strong>: Allow admin to cancel any future booking with the following conditions:
    <ol>
      <li>If the booking start time is more than 48 hrs, Show a complete refund on UI</li>
      <li>If the booking start time is within 24 hrs to 48 hrs, 50% refund on UI</li>
      <li>Else no refund (but admin can still cancel) </li>
    </ol>
  </li>
  <li>
      <strong>View:</strong>
      Create a view page for the admin to view all the bookings both upcoming and passed with the following filters
      <ol style="list-style-type:upper-roman">
        <li>Filter by room number and room type</li>
        <li>Filter by start time and end time </li>
      </ol>
  </li>

  <h3>As per requirement: Good to have is also implemented</h3>
    <ul>
      <li>Validate Date and time</li>
      <li>Partial Responsive designs</li>
    </ul>
</li>
</ul>
<h3>Get Started</h3>
<!--  Please refer to this video link to connect mongodb database to node.js application
 https://www.youtube.com/watch?v=bhiEJW5poHU -->

<h3>Build With</h3>
<ul>
  <li>node.js</li>
  <li>express</li>
  <li>mongodb</li>
  <li>mongoose</li>
  <li>jsonwebtoken</li>
  <li>react</li>
</ul>

<h3>Install Dependencies and Run</h3>
if you already have node,js installed
<ul>
  <li>Go to terminal: Copy the path of your existing project</li>
  <li>After opening the path in terminal.</li>
  <li>For Running backend:</li>
  <li>Go to or cd Backend folder, npm install</li>
  <li>For Running FrontEnd:</li>
  <li>Go to or Do cd.. if your are in backend folder in terminal</li>
  <li>and then cd frontend to enter the path</li>
  <li>Do npm start run</li>
</ul>

<h4>Note: Make sure Folder name should be Correct while typing in terminal else terminal will throw error folder not found etc.</h4>


