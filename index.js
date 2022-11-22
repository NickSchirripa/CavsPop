/*
Challenge:
1. Take control of the close button.
2. Use an event listener to set the display 
   property of the modal to 'none' when the
   close button is clicked.
*/

const modal = document.getElementById('modal')
const btn = document.getElementById("btn") 
const x = document.getElementById("modal-close-btn")
const pop = document.getElementById("popup1")
const pop2 = document.getElementById("popup2")
const pop3 = document.getElementById("popup3")
const pop4 = document.getElementById("popup4")
const pop5 = document.getElementById("popup5")
 
btn.addEventListener("click", function() {
    modal.style.display = "block"
})

x.addEventListener("click", function() {
    pop.style.display = "block"
    setTimeout(function(){
        pop2.style.display = "block"
    }, 500)
    setTimeout(function(){
        pop3.style.display = "block"
    }, 900)
    setTimeout(function(){
        pop4.style.display = "block"
    }, 1300)
    setTimeout(function(){
        pop5.style.display = "block"
    }, 1700)
})