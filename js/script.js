function PegaDadosLogin(){
    inputEmail = document.querySelector("#Email");
    inputPassword = document.querySelector("#Password");
    
    if (inputEmail.value.length < 5 || inputPassword.value.length < 5 ) {
        erroLogin();
      } else {
        logar();
      }
    }
    
    function logar() {
      alert("Você foi logado com sucesso e pode retornar para a pagina principal");
    }
    function erroLogin() {
      alert("Você precisa preencher todos os campos");
    }
    
