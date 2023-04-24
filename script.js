let tempName = "";
let tempCardName = "";
let product = [{ pname: "BBC", price: 1500 }, { pname: "Arduino", price: 600 }];
let addr = [{ address: "123,Pune,Maharashtra" }, { address: "234,Mumbai,Maharashtra" }, { address: "345,Pune,Maharashtra" }];

const init = () => {
    document.getElementById("home").style.display = "inline-flex";
    document.getElementById("shopping").style.display = "none";
    document.getElementById("billing").style.display = "none";
    document.getElementById("confirm").style.display = "none";
};

const purchase = (value) => {
    shopping(product[value]);
}

const shopping = (item) => {

    document.getElementById("home").style.display = "none";
    document.getElementById("shopping").style.display = "block";
    document.getElementById("billing").style.display = "none";
    document.getElementById("confirm").style.display = "none";
    console.log(`item call ${item.pname} and ${item.price}`);
}
const optionclick = (option) => {
    document.getElementById("Addressoption").value = addr[option - 1].address;
    document.getElementById("sumbit").disabled = false;
    // console.log(addr[option - 1].address);

}

const addressSubmit = () => {

    if (validation1()) {
        document.getElementById("home").style.display = "none";
        document.getElementById("shopping").style.display = "none";
        document.getElementById("billing").style.display = "inline";
        document.getElementById("confirm").style.display = "none";
    }
}


function validation1() {
    let tempOptionAddress = document.getElementById("Addressoption").value;
    let tempAddress = document.getElementById("Address2").value;
    localStorage.setItem('Address2', tempAddress);
    tempName = document.getElementById("fullName").value;
    localStorage.setItem('fullName', tempName);
    let tempEmail = document.getElementById("email").value;
    localStorage.setItem('email', tempEmail);
    let tempContact = document.getElementById("contact").value;
    localStorage.setItem('contact', tempContact);
    var validMail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (tempName && (tempEmail.match(validMail)) && (tempContact.length==10)) {

        if (tempOptionAddress || tempAddress) {
            console.log(`Name is ${tempName} , Email is ${tempEmail} , contact is ${tempContact} and 
            Address is ${tempOptionAddress} ${tempAddress}`);
            return true;
        }
        else{
            alert("Please enter an address or select any of them.");
        }
    }
    else {
        alert("Please enter your name,email and contact number correctly.")
        return false;
    }
}


const billing = () => {

    if (validation2()) {
        document.getElementById("home").style.display = "none";
        document.getElementById("shopping").style.display = "none";
        document.getElementById("billing").style.display = "none";
        document.getElementById("confirm").style.display = "inline";
    }
}

function validation2() {
    let tempCard1 = document.getElementById("card1").checked;
    let tempCard2 = document.getElementById("card2").checked;
    tempCardName = document.getElementById("name").value;
    let tempCardNumber = document.getElementById("cardnumber").value;
    let tempCvv = document.getElementById("cvv").value;
    localStorage.setItem('name', tempCardName);
    localStorage.setItem('cardnumber', tempCardNumber);
    localStorage.setItem('cvv', tempCvv);

    if (tempCardNumber.length == 16 && tempCvv.length == 3) {

        if (tempCardName && tempCardNumber && tempCvv && (tempCard1 || tempCard2)) {
            console.log("Name is " + tempCardName + " Card Number is " + tempCardNumber + " Cvv is " + tempCvv);
            return true;
        }
        else {
            alert("Enter address or select any one");
            return false;
        }
    }
    else {
        alert("Enter your card deatils correct");
    }
}