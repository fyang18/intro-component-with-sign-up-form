function checkInput() {

    var firstName = document.getElementById("firstName");
    var errorFirstName = document.getElementById("errorFirstName");

    var lastName  = document.getElementById("lastName");
    var errorLastName= document.getElementById("errorLastName");

    var password  = document.getElementById("password");
    var errorPassword= document.getElementById("errorPassword");

    var email  = document.getElementById("email");
    var errorEmail= document.getElementById("errorEmail");

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    // Check input firstName
	if (firstName.value.length == "") {
		firstName.style.border = "2px solid #cf8e8c";
        firstName.style.backgroundImage = "url(images/icon-error.svg)";
        errorFirstName.style.display = "block";

    } else {
        firstName.style.border = "1px solid #dfdfdf";
        firstName.style.backgroundImage = "none";
        errorFirstName.style.display = "none";
    }
    
    // Check input lastName
    if (lastName.value.length == "") {
		lastName.style.border = "2px solid #cf8e8c";
        lastName.style.backgroundImage = "url(images/icon-error.svg)";
        errorLastName.style.display = "block";
    } else {
        lastName.style.border = "1px solid #dfdfdf";
        lastName.style.backgroundImage = "none";
        errorLastName.style.display = "none";
    }
    
    // Check input email
    if (email.value.length !== "" && (email.value.match(mailformat)) ) {
		email.style.backgroundImage = "none";
        email.style.border = "1px solid #dfdfdf";
        errorEmail.style.display = "none";
    } else  {
        email.style.border = "2px solid #cf8e8c";
        email.style.backgroundImage = "url(images/icon-error.svg)";
        errorEmail.style.display = "block";
    } 
    
    // Check input password
    if (password.value.length == "") {
		password.style.border = "2px solid #cf8e8c";
        password.style.backgroundImage = "url(images/icon-error.svg)";
        errorPassword.style.display = "block";
    } else {
        password.style.border = "1px solid #dfdfdf";
        password.style.backgroundImage = "none";
        errorPassword.style.display = "none";
    }

    // Clear inputs
    if (firstName.value.length != "" && lastName.value.length != "" && password.value.length != "" && email.value.length != "" && email.value.match(mailformat)) {
        firstName.value = "";
        lastName.value  = "";
        password.value  = "";
        email.value     = "";  
    }else {
        firstName.value = firstName.value;
        lastName.value  = lastName.value;
        password.value  = password.value;
        email.value     = email.value;       
    }
}
