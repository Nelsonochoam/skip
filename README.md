## Skip

Search restaurants by postal code

#### Demo

![alt text](https://github.com/Nelsonochoam/skip/blob/master/assets/demo.gif "Demo")

---

### Prequisites

 * Have node and npm install
 * Run `bash ./scripts/install.sh`. It will install the expo-cli and the dependencies required by this project

---

### Checking The App In Expo

Download expo from the app store on your device. Once it has dowloaded go to that link
on a computer and open your camera and scan the QR code in the page and it will open
the ap for you. (PS: If you don't want to scan the QR code, just request the linkt to be sent you on that
same page)

* https://expo.io/@nelsonochoam/skip-nelson-ochoa

---

### Building Standalone IOS/Android App

For convenienve I have already built the app for you, simply go to the links below, download it and drag and drop it on you simulator or emulator

* For IOS: [Click here](https://drive.google.com/file/d/1cZpPp9kBDGyBWzb1hR2cxJQSCtyt1OO-/view?usp=sharing)
* For Android [Click here](https://drive.google.com/file/d/169rdM1WN51g2RVtcSINjCCEAC9HGCy4p/view?usp=sharing)

But if you really want to build it yourself you will need an expo account, just go to https://expo.io/
create an account then:

* Run `bash ./scripts/install.sh`
* Run  `expo-cli login` and login to your expo account
* Run `npm run build:ios:simulator` to for IOS or `npm run build:android:apk`

After running the steps mentioned above you should get a link where you could download
the android APK and drag and drop it to your android emulator or if you choose IOS it will
download an the IOS app

---

### Running the App with Expo (Locally)

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

---

 ### Running tests

 Make sure you have ran `npm install` first so you can run the tests

 * On the root of the project run `npm test`

---

### Contact Info:

email: nelsonochoam@gmail.com