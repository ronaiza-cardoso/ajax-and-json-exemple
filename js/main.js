var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  //instanciando XMLHttpRequest
  var nossoRequest = new XMLHttpRequest();

  // usando o open com com o argumeto get para pegarmos os dados da internet
  // o segundo argumeto é o endereço onde está guardado os dados que queremos
  nossoRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');

  //usando o método onload poderemos dizer o que acontece quando o dado é carregado
  // estamos usando uma função anônima
  nossoRequest.onload = function () {
  //  console.log(nossoRequest.responseText);
    var nossoDado = JSON.parse(nossoRequest.responseText);
    //console.log(nossoDado[0]);
    renderHTML(nossoDado);
  };

  //aqui estamos enviando o request
  nossoRequest.send();
  pageCounter++;
  if(pageCounter > 3){
    btn.classList.add("hide-me");
  }
});

function renderHTML(data){
  var html = "";

 for(i = 0; i < data.length; i++){
   html += "<p>" + data[i].name + "is a " + data[i].species + " that likes to eat ";

   for(ii = 0; ii < data[i].foods.likes.length; ii++){
     if(ii == 0){
       html += data[i].foods.likes[ii];
     } else {
      html += " and " + data[i].foods.likes[ii];
     }
   }

   html += " and dislikes ";

   for(ii = 0; ii < data[i].foods.dislikes.length; ii++){
     if(ii == 0){
       html += data[i].foods.dislikes[ii];
     } else {
      html += " and " + data[i].foods.dislikes[ii];
     }
   }


   html += "</p>";
 }

  animalContainer.insertAdjacentHTML("beforeend", html);
}
