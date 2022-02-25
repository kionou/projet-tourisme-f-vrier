let input = document.querySelectorAll('input')
 let boutton = document.querySelector('.boutton');
// console.log(boutton);
 let form = document.querySelector('.formulaire')
// let nom = document.querySelector('.nom');
// let prenom = document.querySelector('.prenom');
// let email = document.querySelector('.email');
// let numero = document.querySelector('.number');
// let ville = document.querySelector('.ville');
// console.log(prenom);

function active(){
  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    console.log(input[i].value);

    if (input[i].value === "") {
      boutton.disabled = true;
    } else {
      boutton.disabled = false;
    }
    
  }
}






form.addEventListener('focus',(event)=>{
  active(event)


})


$(document).ready(function() {


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 100) {
        $(".navbar").addClass("bg-white");
    } else {
      $(".navbar").removeClass("bg-white");
    }
});
  
});


// if (nom.value === "" && prenom.value === "" && email.value === "" && numero.value === ""
// && ville.value ==="") {