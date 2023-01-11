let ul =document.querySelector('.home > .nav > .prt2 > ul');
let li =document.querySelectorAll('.home > .nav > .prt2 > ul > li');
let DIv = document.querySelector('.home > .nav > .prt2');
let toggler = document.querySelector('.home > .nav > .prt2 > .fa-bars');
toggler.onclick=function(){
//    DIv.classList.toggle('show');
    ul.classList.toggle('show-ul');
    for(let i=0;i<8;i++){
        
        li[i].classList.toggle('show-li');
        


    }
   
}