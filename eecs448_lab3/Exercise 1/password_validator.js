function validate()
{
    let password = document.getElementById("input_password");
    let verify = document.querySelector("#verify_password");
    if(password.value.length<8)
    {
        alert("Password must be at least 8 characters long");
    }
    if(verify.value.match(password.value))
    {
        alert("Passwords match!");
    }
    if(!verify.value.match(password.value))
    {
        alert("Password must match");
    }
}