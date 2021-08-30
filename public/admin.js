const userList = document.getElementById("users");
console.log(userList)

async function getUsers(){
    const res = await axios.get("http://localhost:3000/users");
    let users = res.data;
    for(let user of users){
        let element = document.createElement("li")
        if(user.firstName && user.lastName){
            element.innerText = user.firstName + " " + user.lastName + ", " + user.email;
        } else if(user.firstName){
            element.innerText = user.firstName + ", " + user.email;
        } else{
            element.innerText = user.email;
        }
        userList.append(element)
    }
    return res.data;
}

getUsers();
