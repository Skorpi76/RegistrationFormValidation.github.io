

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

// validate required fields
function validateFirstName(name) {
    var error = "";
    
    if (name.value.length == 0) {
       
        document.getElementById('firstName-error').innerHTML = "*The required field has not been filled in";
        var error = "1";
    } else {
    
        document.getElementById('firstName-error').innerHTML = '';
    }
    return error;
}
function validateLastName(name) {
    var error = "";
    
    if (name.value.length == 0) {
    
        document.getElementById('lastName-error').innerHTML = "*The required field has not been filled in";
        var error = "1-2";
    } else {
    
        document.getElementById('lastName-error').innerHTML = '';
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
    if ((contact.genradio[0].checked == false) && (contact.genradio[1].checked == false))
    {
        document.getElementById('gender-error').innerHTML = "*Gender required";
        var error = "2";
    } else {
        document.getElementById('gender-error').innerHTML = '';
    }
    return error;
}
function validateRadioWork(work)
{
    if ((contact.work[0].checked == false) && (contact.work[1].checked == false))
    {
        document.getElementById('work-error').innerHTML = "*Answer required";
        var error = "2";
    } else {
        document.getElementById('work-error').innerHTML = '';
    }
    return error;
}

function validatePassword()
{
    var error = "";
    //Store the password field objects into variables ...
    var pass1 = document.getElementById('password');
    var pass2 = document.getElementById('cpassword');
    //Store the Confimation Message Object ...
    var message = document.getElementById('password-error');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    if(pass1.value == "" || pass2.value == "")
    {
        message.style.color = badColor;
        message.innerHTML = "*Enter Passwords";
       
    }
    else
    {
        //Compare the values in the password field 
        //and the confirmation field
        if(pass1.value == pass2.value){
            //The passwords match. 
            //Set the color to the good color and inform
            //the user that they have entered the correct password        
            message.style.color = goodColor;
            message.innerHTML = "Passwords Match!"
            error = "1";
        }else{
            //The passwords do not match.
            //Set the color to the bad color and
            //notify the user.       
            message.style.color = badColor;
            message.innerHTML = "*Passwords Do Not Match!"
        }
    }
    return error;
}  




