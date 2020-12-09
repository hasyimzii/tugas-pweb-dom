// login
function login() {
    var email = document.getElementById("email").value;
    var pass  = document.getElementById("password").value;
    var error = document.getElementById("error");
    
    if(email == "admin@mail.com" && pass == "123123") {
        window.location = "success.html"
    } else {
        error.innerText = "invalid usename or password!"
    }
}

// show password
function showPass() {
    var pass = document.getElementById("password");
    if (pass.type == "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}