let sportTwo: String[] =["Golf", "Cricket","Tennis","Swimming"];

sportTwo.push("Baseball");
sportTwo.push("Football");


for(let tempSport of sportTwo){
    if(tempSport == "Cricket"){
        console.log(tempSport + " is my favorite! ");
    }
    else{
        console.log(tempSport);
    }
    }