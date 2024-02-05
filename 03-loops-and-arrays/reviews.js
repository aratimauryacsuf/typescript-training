var reviews = [5, 5, 4.5, 3, 1, 3];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var avg = total / reviews.length;
console.log("Review average =" + avg);
