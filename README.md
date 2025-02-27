<p align="center">
  <img alt="Parley App Logo" width=50% src="https://github.com/7SeasLLC/FrontEnd/blob/32bc0966c8b1fc736ade2fe08c89f2c7c9c94499/parley/public/assets/logo.png">
</p>

# What is Parley?

<img align="left" alt="Parley Pirate Gif" src="https://i.imgur.com/egXeXIx.gif">

Parley is an application created with the intent of assisting in the flow of information. We set out to connect tech enthusiasts of all walks of life through a platform where knowledge can be shared. Parley is a platform where users can speak - or listen - to anyone who wants to listen... or speak.

Tech enthusiasts from all over the world use Parley to give talks on any and all things tech. Want to hear about the sleekest ways to use React hooks? Check. Got a burning passion for relational databases vs NoSQL? Come on by. Want to talk all day and night about jQuery? I guess, you do you. It's all possible with Parley.

So - what can you do with Parley?
<br clear="right"/>

* Give a talk  
Thought leaders, enthusiasts... anyone can give a talk on Parley. It's as simple as creating an account with Google and choosing a title, description, and some tags. Users can live-stream their talks and even record them for future use.  
<p align="center">
<img alt="Giving a talk in Parley" src="https://github.com/7SeasLLC/FrontEnd/blob/4fcf792015e3144bae38f3d2918cfecef98a22ac/parley/public/assets/gifs/new-stream.gif">
</p>

* Search for talks  
Parley comes equipped with a fully-functional search feature where users can search their favorite tags, talks, or even search for other users. If it's a hot tech trend - odds are you'll find plenty of people talking about it on Parley.  
<p align="center">
<img alt ="Searching in Parley" src="https://github.com/7SeasLLC/FrontEnd/blob/0525d41f05298042abbb1817d32ac712e2aec62e/parley/public/assets/gifs/search.gif">
</p>


* View recordings  
Miss the start of an engaging talk? No problem! If a user so chooses, their talks can become archived and viewable on their profile, as well as the main feed.  
<p align="center">
<img alt ="Listening to a talk in Parley" src="https://github.com/7SeasLLC/FrontEnd/blob/0525d41f05298042abbb1817d32ac712e2aec62e/parley/public/assets/gifs/listen-to-recording.gif">
</p>


The front-end of Parley uses a combination of React and Ionic to render our app. We chose Ionic with the intention that anyone in any place could join a talk, therefore Parley should be a mobile-first experience.

Our back-end was built with both speed and ease of use in mind. Our express server uses Websockets and uploads audio recordings to AWS S3.

# Setup

## Front-End

To download the app, follow the following steps:

* Install Ionic cli
```sh
npm install -g @ionic/cli
```
* Install npm packages
npm install
```sh
navigate into parley folder
```
* Start the server
```sh
ionic serve
```

## Back-End

* Install PeerJS globaly
``` sh
npm install -g peer
```
* Install npm packages
``` sh
npm install
```
* Create .env file
  * Add your AWS S3 Credentials
    * ```accessKeyId_parley = 'YOUR ACCESS KEY' ```
    * ```secretAccessKey_parley = 'YOUR SECRET ACCESS KEY'```
    * ```aws_region_parley = 'YOUR REGION'```
    * ```awsBucket_parley = 'YOUR BUCKET NAME'```

* Start peerJS server
``` sh
peerjs --port 3001
```
* Start express server
 ``` sh
npm run server
```

