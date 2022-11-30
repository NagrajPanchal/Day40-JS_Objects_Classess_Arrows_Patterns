// UC 1 Create Address Book Contacts Details
class Contacts
{
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneNumber=phoneNumber;
        this.email=email;
    }
}
let nagrajPanchal = new Contacts('Nagraj','Panchal','Shivanagar','Aurad','Karnataka','585326','9739713842','nagraj.panchal@gmail.com');
console.log(nagrajPanchal);