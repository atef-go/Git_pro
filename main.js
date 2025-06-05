
// =========== start  === XMLHttpRequest ====
( function getApi(){
     var xhttp = new XMLHttpRequest;
     xhttp.onreadystatechange = function(){
         if(xhttp.readyState==4 && xhttp.status==200){
         var items = xhttp.responseText;
             var result =JSON.parse(items);
// ===================================================
             var ahmed =result.products;
             var myText = "";
             for(var i=0; i<ahmed.length; i++){
                 var cartoona =`
                                      <div class="col-md-4 text-center mb-5">
                                      <img src="${ahmed[i].images[0]}" class='w-100' style='height:350px'>
                                      <h4>${ahmed[i].title}</h4>
                                      <h5>${ahmed[i].category}</h5>
                                      <h5>${ahmed[i].price}$</h5>
                                      </div>
                                      ` ; 
                  myText = myText+cartoona;
              }
               document.querySelector(".test").innerHTML=myText;        
// ==================================================
         }
     }
     xhttp.open("GET","https://dummyjson.com/products",true);
     xhttp.send();
 })();
// =========== End  === XMLHttpRequest ====


