


                /*annimation pour le search */


var bol =false;

var m=document.getElementById("reste");
var a=document.getElementById("search");
var g=document.getElementById("shadow");
var b=document.getElementById("search-bar");
var i =document.getElementById("button-search");
var x=m.offsetTop;
x+=12;

window.onscroll=function(){
  
    
    if(document.body.scrollTop >= x ) {
        a.style.width="60%";
        g.style.width="2.8%";
        g.style.left="100.2%"
        a.style.position="fixed";
        a.style.top="-1.6%";
        b.style.transition="1s ease";
        b.style.opacity="0.92";
        b.style.clipPath="polygon(17% 0%, 100% 0, 100% 100%, 0% 100%)";
        a.style.height="13.3%";
        if(!bol) { b.style.width="10.5%";}
        a.style.right="8.15%";
        i.style.opacity="0.9";
        
        i.onclick=function(){
                            bol=true;
                            b.style.width="60%";
                            }
        
        b.onmouseout=function(){
                                bol=false;
                                b.style.width="10.5%";
                                }
              
    }else if(document.body.scrollTop < x ){
        g.removeAttribute("style");
        a.removeAttribute("style");
        b.removeAttribute("style");
        a.style.right="0%";
        b.style.transition="1s ease";
        b.style.width="60%";
        a.style.position="absolute";
        i.onclick=function(){
                            
                            }
        
        b.onmouseout=function(){
                                
                                }
        
        

      }   
    
}


        
         /*------------------------------------------*/  




                 /*annimation pour login */


var login=document.getElementById("login");
var left_login =55;
var leftbol=false;
var translatelogin=document.getElementById("translate-login");
translatelogin.onclick=function(){
    
    
    login.style.left=left_login+"%";
    if(!leftbol){
        translatelogin.style.transform="rotate(0deg)";
        left_login=95;
        leftbol=true;
    }
    else {
        translatelogin.style.transform="rotate(180deg)";
       left_login=55;
        leftbol=false; 
    }
    login.style.transition="1.5s ease";
    translatelogin.style.transition="2s ease";
    
}


                /*------------------------------------------*/






               /*animation pour Slide*/


document.getElementById("btnG").onclick=function(){
    
    
    var y ;var obj1; var obj2;var obj3;var obj4;var obj5; 
     
obj1=document.getElementById("d1");
obj2=document.getElementById("d2");
obj3=document.getElementById("d3");
obj4=document.getElementById("d4");


    
    
    obj1.attributes.removeNamedItem("class");
     y=document.createAttribute("class");
    y.value="d1tod2";
    obj1.attributes.setNamedItem(y);
    
     obj2.attributes.removeNamedItem("class");
     y=document.createAttribute("class");
    y.value="d2tod3";
    obj2.attributes.setNamedItem(y);
    
     obj3.attributes.removeNamedItem("class");
     y=document.createAttribute("class");
    y.value="d3tod4";
    obj3.attributes.setNamedItem(y);
    
     obj4.attributes.removeNamedItem("class");
    y=document.createAttribute("class");
    y.value="d4tod1";
    obj4.attributes.setNamedItem(y);
    
    
    
   
   y=document.createAttribute("class");
    y.value="ss";
    document.getElementById("s").attributes.setNamedItem(y);
    
    document.getElementById("s").addEventListener("transitionend",hg);
    
    
    
    
}

    
  
function hg(){
//document.getElementById("fm2").onclick=function(){
    
var i=1;var x;var y;
          var obj1; var obj2;var obj3;var obj4; 

obj1=document.getElementById("d1");
obj2=document.getElementById("d2");
obj3=document.getElementById("d3");
obj4=document.getElementById("d4");
   console.log("hhhh")  ;
 document.getElementById("s").attributes.removeNamedItem("class");


      
                        obj4.attributes.removeNamedItem("class");
                        y=document.createAttribute("class");
                        y.value="d1";
                        obj4.attributes.setNamedItem(y);
                        obj4.attributes.removeNamedItem("id");
                        y=document.createAttribute("id");
                        y.value="d1";
                        obj4.attributes.setNamedItem(y); 
                      i++;
 
                       
      
  
                        obj2.attributes.removeNamedItem("class");
                        y=document.createAttribute("class");
                        y.value="d3";
                        obj2.attributes.setNamedItem(y);
                        obj2.attributes.removeNamedItem("id");
                        y=document.createAttribute("id");
                        y.value="d3";
                        obj2.attributes.setNamedItem(y); 
                       i++;
    
    
                        obj1.attributes.removeNamedItem("class");
                        y=document.createAttribute("class");
                        y.value="d2";
                        obj1.attributes.setNamedItem(y);
                        obj1.attributes.removeNamedItem("id");
                        y=document.createAttribute("id");
                        y.value="d2";
                        obj1.attributes.setNamedItem(y);  
                      i++;

    
                        obj3.attributes.removeNamedItem("class");
                        y=document.createAttribute("class");
                        y.value="d4";
                        obj3.attributes.setNamedItem(y);
                        obj3.attributes.removeNamedItem("id");
                        y=document.createAttribute("id");
                        y.value="d4";
                        obj3.attributes.setNamedItem(y); 
                       i++;
             
                    
                   
    
}

               /*-------------------------------------*/