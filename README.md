# Ionic MyPark Application

This is the official MyPark demo app, showcasing a variety of Ionic Framework components and native features.

## Table of Contents

* [Welcome Page]
* [Login Page]
* [Register Page]
* [Forgot Password Page]
* [CategoriesPage ]

## Getting Started

* [Download the installer](https://nodejs.org/) for Node.js 6 or greater.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/ionic-team/ionic-conference-app.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.

_Note: You may need to add “sudo” in front of any global commands to install the utilities._

## Screen shot

<img src="https://user-images.githubusercontent.com/38101699/38363178-02cbb330-3917-11e8-88b2-8a387e9410b7.png" width="30%" alt="welcome_screen" >
<img  src="https://user-images.githubusercontent.com/38101699/38363174-022e03ba-3917-11e8-99d4-585c930abbd9.png" width="30%" alt="login_screen">
<img src="https://user-images.githubusercontent.com/38101699/38363173-0200a8e8-3917-11e8-8aa4-6cf6da4f8635.png" width="30%" alt="forgotpassword_screen" >
<img  src="https://user-images.githubusercontent.com/38101699/38363175-026a7aca-3917-11e8-83df-b94a355b82b4.png" width="30%" alt="register_screen">
<img src="https://user-images.githubusercontent.com/38101699/38363176-029d7ea2-3917-11e8-9676-eac90a6785ca.png" width="30%" alt="search_screen" >

## Deploying

* PWA - Un-comment [this](https://github.com/fzancanaro/mySydneyPark), run `npm run ionic:build --prod` and then push the `www` folder to your favorite hosting service
* Android - Run `ionic cordova run android --prod`
  * If you are deploying to Android 4.4 or below we recommend adding crosswalk: `cordova plugin add cordova-plugin-crosswalk-webview`
* iOS - Run `ionic cordova run ios --prod`
