"use strict"

const input = document.querySelector(".input")
const btn = document.querySelector(".btn")
const list = document.querySelector(".list")

btn.addEventListener("click", function(){
    if(input.value === ""){
        alert("you must enter something")
    }else{
        let li = document.createElement("li")
   li.textContent = input.value
   list.appendChild(li)
   li.addEventListener("click", function(){
    li.style.textDecoration = "line-through"
})
li.addEventListener("click", function(){
setTimeout(() => {
    li.classList.add("listG")
}, 1200);
})
    }
    input.value = ""
    
})









