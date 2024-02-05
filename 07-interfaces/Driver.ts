import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();

let myGoldCoach = new GolfCoach();

let theCoches: Coach[]= [];
theCoches.push(myCricketCoach);
theCoches.push(myGoldCoach);

for(let c of theCoches){
    console.log(c.getDailyWorkout());
}
