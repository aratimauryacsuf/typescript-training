var sportTwo = ["Golf", "Cricket", "Tennis", "Swimming"];
sportTwo.push("Baseball");
sportTwo.push("Football");
for (var _i = 0, sportTwo_1 = sportTwo; _i < sportTwo_1.length; _i++) {
    var tempSport = sportTwo_1[_i];
    if (tempSport == "Cricket") {
        console.log(tempSport + " is my favorite! ");
    }
    else {
        console.log(tempSport);
    }
}
