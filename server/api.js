/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

const fs = require("fs");
const path = require("path");
const readline = require("readline")

//initialize socket
const socketManager = require("./server-socket");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user)
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

router.get("/request-song", async (req, res) => {
  console.log("bingus")
  try {
    const filePath = path.join(__dirname, "Maps", req.query.songName+".osu")

    if (!fs.existsSync(filePath)) {
      return res.status(404).send("File not found")
    }
    
    const fstream = fs.createReadStream(filePath)

    const rl = readline.createInterface({
      input: fstream
    })

    const laneToPos = {
      1: -0.0525,
      2: -0.0165,
      3: 0.017,
      4: 0.054
  }

    let initZ = 0
    let lastHitTime = 0

    mapObjects = []
  
    for await (const line of rl)  {
      const data = line.split(",")
      let lane = 4

      //this should be a switch but i do not have time rn lolololol
      if (data[0] <= 320) lane = 3;
      if (data[0] <= 192) lane = 2;
      if (data[0] <= 64) lane = 1;

      initPos = [laneToPos[lane], 0, initZ]
      
      mapObjects.push([initPos, lane, data[2]])

      if (data[2] != lastHitTime) {
          lastHitTime = data[2]
          initZ -= 0.14;
      }
    }

    res.json({ mapObjects: mapObjects })
    // res.json({ mapObjects: [[[0,0,0], 2, 1000]]})
  } catch (error) {
    res.status(500).send("song processing error")
  }
})

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});


module.exports = router;
