# Building YouTube

For building any application we need the Requirements Clarification.

Discuss:
1. Features Of The YouTube Application.
2. Tech Stack Used To Build The Application. (We Should have the explanation for every single thing we are using in the tech stack here.)
3. If we are using forms, we will be using Formik Library for the React.
4. Are we using the Routing or not, what bundler are we using, testing library that we will be using in our system.

We have to only spend 5 mins of the time here.

Planning Things Up:

We will be having Header(YouTube Logo, Searchbar, User icon), Sidebar (Certain Categories), Main Part (Certain Buttons, Videos).

If we click on a video, it will open up the new page and open the video and with a particular route. (/watch).

This individual video will have a same header, some suggetions, some comments and like section.

We can think of certain components out of it and start building an application. (5-7 Mins are enough).

npx create-react-app: It already have a webpack setup with it in the react app.

Everything here is done by React.js create-react-app.

We have a strict Mode here that is imported from the react.

Installing Tailwind CSS:

```bash
npm install -D tailwindcss
npx tailwindcss init: In config file, we will tell tailwind what files need to be tracked inside here. It will include all the files

```

We don't need to take care of post css as create-react-app takes care of it already.

We can check if the store is there in our system or not by using the extension of redux dev tools.

Ask Interviewer about how we will get the Data. Are we using any API for it or how we are getting the data here.

Youtube gives us an API here.

When working with map, work if one is working and then apply the map.

We will be using the Debouncing concept to make our search bar work properly and will not make calls on every API Call here and if we write slow, it will make call for every key press.

If we are typing fast, the difference between the two key strokes is very less here, when we type slow we need results for every time we want the result here.

If a lot of people simultaneously search for the same thing, we will be making a lot of API Calls here. So that is how it saves our time to make different calls and makes less number of API Calls.

This is called as Debouncing.

They show the results only to give the better user experience.

If the difference between 2 key strokes is < t, i will decline the api call and for t>200, i will make the api call and show the results.

Debouncing in YouTube will be really less as compared to Flipkart in time.

We can even develop the LRU cache in place of simple cache that we use for storing search results.

In Youtube, they use 2 level deep comments. But we will build n level comments here.

## Challenges to build live chat

1. Get Data Live: Data layer presents the Data live and to show to the user.
2. Update the UI in efficient way and good a wonderful UI Experience to the User. (We cannot add or push th div tag continously here.)

## How to handle Data of the application

Live data can be brought here in the application with the help of web sockets. (A handshake between the server and the UI). Initial connection takes some time here to establish the connection. We can send the data whenever we want to send.

We can quickly send the data from either side and it is a bi-directional communication.

In websockets connection, there is no interval but inside the API polling, we have an interval set here.

In API Polling, the data is sent in the unidirectional flow. (eg: Gmail).

Trading, Stock Market. (Would be build using API Polling).

Interval of the website api call in api polling is determined from the use of the API that is being called and the data is used to access something from the API.

Comments in Youtube uses API Polling in real.

The Order Of Comments can differ here accordingly and might not be shown in the correct order.

Whenever the messages explode on our screen, it quickly deletes the older messages out there.

We can implement the Youtube accordingly to different browsers and how it saves the cache in Different Browsers out there.

Always make one component and if it works fine, then only add the Map and map the values out there to make other components as well.\

If we didn't removed the messages from the DOM, it will explode our page in DOM.

In Infinite scroll, we can keep a store of videos and we put the offset to the store, once we scroll, make use of onScroll, then we will call the api then out there and it will make the infinite scroll work.
