function validateFormOnSubmit(contact) {
    reason = "";
    reason += validateFirstName(contact.firstname);
    reason += validateLastName(contact.lastname);
    reason += validateCity(contact.city);
    reason += validateEmail(contact.email);
    reason += validatePhone(contact.phone);
    reason += validateGender(contact.genradio);
    reason += validateRadioWork(contact.work);
    reason += validatePostalCode(contact.postalcode);
    reason += validatePassword();


    console.log(reason);
    if (reason.length > 0) {

        return false;
    } else {
        return false;
    }
}

function convertFirstName() // is called on Input First Name onchange 
{
    var firstName = document.getElementById("firstname");

    if (firstName != "") {
        firstName.value = firstName.value.substr(0, 1).toUpperCase() + firstName.value.substr(1).toLowerCase();

    }
}

function convertLastName() // is called on Input Last Name onchange 
{
    var lastname = document.getElementById("lastname");

    if (lastname != "") {
        lastname.value = lastname.value.substr(0, 1).toUpperCase() + lastname.value.substr(1).toLowerCase();

    }
}



// validate required fields
function validateFirstName(name) {
    var error = "";
    if (name.value.length > 15) {
        var error = "1";
        document.getElementById('firstName-error').innerHTML = "*Fist Name is too long";
    } else {
        if (name.value.length == 0) {

            document.getElementById('firstName-error').innerHTML = "*The required field has not been filled in";
            var error = "2";
        } else {

            document.getElementById('firstName-error').innerHTML = '';
        }
    }
    return error;
}

function validateLastName(name) {
    var error = "";
    if (name.value.length > 15) {
        var error = "1";
        document.getElementById('lastName-error').innerHTML = "*Last Name is too long";
    } else {
        if (name.value.length == 0) {

            document.getElementById('lastName-error').innerHTML = "*The required field has not been filled in";
            var error = "1-2";
        } else {

            document.getElementById('lastName-error').innerHTML = '';
        }
    }
    return error;
}

function validateCity(city) {
    var error = "";

    if (city.value.length == 0) {

        document.getElementById('city-error').innerHTML = "*The required field has not been filled in";
        var error = "1-3";
    } else {

        document.getElementById('city-error').innerHTML = '';
    }
    return error;
}

function validatePostalCode(postal) {
    var error = "";
    var tpostal = trim(postal.value);
    var postalFilter = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;

    if (postal.value == "") {

        document.getElementById('postal-error').innerHTML = "*Please enter a postal code.";
        var error = "2";
    } else if (!postalFilter.test(tpostal)) { //test email for illegal characters

        document.getElementById('postal-error').innerHTML = "*Please enter a valid postal code.";
        var error = "3";
    } else if (postal.value.match(illegalChars)) {

        var error = "4";
        document.getElementById('postal-error').innerHTML = "*Postal code contains invalid characters.";
    } else {

        document.getElementById('postal-error').innerHTML = '';
    }
    return error;
}

// validate email as required field and format
function trim(s) {
    return s.replace(/^\s+|\s+$/, '');
}

function validateEmail(email) {
    var error = "";
    var temail = trim(email.value); // value of field with whitespace trimmed off
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;

    if (email.value == "") {

        document.getElementById('email-error').innerHTML = "*Please enter an email address.";
        var error = "2";
    } else if (!emailFilter.test(temail)) { //test email for illegal characters

        document.getElementById('email-error').innerHTML = "*Please enter a valid email address.";
        var error = "3";
    } else if (email.value.match(illegalChars)) {

        var error = "4";
        document.getElementById('email-error').innerHTML = "*Email contains invalid characters.";
    } else {

        document.getElementById('email-error').innerHTML = '';
    }
    return error;
}

// validate phone for required and format
function validatePhone(phone) {
    var error = "";
    var stripped = phone.value.replace(/[\(\)\.\-\ ]/g, '');

    if (phone.value == "") {
        document.getElementById('phone-error').innerHTML = "*Please enter a phone number";

        var error = '6';
    } else if (isNaN(parseInt(stripped))) {
        var error = "5";
        document.getElementById('phone-error').innerHTML = "*The phone number contains illegal characters.";

    } else if (stripped.length < 10) {
        var error = "6";
        document.getElementById('phone-error').innerHTML = "*The phone number is too short.";

    } else {

        document.getElementById('phone-error').innerHTML = '';
    }
    return error;
}

function validateGender(gender) {
    if ((contact.genradio[0].checked == false) && (contact.genradio[1].checked == false)) {
        document.getElementById('gender-error').innerHTML = "*Gender required";
        var error = "2";
    } else {
        document.getElementById('gender-error').innerHTML = '';
    }
    return error;
}

function validateRadioWork(work) {
    if ((contact.work[0].checked == false) && (contact.work[1].checked == false)) {
        document.getElementById('work-error').innerHTML = "*Answer required";
        var error = "2";
    } else {
        document.getElementById('work-error').innerHTML = '';
    }
    return error;
}

function validatePassword() {
    var error = "";
    //Store the password field objects into variables ...
    var pass1 = document.getElementById('password');
    var pass2 = document.getElementById('cpassword');
    //Store the Confimation Message Object ...
    var message = document.getElementById('password-error');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";

    if (pass1.value == "") {
        message.style.color = badColor;
        message.innerHTML = "*Enter Passwords";
        error = "1";

    } else if (pass1.value.length < 8) {
        message.style.color = badColor;
        message.innerHTML = "Password is too short!";
        error = "2";

    } else if (pass1.value.length > 12) {
        message.style.color = badColor;
        message.innerHTML = "Passwords is too long!";
        error = "3";

    } else if (pass1.value.search(/[a-z]/i) < 0) {
        message.style.color = badColor;
        message.innerHTML = "Your password must contain at least one letter.";
        error = "4";
    } else if (pass1.value.search(/[0-9]/) < 0) {
        message.style.color = badColor;
        message.innerHTML = "Your password must contain at least one digit.";
        error = "5";
    } else if (pass1.value.search(/[.]/) < 0) {
        message.style.color = badColor;
        message.innerHTML = "Your password must contain at least one dot (.) sign";
        error = "6";
    } else if (pass1.value.search(/[/]/) < 0) {
        message.style.color = badColor;
        message.innerHTML = "Your password must contain at least one slash (/) sign";
        error = "7";
    } else {
        //Compare the values in the password field 
        //and the confirmation field
        if (pass1.value == pass2.value) {
            //The passwords match. 
            //Set the color to the good color and inform
            //the user that they have entered the correct password        
            message.style.color = goodColor;
            message.innerHTML = "Passwords Match!";

        } else {
            //The passwords do not match.
            //Set the color to the bad color and
            //notify the user.       
            message.style.color = badColor;
            message.innerHTML = "*Passwords Do Not Match!";
            error = "1";
        }
    }
    return error;
}