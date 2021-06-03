var peso = 0, altr=0;
function cimc() {
  peso = document.getElementById('peso').value;
  altr = document.getElementById('altura').value;
  var altrq = altr * altr;
  var rimc = (peso)/altrq;
  var imc = Math.round(rimc * 10)/10;
  
  document.getElementById('imc').innerHTML = " Seu IMC é : " +imc;
  if (imc < 18.5){
    document.getElementById('vimc').innerHTML = " Abaixo do peso! " ;
  }
  else if (imc >= 18.5 || imc <= 24.9) {
    document.getElementById('vimc').innerHTML = " Peso normal! " ;
  }
  else if (imc >= 25.0 || imc <= 29.9) {
    document.getElementById('vimc').innerHTML = " Sobrepeso! " ;
  }
   else if (imc >= 30.0 || imc < 40.0) {
    document.getElementById('vimc').innerHTML = " Obesidade! " ;
  }
  else if (imc >= 40.0) {
    document.getElementById('vimc').innerHTML = " Obesidade grave! " ;
  };

}


