var hour=document.getElementById("hh");
var min=document.getElementById("mm");
var sec=document.getElementById("ss");
var day=document.getElementById("dd");
var mon=document.getElementById("mon");
var year=document.getElementById("yy");
var ist=document.getElementById("i");

var x=function (){
    const b=new Date();
    var c=b.getHours();
    var d=b.getMinutes();
    var e=b.getSeconds();
    var f=b.getDay();
    var g=b.getMonth();
    var h=b.getFullYear();

    var l="A.M";
    if(c>12){
        l="P.M";
        c=c-12;
    }


    hour.innerText=c;
    min.innerText=d;
    sec.innerText=e;
    day.innerText=f;
    mon.innerText=g+1;
    year.innerText=h;
    ist.innerText=l;

} 
x();
setInterval(x,1000);
