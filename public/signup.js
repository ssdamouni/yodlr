const form = document.getElementById("signup");
const BASE_URL = "http://localhost:3000/users"

async function onSubmit(event){
    event.preventDefault();
    let email = document.getElementById("email").value;
    let lastName = document.getElementById("lastName").value;
    let firstName = document.getElementById("firstName").value;
    let state = document.getElementById("state").value;
    let payload = {
        email: email,
        lastName: lastName,
        firstName: firstName,
        state: state
    };
    const response = await axios.post(BASE_URL, payload);
    console.log(response);
    window.location.replace("http://localhost:3000/admin.html");
}
form.addEventListener("click", onSubmit)