## Firebase

  * Create a new Web Application associated with your Firebase project. For more detailed instructions, follow this link: [](https://firebase.google.com/docs/web/setup)

  * During this Firebase app creation process you will create a Firebase Config file that looks like this:
  ``` sh
  const config = {
    apiKey: "AIzaSyB6JS0yOxTe2bFST-HYateROqYK_se3EzM",
    authDomain: "seas-f6fe3.firebaseapp.com",
    projectId: "seas-f6fe3",
    storageBucket: "seas-f6fe3.appspot.com",
    messagingSenderId: "1049948883037",
    appId: "1:1049948883037:web:51c30900705a01edee65b4",
    measurementId: "G-KFLH1K2129"
  };
  ```
  - Be sure to add your new Firebase Config to parley/src/firebase.config.js (this file contains only Publicly available information)

## Firebase :page_facing_up:

Firebase is a Google cloud service that allows us to house authentication, deployment, data storage, and application metrics under a single container.  We specifically chose to use this tool for our project because it is compatible with Ionic, a mobile first React framework we are utilizing on the Front-End.

Currently this application is using the WEB version of Firebase with plans to migrate to native IOS and Android in the future.  The following is how to set up the application utilizing the FirebaseSDK for WEB.

- **Authentication**:
  - Within your Firebase project, select "Authentication". Then click on the "sign-in method" tab. From here select Google as a sign-in provider. Following instructions above will take you to a URL that looks like this: ht<span>tps://<span>console.firebase.google.com/u/0/project/{YOUR-PROJECT-NAME-HERE}/authentication/providers.
  - Here is where you will enable Google as a sign-in provider.  Upon completion, you will generate a web-client id which looks like this: "1049948883037-s816aa6j66iq4kmt7ene86ootda2em0r.apps.googleusercontent.com".  You will need to add this to the index.html of the project (in the Public folder).
  <meta name="google-signin-client_id" content="1049948883037-s816aa6j66iq4kmt7ene86ootda2em0r.apps.googleusercontent.com">
  - Within the same tab as above, scroll down and add authorized domains to your project to specify which domains will have access to your Firebase (ie: localhost, your deployed service URL etc...).

- **FireStore**:
  - This project utilizes the Firebase Firestore
  - You will need to create your own collection to store the data: Users, Tags, and Recordings
    - User fields: authId: String, bio: String, email: String, following: String[], photoUrl: String, preferences: String[], Recordings: String[], username: String
    - Tags fields: count: Number, name: String
    - Recordings fields: Comments: String[], Description: String, Duration: String, EndTime: TimeStamp, Host: String[], Likes: Number, MaxLive: Number, Photos: String[], Plays: Number, S3URL: String, StartTime: TimeStamp, Tags: String[], isStreaming: Boolean, sessionId: String, title: String

- **Hosting/Deployment**
  - Be sure to install the Firebase tools globally in order to deploy directly to Firebase ($ npm install -g firebase-tools).
  - Currently the front end will not deployed will not work whi`le deployed with Firebase because the deployed Back-End repo is using HTTP.  Currently in progress is creating a Production Back-End using HTTPS.

# Technologies Used

## FrontEnd

-[React](https://reactjs.org/)

-[Ionic](https://ionicframework.com/)

## Backend

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [PeerJS](https://peerjs.com/)
- [AWS S3](https://aws.amazon.com/s3/)
- [Socket.io](https://socket.io/)

## Works in progress


## Future implementations

  - **Login Page:**
    - Add more auth methods including Email and Facebook


  - **Profile Page**
    - Allow users to be able to send and receive messages with other users

    - Allow users to be able to subscribe to other users and content tags

    - Provide a way for users to to shedule and rsvp to future sessions

    - Allow users to remove and edit recordings

    - Allow users to edit photo and username

  - **Feed Page**

    - Increased Search capabilities including Search for Recording by username, search for Recordings by Tags, and Like a search for recording by name

    - Allow users to filter the feed by date and popularity

    - Enable users to like and leave the comment and share sessions

    - Provide users a way to receive opt in notifications of their upcoming sessions and the ones they are RSVP’d to

    - Allow users to continue listening to the streams/records while navigating to other pages

  - **Session Page**
    - Allow users to scroll the play bar to skip while they are listening to the records

    - Allow users to communicate via text

  - **Back End**
    - Refactor Firebase Config to use a state management library (React Context)
