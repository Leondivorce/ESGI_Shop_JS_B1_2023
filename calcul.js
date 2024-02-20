//recup valeur html

//creation variable

//formulaire
const form = document.getElementById("form")

//inputs
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const select = document.getElementById("select");

//results
const result = document.getElementById("result");

//Creation des events
//le parametre event est passé de façon implicite
//mais il est preferable de laisser tel quel pour une meilleur comprehnsion
form.onsubmit = (event) => {
    event.preventDefault();
 // Recuperation de la valeur du select (add,sub,mul, div)
    console.log("valeur de l'élément select:", select.value)

//recuperation de la valeur 
    console.log("valeur de l'input1", input1.value);
    console.log("valeur de l'input2", input2.value);


// utilisation de la valeur du select pour effectuer l'opération
switch (select.value) {
    case "add":
      console.log("calcul choisi addition");
      // Affichage du resultat de l'addition
      result.innerText = Number(input1.value) + Number(input2.value);

      break;
    case "mul":
      console.log("calcul choisi multiplication");
        // Affichage du resultat de multiplication
         result.innerText = Number(input1.value) * Number(input2.value);
      break;
    case "div":
      console.log("calcul choisi division");
      // Affichage du resultat de division
      result.innerText = Number(input1.value) / Number(input2.value);
      break;
    case "sub":
      console.log("calcul choisi soustraction");
      // Affichage du resultat de soustraction
      result.innerText = Number(input1.value) - Number(input2.value);
      break;

    default:
      console.log("calcul non géré");
      break;
  }
};