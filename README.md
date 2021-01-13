# Basic Info.
This project was developed using **Angular** framework for frontend purpose, **Firebase** for hosting purpose and **HERE SDK** was integrated for fetching complete weather related information
w.r.t the location of user.


# Logic
In this web-application we have two angular components- one is used to design the welcome screen of the application to make it more catchy and attractive, the second one is for 
presenting the fetched weather related information of the user's area in a profound way. Routing concept was used to navigate between components. To fetch the weather related 
information following steps were adopted:
- The users location was fetched using HTML5 geolocation API.
- A HTTP GET request of JSONP(JSON with padding) type was made from the application using these location details to the HERE website server, **Note:** jsonp request was made to deal with CORS(cross origin resource sharing) problem.
- Got the response from HERE website server in JSON format.
- Extracted required details from the received data.
- The required details were presented to the user using **Interpolation**, **Property Binding** , **Event Binding** and **Two way data binding** concepts of Angular.
- Directives like *ngIf, *ngFor were highly helpful for constructing the UI in conditional and looping manner.


# Features
- This application since developed using **Angular** is a **Single-page web application**.
- Major part of the app UI was created using **BootStrap 4.5** , thus it is **highly responsive** on all sorts of devices.
- This app also has a special dark mode integrated in it, to make the UI more beautiful.
- Last but not the least it is secured, robust & very smooth for use.
