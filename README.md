# Express / Mongoose / MongoDb / Passport / React / Redux
Small collection of information concerning the Udemy course (React with Express).

## Node / NPM
You have to install node.js and NPM (node package manager) to be able to continue.

### Homebrew (MacOS)
```
brew install node
```

### Download node.js (MacOS and Windows)
[nodejs.org](<https://nodejs.org/en/>)

## node packages

### express
4.16.2 or higher
Makes the backend part easier because it provides middlewares for different modules and creating endoints gets easy.

### nodemon
1.17.1 or higher
Helps us to directly build changes we made and restarts the server again.

### mongoose
5.0.9 or higher
The middle man between MongoDb and our express backend.
- models class (connection to a collection)
- model instance (connection to a single document of a collection)

### passport
0.4.0 or higher
Helps us to get an authentication flow running more easily. It's based on strategies like Google, Twitter and Facebook. We only need Google.

### passport-google-oauth20
1.0 or higher
The Google strategy we use with passort. It's an extra module that we have to install.

### cookie-session
2.0.0-beta.3 or higher
User based information is stored directly in the cookie (encrypted by self provided key).

### concurrently
3.5.1 or higher
```
npm install --save concurrently
```
Starts two servers simultaneously, express and react.

## Heroku
We deploy the app with the help of Heroku. It is a cloud based environment on which we deploy and configure our application. You have to create a Heroku account to be able to push and build our code to the Heroku environment.

### Heroku CLI
[Heroku CLI](<https://devcenter.heroku.com/articles/heroku-cli>) 

### Homebrew
```
brew install heroku/brew/heroku
```

## mLab
You can use a local MongoDb instance if you want to but it is a lot easier to just create a running MongoDb instance remotely by using mLab. Just create an account on mLab, create a free MongoDb instance and a user.

## Google Developer Tools
Using the Google strategy via passport you have to create a new project using [Google Developer Console](<https://console.developers.google.com>). Switch to the project and create new credentials.

## React
Install node module called create-react-app by
```
sudo npm install -g create-react-app
```
and create a client react app by just typing
```
create-react-app client
```
This client comes with its own server (port 3000) while we already build an nodejs server based on express (port 500ß) that handles our authentication flow (Google OAuth 2.0). We could integrate the react server (building create app) into express by following those blogs:
- [Free Code Camp](<https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0>)
- [Medium](<https://medium.com/@patriciolpezjuri/using-create-react-app-with-react-router-express-js-8fa658bf892d>)
- [Dave Ceddia](<https://daveceddia.com/create-react-app-express-backend/>)

We are not going to do this because we want to use features of the create-react-app module with its own server.