![CF](http://i.imgur.com/7v5ASc8.png) LAB 41: React Native
=================================================
  
![Two-Face Icon](./assets/icon.png)  
  
## App Name: TWO FACED

### Authors: Erin Trainor and Aaron Ferris
  
### Links and Resources
* [repo](https://github.com/js401-ferris-trainor-apiserver/two-faced)
* [Deployed Site](https://expo.io/@etrainor/two-faced)

### Description:  
This app is a fun exercise on the use of React Native, and how to access functions of the phone with it. The app uses the FaceDetector api from expo, and specifically uses the smilingProbability to decide whether the subject is smiling or not.

### Application Flow
* Upon start, this app will pull pull up a home page, asking if you are ready.  
* When hitting the icon in the center, the app will request access your phone's camera
* Once done, will show the camera's view, with text in the lower corner
* The camera will need movement in order to get it's first capture, but until then it will assume no faces are in view
* If no faces are in view, the text in the corner will say ```No Face Detected```
* If a face is in view it will say one of two things
  * If a smile is detected, it will say ```Face Detected: what are you so happy about?```
  * If no smile is detected, it will say ```Face Detected: why so serious?```


### Setup
#### To Run Server Locally
* clone down the repo
* in base repository run:
  * ```npm install expo-cli --global```
  * ```npm install```
  * ```expo start```
  * Take a picure of the QR Code with your phone and get started.


#### Running the app on a phone 

* Navigate to the [Deployed Site](https://expo.io/@etrainor/two-faced)
* Scan the QR code there
* Phone will need to register movement before it will register the first face
* Smile or frown, whatever you like, and you will see a response.

#### Resources used
* [Build a face-detecting React Native selfie cam from scratch in minutes with Exponent](https://medium.com/@mheavers/build-a-face-detecting-react-native-selfie-cam-from-scratch-in-minutes-with-exponent-95ae7414febb) by Mike Heavers
* [Face Detector Expo Docs](https://docs.expo.io/versions/v32.0.0/sdk/facedetector/)

#### UML
![UML Diagram](./assets/two-faced.jpg)
