# Meeting Planner

Simple application to schedule meetings using mean stack


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Note : you must have Node ,npm and angularCLI installed on your system.
 
1) To start with this, install node and npm

* [NodeJs](https://nodejs.org/en/) - How to install node?

2) Use npm to install Angular CLI . Exceute this command

```
>npm install -g @angular/cli
```

 
### Installing/ Running locally


1) Create a folder named as meeting-planner 

2) Navigate to meeting-planner

```
>cd meeting-planner
```

3) Fetch the source code
 
```
>git init
```

```
>git remote add origin https://github.com/jesccy/meetings-planner.git
```

```
>git pull origin master
```

4) Install all the modules required to run the given application with following command

```
>npm install
```

5) Run the application by using following command

```
>ng serve --open
```

6) visit http://localhost:4200/. You will see the frontend.

7) Navigate to meeting-planner-apis

8) Install the required module using npm install

9) Run using

```
>node app.js
```




* [Demo](http://curiouswebs.in/) - Application is up and running here

## Screenshots of Application

### Login Page
![alt loginpage](https://github.com/jesccy/my-meeting-planner/blob/master/screenshots/Meeting%20Planner%20-%20Login.png)

### Signup Page
![alt signuppage](https://github.com/jesccy/my-meeting-planner/blob/master/screenshots/Meeting%20Planner%20-%20SignUp.png)

### Forgot Password Page
![alt forgotpasswordpage](https://github.com/jesccy/my-meeting-planner/blob/master/screenshots/Meeting%20Planner-%20Forgot%20Password.png)

### Admin Dashboard
![alt adminpage](https://github.com/jesccy/my-meeting-planner/blob/master/screenshots/Meeting%20Planner%20-%20Admin%20Dashboard.png)

### Add Meeting
![alt addmeetingpage](https://github.com/jesccy/my-meeting-planner/blob/master/screenshots/Meeting%20Planner%20-%20Add%20Meeting.png)

### Confirm Meeting
![alt adminpage](https://github.com/jesccy/my-meeting-planner/blob/master/screenshots/Meeting%20Planner%20-%20Confirm%20Meeting.png)

## More about the application

Application is having following views -


1) User management System -

    a) Signup - User can signup using first name, last name, user name, email, phone and country. On selecting country , phone code will be automatically selected.Also User can signup as admin using checkbox option signup as admin.Default role will be normal user.

    b) Login - User can login using email and password.

    c) Forgot password - Password can be recovered using link sent on email. 


2) User Authorization system -

    a) User are of two roles, normal and admin. By default user will be a normal. However User can signup as admin using checkbox option "signup as admin". Also admin have -admin as suffix on their username. 

3) User Slots management system (Flow for normal User) -

    a) On Login normal user is redirected to calendar dashboard. He can see his scheduled meetings. Rest normal users don't have any permission to make any changes to their meetings.


4) User Slots management system (Flow for Admin)-

    a) On Login as admin, user  redirected to calendar page. On left side he/she can see a list of available users for meetings.

    b) Admin can create meeting

    c) Admin can delete , modify user meetings.

5) User Alerts management system

   a)Normal User  notified in real time, though an alert if he isonline, and email (irrespective of whether he is online or offline), when
      i)   A meeting is created by admin
      
      ii)  A meeting is changed by admin
      
      iii) 1 minute before meeting, with an option to snooze or dismiss. Ifsnoozed, alert will come again in 5 seconds, if snoozed again, it will re-appear in next 5 seconds and so on. Once dismissed,alert will no longer appear.

6) Planner Views

    a) Planner view is inspired from Google calendar view.

    b) The view have following Features -
        i) Planner have only current year, past and future years will be ignored.
        
      ii) User will be able to change months, through an arrow button.
       
      iii) Day Cells are filled with the dots and count to show the meetings.
      
      iv) On click the day's cell, a view show all meetings,
            along a 24 hr timeline, with the slots covering the exact duration of each meeting.
            
      v) On clicking on a meeting, its details will pop up in another view

    c) View for Admin :
        i) For admin, a create button(at the bottom-right of the screen view) is there in calendar view, to create a meeting.
        
      ii) On clicking on create button, admin will be able to fill the details of meeting and can schedule the meeting.
       
      iii) After scheduling the meeting, Admin will be able to see it on his calendar.
      
      iv) On clicking on an already created meeting, meeting details view will display meeting details.
       
      v) Admin can make changes in meeting details by clicking on Edit button associated with Meeting details.
        
      vi) Admin can delete a meeting as well, with another button available at that view.


7) Error Views and messages - Each major error response
(like 404 or 500)  : 404 page is created if  user redirected to page that does not exist
500 : For any kind of server errors.


5) Documentation 

- All the APIs documented using npm module apiDoc 

* [APIDOC](http://api.curiouswebs.in/apidoc/) - APIDOC of Meeting Planner

## Built With

* [Angular](https://angular.io/) - For Designing front end
* [NPM](https://www.npmjs.com/) - Most of the modules are used
* [nodemailer](https://nodemailer.com/about/) - NPM module to send the e-mails
* [apiDoc](http://apidocjs.com/) - to crete apidoc for rest apis


## Authors

* **Jaspreet Kaur** - *Initial work* - [Jaspreet Kaur](https://github.com/jesccy)
* **Edwisor** - *Problem Statement* - [Edwisor](https://www.edwisor.com)
 
