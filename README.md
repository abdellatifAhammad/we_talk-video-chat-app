---
title: "we talk project"
description: a video chat app for the browser
---


video  chat app (google meet simple clone)
===
![nodejs_version](https://img.shields.io/badge/nodejs-v10.16.3-brightgreen)
![ejs](https://img.shields.io/badge/ejs-%5E3.1.3-blue)
![express](https://img.shields.io/badge/express-%5E3.1.3-orange)
![socket.io](https://img.shields.io/badge/socket.io-%5E2.3.0-ff69b4)
![peerjs](https://img.shields.io/badge/peerjs-0.5.3-yellow)

![](https://i.imgur.com/hNbaRGw.png)



## Users Guide :call_me_hand: 

##### If you need just to set it up and use it without reading a lot about I implement it, so you can start from here!
> set it just locally (on your machine)

 1. clone the app into your machine
```bash
git clone we_talk
```
 2. change the directory to the project
```bash 
cd we_talk
```
 3. install the dependencies
```bash
yarn install 
# (or you can use npm)
```
 4. download the peerjs locally using this command 
```bash
npm install peer -g
```
 5. then run it using 3001 port you can change the port
```bash
 peerjs --port 3001
```
 6. then lunch the app 
```bash
yarn dev
```
 7. go to the browser and enter (https://localhost:3000/)


> set it for use it in a large way :smile:
1. do the same previews steps 
2. install ngrok if you don't have it already on your machine
3. ngrok http localhost:3001
4. then get the link from ngrok and you have to change some lines in your code
> script.js
```javascript
const myPeer = new Peer(undefined, {
  host: "420dac3efc08.ngrok.io",//here you can put your new URL like 420dac3efc08.ngrok.io
});
```
> instead of this in script.js file line 3
```javascript
const myPeer = new Peer(undefined, {
  host: "/",
  port:"3001"// if you change the port in peer command line ,make sure to chnage it here too :)
});
```
5. ngrok http localhost:3000
6. get the last link and send it to your friends and start to communicate :+1: 
  
 
Used technologies :100: 
---
> this project is a simple implementation of nice tech like webRTC(real-time communacation ), peerjs ,and also express for simple backend logique , for the front end I chose just ejs as template engine , with bootstrap v4 
1. webRTC (https://webrtc.org/)
2. peerjs (https://peerjs.com/)
3. socket.io (https://socket.io/)
4. nodejs (https://nodejs.org/en/)
5. express (https://expressjs.com/)
6. ejs,bootstrap (https://ejs.co/) (https://getbootstrap.com/)



###### tags: `js` `nodejs` `webRTC` `socket.io` `peerjs` `expressjs` `html` `css` 

