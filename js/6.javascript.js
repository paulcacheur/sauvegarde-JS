var a = '100';
var b = 100;
var c = 1.00;
var d = true;


document.write("ceci est une chaine de caractère:" + a) ;
console.log("b avant incrementation " + b);
b--;
document.write (b);
console.log("b apres incrementation " + b);
console.log("c avant ajout de a");
c = c + a ;
console.log("inversion de d");
d = false ;

// exemple 1 avec cas réuins

var modele = "Clio";

switch (modele)
{   
  case "508" :
     console.log("Modèle 508 : marque Peugeot");  
     break; 

  case "Clio" :   
  case "Laguna" :
     console.log("Modèle "+modele+" : marque Renault"); 
     break;  

  case "C5" :
     console.log("Modèle C5 : marque Citroën");
     break;

  default: 
     console.log("Modèle "+modele+": marque inconnue");
} 

// exemple 2 avec condition imbriquée 

var reponse = "oui"

if (reponse == "oui")
{   
   console.log("Bonne réponse!");

   score++; // Augmente le score de 1

   if (score == 20)
   {
       console.log("Vous avez gagné !");
   } // fin du 2ème if  

} // fin du 1er if
   
 

/* les mêmes mais avec demande d'input de l'uilisateur

var nom;
a = prompt("Entrez votre nom");

var a;
b = parseInt(prompt("Entrez un nombre"));



var d = confirm("Veuillez cliquer sur OK ou bien Annuler");

*/