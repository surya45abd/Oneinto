var flag1 = 0;
var flag2 = 0;
var flag3 = 0;



function fun1(){
    var onr=document.getElementsByClassName("block1")[0];
    if(flag1==0){
    onr.style.backgroundImage="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpzIbApx7QpnYnfttkLhgAeJ8or9TywyAz0g&s)";
        flag1++;
    }
    else{
    onr.style.backgroundImage="url(https://c8.alamy.com/comp/RF64KP/contour-childrens-bunny-simple-drawing-animal-RF64KP.jpg)";
        flag1--;
    }
}
function fun2(){
    var onr=document.getElementsByClassName("block2")[0];
    if(flag1==0){
    onr.style.backgroundImage="url(../JAVA/surya.png)"; 
        flag1++;
    }
    else{
    onr.style.backgroundImage="url(https://c8.alamy.com/comp/RF64KP/contour-childrens-bunny-simple-drawing-animal-RF64KP.jpg)"; 
        flag1--;
    }
}
function fun3(){
    var onr=document.getElementsByClassName("block3")[0];
    if(flag1==0){
    onr.style.backgroundImage="url(../JAVA/surya.png)";
        flag1++;
    }
    else{
    onr.style.backgroundImage="url(https://c8.alamy.com/comp/RF64KP/contour-childrens-bunny-simple-drawing-animal-RF64KP.jpg)";
        flag1--;
    }
}
  
var flag4=0;

function fun4(){
    var para = document.getElementsByClassName("parac")[0];
    if(flag4==0){
    para.style.color="red";
    flag4++;
    }
    else{
    para.style.color="blue";
    flag4--;
}
}