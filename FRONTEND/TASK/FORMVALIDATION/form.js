function validateform(){
    let usernameInput = document.getElementById("name")
    let username=usernameInput.value.trim();
    let passwordInput=document.getElementById("password")
    let password=passwordInput.value.trim();

    let name_error = document.getElementById("name-error");
    name_error.innerText=""
    usernameInput.style.border="1px solid #ccc";
    

    let password_error = document.getElementById("password-error")
    password_error.innerText=""
    passwordInput.style.border="1px solid #ccc";

    if (username === "") {
        name_error.innerText="Username Cannot be empty";
        usernameInput.style.border="1px solid red";
        return false;
     }
     else if (/\d/.test(username)){
        name_error.innerText="Name doesnot contain numbers";
        usernameInput.style.border="1px solid red";
        return false;   
     }
     
    if (!/^.{6,}$/.test(password)) {
        password_error.innerText = "Enter the password above 6 letters"
        passwordInput.style.border="1px solid red"
        return false;
     }

     name_error.innerText=""
     password_error.innerText=""
     usernameInput.style.border="1px solid green";
     alert("Form Submitted Succesfully");
    return true;
}