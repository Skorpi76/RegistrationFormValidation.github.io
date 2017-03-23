// Main function, called on submit form 
function validateFormOnSubmit(contact) {
    // init reason variable to check where submittion failed 
    var reason = "";
    // calling validation methods 
    reason += validateFirstName(contact.firstname);
    reason += validateLastName(contact.lastname);
    reason += validateCity(contact.city);
    reason += validateStreetAdress(contact.street);
    reason += validateEmail(contact.email);
    reason += validatePhone(contact.phone);
    reason += validateGender(contact.genradio);
    reason += validateRadioWork(contact.work);
    reason += validatePostalCode(contact.postalcode);
    reason += validatePassword();
    reason += validatePreffered();
    reason += validateInterest(contact.interest);


    console.log(reason);
    // if any of validation fields return an error, submit will not happen 
    if (reason.length > 0) {
        alert('Some fields are missing or do not meet requirements ');
        return false;
        // If all requirements are met, it will save all info to localStorage and transfer user to result page 
    } else {
        // init values that will be added to localStorage 
        var Progress = document.getElementById("Progress");
        var Morningside = document.getElementById("Morningside");
        var Ashtonbee = document.getElementById("Ashtonbee");


        var firstName = document.getElementById('firstname').value;
        var lastName = document.getElementById('lastname').value;
        var gender = '';
        if (contact.genradio[0].checked === true) {
            gender = "Male";
        } else if (contact.genradio[1].checked === true) {
            gender = 'Female';
        }
        var country = document.getElementById('countries').value;
        var province = document.getElementById('provinces').value;
        var city = document.getElementById('city').value;
        var postalCode = document.getElementById('postcode').value;
        var streetAdress = document.getElementById('street').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var password = document.getElementById('password').value;
        var preEducation = document.getElementById('Previous').value;
        var curentWork = '';
        if (contact.work[0].checked === true) {
            curentWork = "Employed ";
        } else if (contact.work[1].checked === true) {
            curentWork = 'Not employed';
        }
        var prefferedCampus = '';

        if (Progress.checked)
            prefferedCampus += Progress.value;
        if (Morningside.checked)
            prefferedCampus += Morningside.value;
        if (Ashtonbee.checked)
            prefferedCampus += Ashtonbee.value;
        var interest = document.getElementById("interest").value;
        var aboutus = document.getElementById("hear-about").value;

        // Creating a variable that will be send to local Storage
        var jSONString = {
                FirstName: firstName,
                LastName: lastName,
                Gender: gender,
                Country: country,
                Province: province,
                City: city,
                PostalCode: postalCode,
                StreetAdress: streetAdress,
                Email: email,
                Phone: phone,
                Password: password,
                PreviousEducation: preEducation,
                CurrentlyEmployed: curentWork,
                PrefferedCampus: prefferedCampus,
                Interests: interest,
                HowDidYouHearAboutUs: aboutus
            }
            // test if jSONStrings is null 
        if (localStorage.getItem('jSONStrings') === null) {
            // init array
            var jSONStrings = [];
            //add to array  
            jSONStrings.push(jSONString);
            // Set to localStorage
            localStorage.setItem('jSONStrings', JSON.stringify(jSONStrings));

        } else {
            // get info from jSONStrings
            var jSONStrings = JSON.parse(localStorage.getItem('jSONStrings'));
            // add new info
            jSONStrings.push(jSONString);
            // reset back to localStorage
            localStorage.setItem('jSONStrings', JSON.stringify(jSONStrings));

        }
        return true;
    }
}

// Converts first letter to UpperCase and all the rest to LowerCase is called on Input First Name onchange
function convertFirstName() {
    var firstName = document.getElementById("firstname");

    if (firstName !== "") {
        firstName.value = firstName.value.substr(0, 1).toUpperCase() + firstName.value.substr(1).toLowerCase();

    }
}
// Converts Last name's first letter to UpperCase and all the rest to LowerCase is called on Input Last Name onchange
function convertLastName() {
    var lastname = document.getElementById("lastname");

    if (lastname !== "") {
        lastname.value = lastname.value.substr(0, 1).toUpperCase() + lastname.value.substr(1).toLowerCase();

    }
}



// First Name validation
function validateFirstName(name) {
    // init and error that will be returned 
    var error = "";
    // Test lenth of name value, if it has more then 15 characchters will return an error
    if (name.value.length > 15) {
        var error = "1";
        document.getElementById('firstName-error').innerHTML = "*Fist Name is too long";
    } else {
        // if name value length is less that 15 but == 0 than we return an error 
        if (name.value.length === 0) {

            document.getElementById('firstName-error').innerHTML = "*The required field has not been filled in";
            var error = "2";
            // else we have no errors and return an empty error.  
        } else {

            document.getElementById('firstName-error').innerHTML = '';
        }
    }
    return error;
}

//Last name validation 
function validateLastName(name) {
    // init and error that will be returned 
    var error = "";
    // Test lenth of last name value, if it has more then 15 characchters will return an error
    if (name.value.length > 15) {
        var error = "1";
        document.getElementById('lastName-error').innerHTML = "*Last Name is too long";
    } else {
        // if last name value length is less that 15 but == 0 than we return an error 
        if (name.value.length === 0) {

            document.getElementById('lastName-error').innerHTML = "*The required field has not been filled in";
            var error = "2";
            // else we have no errors and return an empty error.  
        } else {

            document.getElementById('lastName-error').innerHTML = '';
        }
    }
    return error;
}

