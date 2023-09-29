let API = "http://127.0.0.1:4000";
let username = document.getElementById("signupUsername");
let password = document.getElementById("password");
let btnSubmit = document.getElementById("submit");


async function  handleSubmit(){
    console.log(username.value)
    const respuesta = await fetch(`${API}/crearCuenta`,{
      method:"POST",
    body: JSON.stringify ({
      username:username.value,
      password:password.value
    })
    }); 
    res = await respuesta.json()
    console.log(res)
    }

btnSubmit.addEventListener("click",handleSubmit)