const paint = document.querySelector('body');
// const buttons = document.getElementsByClassName('button');
// returns HTMLcollection which doesn't have foreach function
const buttons = document.querySelectorAll('.button');
buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(e){
    paint.style.backgroundColor = e.target.id
  })
})
