var menu=document.querySelector(".main-nav"),toggle=document.querySelector(".main-nav__toggle");menu.classList.remove("main-nav--nojs"),toggle.addEventListener("click",function(e){menu.classList.contains("main-nav--closed")?(menu.classList.remove("main-nav--closed"),menu.classList.add("main-nav--opened")):(menu.classList.add("main-nav--closed"),menu.classList.remove("main-nav--opened"))});