// City validation
function validateCity(city) {
    // init and error that will be returned 
    var error = "";
    // if city value length  == 0 than we return an error
    if (city.value.length === 0) {

        document.getElementById('city-error').innerHTML = "*The required field has not been filled in";
        var error = "3";
    } else {
        // else we have no errors and return an empty error.  
        document.getElementById('city-error').innerHTML = '';
    }
    return error;
}

// Street Adress validation 
function validateStreetAdress(street) {
    // init and error that will be returned 
    var error = "";

    if (street.value.length === 0) {
        // if street value length  == 0 than we return an error
        document.getElementById('street-error').innerHTML = "*The required field has not been filled in";
        var error = "1";
    } else {
        // else we have no errors and return an empty error.  
        document.getElementById('street-error').innerHTML = '';
    }
    return error;
}

//Postal code validation
function validatePostalCode(postal) {
    // init and error that will be returned 
    var error = "";
    var tpostal = trim(postal.value);
    var postalFilter = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;

    if (postal.value == "") {

        document.getElementById('postal-error').innerHTML = "*Please enter a postal code.";
        var error = "2";
    } else if (!postalFilter.test(tpostal)) { //test postal code for illegal characters

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

// Email validation
function validateEmail(email) {
    // init and error that will be returned 
    var error = "";
    var temail = trim(email.value); // value of field with whitespace trimmed off
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;

    if (email.value === "") {

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

// Phone validation
function validatePhone(phone) {
    // init and error that will be returned 
    var error = "";
    var stripped = phone.value.replace(/[\(\)\.\-\ ]/g, '');
    if (phone.value == "") {
        document.getElementById('phone-error').innerHTML = "*Please enter a phone number";
        var error = '6';
    } else if (phone.value.length != 10) {
        document.getElementById('phone-error').innerHTML = "*Phone number can only be 10 characters";
        var error = '6';
    } else {
        if (isNaN(parseInt(stripped))) {
            var error = "5";
            document.getElementById('phone-error').innerHTML = "*The phone number contains illegal characters.";

        } else {

            document.getElementById('phone-error').innerHTML = '';
        }
    }
    return error;
}


// Gender Validation
function validateGender(gender) {
    // init and error that will be returned 
    var error = '';
    if ((contact.genradio[0].checked === false) && (contact.genradio[1].checked === false)) {
        document.getElementById('gender-error').innerHTML = "*Gender required";
        error = "2";
    } else {
        document.getElementById('gender-error').innerHTML = '';
    }
    return error;
}

function validateRadioWork(work) {
    // init and error that will be returned 
    var error = '';
    if ((contact.work[0].checked === false) && (contact.work[1].checked === false)) {
        document.getElementById('work-error').innerHTML = "*Answer required";
        var error = "2";
    } else {
        document.getElementById('work-error').innerHTML = '';
    }
    return error;
}

function validatePassword() {
    // init and error that will be returned 
    var error = "";
    //Store the password field objects into variables
    var pass1 = document.getElementById('password');
    var pass2 = document.getElementById('cpassword');
    //Store the Confimation Message Object
    var message = document.getElementById('password-error');
    //Set the colors 
    var goodColor = "#66cc66";
    var badColor = "red";
    //Test so imput is not empty 
    if (pass1.value === "") {
        message.style.color = badColor;
        message.innerHTML = "*Enter Passwords";
        error = "1";
        // test that input is not less than 8 characters
    } else if (pass1.value.length < 8) {
        message.style.color = badColor;
        message.innerHTML = "Password is too short!";
        error = "2";
        // Test that input is not more than 12 characters 
    } else if (pass1.value.length > 12) {
        message.style.color = badColor;
        message.innerHTML = "Passwords is too long!";
        error = "3";
        //Password must have at leats one letter
    } else if (pass1.value.search(/[a-z]/i) < 0) {
        message.style.color = badColor;
        message.innerHTML = "Your password must contain at least one letter.";
        error = "4";
        //Password must have at leats one number
    } else if (pass1.value.search(/[0-9]/) < 0) {
        message.style.color = badColor;
        message.innerHTML = "Your password must contain at least one digit.";
        error = "5";
        //Password must have at leats one dot
    } else if (pass1.value.search(/[.]/) < 0) {
        message.style.color = badColor;
        message.innerHTML = "Your password must contain at least one dot (.) sign";
        error = "6";
        //Password must have at leats one slash
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

function validatePreffered() {
    // init and error that will be returned 
    var error = '';
    var Progress = document.getElementById("Progress");
    var Morningside = document.getElementById("Morningside");
    var Ashtonbee = document.getElementById("Ashtonbee");
    // if none were choosen throws a mistake message
    if ((Progress.checked === false) && (Progress.checked === false) && (Ashtonbee.checked === false)) {
        document.getElementById('Preffered-error').innerHTML = "*At least one must be choosen";
        var error = "2";
    } else {
        document.getElementById('Preffered-error').innerHTML = '';
    }
    return error;
}


function validateInterest(interest) {
    // init and error that will be returned 
    var error = "";
    // If input is empty throws a mistake message
    if (interest.value.length === 0) {

        document.getElementById('interest-error').innerHTML = "*The required field has not been filled in";
        var error = "1";
    } else {

        document.getElementById('interest-error').innerHTML = '';
    }
    return error;
}