
// ============== The third method =============

(async function getApi(){
    var items = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    var result = await items.json();
    var ahmed =result.recipes;
    var myText = "";
    for(var i=0; i<ahmed.length; i++){
        var cartoona =`
                        <div class="col-md-4 text-center mb-5">
                        <img src="${ahmed[i].image_url}" class='w-100' style='height:350px'>
                        <h4>${ahmed[i].title}</h4>
                        <h5>${ahmed[i].publisher}</h5>                    
                        </div>
                    ` ; 
           myText = myText+cartoona;
    }
        document.querySelector(".test").innerHTML=myText;
})();















// ==============End  The third method =============
  // console.log(result)





















// document.getElementById("dem").innerHTML=result;















// https://jsonplaceholder.typicode.com/photos



    // document.querySelector(".test img").src = result[0].url;
    // document.querySelector(".test h4").innerHTML = result[0].title;
    // document.querySelector(".test h5").innerHTML = result[0].id;