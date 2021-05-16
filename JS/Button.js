function showhideS8()
    {  
         var div = document.getElementById("S8");  
         if (div.style.display !== "none") 
         {  
             div.style.display = "none";  
         }  
         else
         {  
             div.style.display = "block";  
         }  
    }

document.getElementById("button1").onclick = function(){showhideS8()}

function showhide3P()
    {  
         var div = document.getElementById("3P");  
         if (div.style.display !== "none") 
         {  
             div.style.display = "none";  
         }  
         else
         {  
             div.style.display = "block";  
         }  
    }

document.getElementById("button2").onclick = function(){showhide3P()}

function showhidecars()
    {  
         var div = document.getElementById("cars");  
         if (div.style.display !== "none") 
         {  
             div.style.display = "none";  
         }  
         else
         {  
             div.style.display = "block";  
         }  
    }

document.getElementById("button3").onclick = function(){showhidecars()}