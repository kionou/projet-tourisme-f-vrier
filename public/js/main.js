let input = document.querySelectorAll('input')
let boutton = document.querySelector('.boutton');

let form = document.querySelector('.formulaire')
// let nom = document.querySelector('.nom');
// let prenom = document.querySelector('.prenom');
// let email = document.querySelector('.email');
// let numero = document.querySelector('.number');
// let ville = document.querySelector('.ville');
// console.log(prenom);


let nav = document.querySelector('nav');
console.log(nav);

window.addEventListener('scroll',function(){
  if (window.pageYOffset > 100) {
    nav.classList.add('bg-dark', 'shadow')
  } else {
     nav.classList.remove('bg-dark', 'shadow')
  }
})

