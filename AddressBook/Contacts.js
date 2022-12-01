// UC 2 Validate Contacts
class Contacts
{
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email)
    {
        this.firstName=/[A-Z]{1}[a-z]{2,}/.test(firstName);
        this.lastName=/[A-Z]{1}[a-z]{2,}/.test(lastName);
        this.address=/[a-zA-Z0-9\s]{3,}/.test(address);
        this.city=/[a-zA-Z0-9\s]{3,}/.test(city);
        this.state=/[a-zA-Z0-9\s]{3,}/.test(state);
        this.zip=/^[0-9]{6}$/.test(zip);
        this.phoneNumber=/[5-9]{1}[0-9]{9}/.test(phoneNumber);
        this.email=/[a-z]{1,}([-+_])?([.][a-zA-Z0-9]{2,})?([A-Za-z0-9]{1,})?@[a-z0-9]{1,}.[a-z]{2,3}(.[a-z]{2,3})?/.test(email);
    }
}

function checkName(firstName)
{
    /[A-Z]{1}[a-z]{2,}/.test(firstName);
}


var nagrajPanchal = new Contacts('Nagraj','Panchal','Shivanagar','Aurad','Karnataka','585326','9739713842','NagrajPanchal@gmail.com');
console.log(nagrajPanchal);
// console.log(checkName("Nagraj"));

