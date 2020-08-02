---
title: "we talk project"
disqus: hackmd
---

# video chat app (google meet simple clone)

![downloads](https://img.shields.io/github/downloads/atom/atom/total.svg)
![build](https://img.shields.io/appveyor/ci/:user/:repo.svg)
![chat](https://img.shields.io/discord/:serverId.svg)

<!-- ## Table of Contents -->
<!-- [TOC] -->

## Users Guide

##### If you need just to set it up and use it without read a lot about I implement it ,so you can start from here!

> set it just localy (on your machine)

1.  clone the app into your machine

```bash
 $ git clone
```

2.  change the directory to the project

```bash
$ cd
```

3.  install the dependensies

```bash
$ yarn install
# (or you can use npm)
```

4.  download the peerjs localy using this commnad

```bash
$ npm install peer -g
```

5.  then run it using 3001 port you can change the port

```bash
$ peerjs --port 3001
```

6.  then lunch the app

```bash
$ yarn dev
```

7.  go to the browser and enter (https://localhost:3000/)

> set it for use it in large way :smile:

1. do the same previews steps
2. install ngrok if you don't have it already on your machine
3. ngrok http localhost:3001
4. then get the link from ngrok and you have to change some lines in your code
   > script.js

```javascript
const myPeer = new Peer(undefined, {
  host: "420dac3efc08.ngrok.io", //here you can put your new url like 420dac3efc08.ngrok.io
});
```

> instead of this in script.js file line 3

```javascript
const myPeer = new Peer(undefined, {
  host: "/",
  port: "3001", // if you change the port in peer command line ,make sure to chnage it here too :)
});
```

5. ngrok http localhost:3000
6. get the last link and send it to your freinds and start communicate :+1:

## User story

## User flows

## Appendix and FAQ

:::info
**Find this document incomplete?** Leave a comment!
:::

###### tags: `Templates` `Documentation`
