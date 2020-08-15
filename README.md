## Skip Challenge

This project was built using expo react-native for simplicity. It displays allows you to search restaurants
by using a postal code and it will display them showing a list with the name, foot categories and the rating.

### Prequisites

 * Have node and npm install
 * Run `bash ./scripts/install.sh`. It will install the expo-cli and the dependencies required by this project


### Quick Test

Download expo from the app store on your device. Once it has dowloaded go to that link
on a computer and open your camera and scan the QR code in the page and it will open
the ap for you. (PS: If you don't want to scan the QR code, just request the linkt to be sent you on that
same page)

* https://expo.io/@nelsonochoam/skip-nelson-ochoa


### Building the app


##### Running it in IOS simulator
You need to have XCode already installed and a simulator configured then from the root of this
project run

`npm run ios`

##### Running it in Andround emulator
You have to have android studio alredy configured and have some emulators already created on
the Android AVD Manager, then run

`npm run android`

##### Running it on Web
(It probably wont since there are the CORS issues on a web browser but you will still be able to)
load the app, just run from the root of this project

`npm run start`


 ### Running tests

 Make sure you have ran `npm install` first so you can run the tests

 * On the root of the project run `npm test`
