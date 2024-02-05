class Customer1{
   
    constructor(private _firstName:String, private _lastName:String){
       
    }

    public get firstName(): String{
        return this._firstName;
    }

    public set firstName(value: String){
        this._firstName=value;
    }
    public get lastName(): String{
        return this._lastName;
    }

    public set lastName(value: String){
        this._lastName=value;
    }

}
let myCustomer1 = new Customer1("Arati", "Maurya");

// myCustomer.firstName = "Arati";
// myCustomer.lastName= "Maurya";

console.log(myCustomer1.firstName);
console.log(myCustomer1.lastName);