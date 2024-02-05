var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("Arati", "Maurya");
// myCustomer.firstName = "Arati";
// myCustomer.lastName= "Maurya";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
