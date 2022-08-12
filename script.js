function logar() {
  alert("Login realizado com sucesso!");
}
function erroLogin() {
  alert("Alguns campos não foram inseridos.");
}

function pegaDadosLogin(){
    let inputEmail = document.getElementById("lg");
    let inputPassword = document.getElementById("senha");
    
    if (inputEmail.value.length < 5 || inputPassword.value.length < 5 ) {
        erroLogin();
      } else {
        logar();
      }
    }
    
    
