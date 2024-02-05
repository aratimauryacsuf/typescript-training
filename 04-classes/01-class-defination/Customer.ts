class Customer{
    firstName: String;
    lastName: String;

    constructor(theFirst:String, theLast:String){
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}
let myCustomer = new Customer("Arati", "Maurya");

// myCustomer.firstName = "Arati";
// myCustomer.lastName= "Maurya";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);