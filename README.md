# react-native-starter
A starter project for React Native apps

## Before Starting
React Native requires Yarn, Node (8.3+), Watchman, JDK (8+), the React Native CLI, Cocoapods, and Xcode.
Run the following commands for any packages we don't already have:
```
brew install yarn
brew install node
brew install watchman
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8
sudo gem install cocoapods
npm install -g react-native-cli
```
  
Install Xcode through the App Store if we don't already have it.

## Clone the Repo & Install Dependencies
Clone the repo by running:
```
git clone https://github.com/redolivedev/react-native-starter.git [your project name]
```

Once the repo has cloned, we need to install node_modules and pods for iOS. Run the following commands:
```
cd [your project name]/ios && pod install
cd ../ && npm i
```

## Run the Project and Start Developing
We should be able to run the app now. Run the following command:
```
react-native run-ios
```

