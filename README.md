# Mirror Mirror
[mirror-mirror.surge.sh](http://mirror-mirror.surge.sh/)

![Slay Queen](http://i.giphy.com/jfUzhcEzObJ7O.gif)

Mirror Mirror is a personalized web app inspired by the various DIY smart mirror projects documented by developers online. For my final WDI project, I created a React app that, when installed on a tablet and 2-way mirror, displays customized information including: time and date, weather, and MTA status information. For extra flair, I couldn't resist including the wise mirror spirit from Disney's Snow White and Kingdom Hearts.

![Screenshot of Mirror Mirror React App](http://i.imgur.com/w9yhL1N.png)

## Tech
Despite having a relatively simple front-end design, I decided to create the app in React for an extra challenge. 

Each part of the mirror app is composed of components that hold their own functions and timers to constinuously update pieces of state.

Some of the npm packages I used were: 
-  [superagent](https://visionmedia.github.io/superagent/) for the AJAX calls and
-  [react-skycons](https://github.com/roadmanfong/react-skycons) for the super cute animated weather icons.

For my mirror app, I decided to use different libraries and APIs to get the information I needed, including: 
- [Moment.js](https://momentjs.com/) for the Clock component, 
- [Dark Sky](https://darksky.net/dev/) and [Skycons](https://darkskyapp.github.io/skycons/) for the Weather, and
- my dope instructor John Bell's awesome [MTA API](https://github.com/JohnrBell/mta_api) to get train status info (please MTA, do better by developers).

## The Mirror Build
For the actual mirror, I used 2-way mirror plastic backed with black craft foam. To display my app, I simply opened it up in a tablet (I used an iPad mini) and adhered it to the back of the mirror with Velcro strips to easily remove it.

Some major sources of inspiration were:
- [Michael Teeuw's Open Source MagicMirror platform for Raspberry Pi](https://github.com/MichMich/MagicMirror) 
- [Evan Cohen's DIY Voice Controlled Smart Mirror](https://docs.smart-mirror.io/)
- [Adafruit's Android Smart Home Mirror](https://learn.adafruit.com/android-smart-home-mirror)

Though most Magic Mirror DIYers either build their own creations with a Raspberry Pi or default to downloading an app from the Play Store, I really recommend making your own! Besides being a cool development project, it ensures that your app is completely your own and customized to your tastes.

## Process
![Mirror Mirror Sketch](http://i.imgur.com/me2nyE7.jpg?1)

To build the complete Smart Mirror, I started with building the web app (next time, Raspberry Pi....next time). Since I decided to challenge myself by using React, much of the week was spent learning how to make AJAX calls in this framework, splitting up each piece of the app into components, and ensuring that all the pieces were updating correctly.

Once the app was completed, I could then host it online and view it on a tablet for my mirror build.

## Challenges
Building an app in React, a framework I am still trying to learn, was a major challenge. As with any app that hits multiple APIs, parsing through different APIs and working with those reponses ate up a lot of time. It took about 4 days to get the app functional and a couple more to meet my MVP.

Some reach goals I would have liked to tackle include: 
- implementing geolocation and a friendlier UI for users to customize their own mirror interface , 
- doing more styling to make the design responsive on different size screens, 
- dedicating more time to design to account for the API data (might be larger/longer and take up more space than I anticipated), 
- creating a proxy server to make my AJAX calls and keep my back- and front-ends separate,
- and adding speech recognition to render specific components.


## Installation

To download any dependencies, fork and clone this repo and run 

```sh
$ npm install
```
You'll also need to get your own API key from [Dark Sky](https://darksky.net/dev/) and include your latitude and longitude (from Google Maps) in your API call for the Weather component.

I also hard-coded in my requests for the 2 and 5 trains in the Transit component, so those can be personalized as well.

For step-by-step instructions on how to build the actual mirror, I really recommend Adafruit's tutorial, linked above.

## Why Do I Need a Magic Mirror?
Who WOULDN'T want a magic mirror of their own???

In addition to making your bathroom look straight out of a sci-fi thriller, a smart mirror is incredibly helpful if you find yourself rushing in the morning. Instead of checking 5 different apps in the morning while balancing a toothbrush and your makeup sponge, one can simply get ready in front of a mirror that displays the most up-to-date information to get you out the door even faster.

Usually running late? You can literally see the minutes go by as you apply the perfect winged eyeliner.

Is getting to work like stepping into the fifth circle of Hell? Just glance up at your mirror to see which trains are on time and which to avoid.

The possibilities are really endless as you could include: top headlines, a daily joke or inspirational quote to brighten your morning, a list of appointments or to-dos, pictures of cats...anything that you like to look at before you leave the house.


## Lastly
I would like to extend a massive **Thank You!** to all of my WDI instructors and classmates for helping me make this incredibly cool project happen! Thanks X-Files fam! It's been real.
