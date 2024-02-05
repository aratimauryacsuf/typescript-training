"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
let myCricketCoach = new CricketCoach_1.CricketCoach();
let myGoldCoach = new GolfCoach_1.GolfCoach();
let theCoches = [];
theCoches.push(myCricketCoach);
theCoches.push(myGoldCoach);
for (let c of theCoches) {
    console.log(c.getDailyWorkout());
}
