# react-native-starter
A starter project for React Native apps

## Before Starting
React Native requires Yarn, Node (8.3+), Watchman, JDK (8+), the React Native CLI, Cocoapods, and Xcode.
Run the following commands for any packages you don't already have:
```
brew install yarn
brew install node
brew install watchman
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8
sudo gem install cocoapods
npm install -g react-native-cli
```
  
Install Xcode through the App Store if you don't already have it.

## Clone the Repo & Install Dependencies
Clone the repo by running:
```
git clone https://github.com/redolivedev/react-native-starter.git [your project name]
```

Once the repo has cloned, you need to change the project name and install the android & ios projects.
- Open package.json and change the "name" property to your project name.
- Open app.json and change both the "name" and "displayName" properties to your project name.

Run the following command:
```
react-native upgrade --legacy true
```
If it asks to replace any files, just enter n for no.

Now, you need to install node_modules and iOS pods. Run the following commands:
```
cd [your project name]
cd ios && pod install
cd ../
```

## Run the Project and Start Developing
We should be able to run the app now. Run the following command:
```
react-native run-ios
```
It may take a moment to start the first time.

