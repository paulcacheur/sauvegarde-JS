/* exercice 1
var Nb = parseInt(window.prompt("Indiquez un nombre pour pair impair"));
console.log(Nb)


if (Nb%2==0)
   {
      document.write("pair");
   }
else
   {
      document.write("impair");
   }
*/


/* exercice 2
var today=new Date();
var anneecours = today.getFullYear();
var annee = parseInt(window.prompt("Entrez votre année de naissance"));
var age;

age = anneecours-annee

if (age>18)
   {
      document.write("majeur");
   }
else
{
   document.write("mineur");
}

*/


/* exercice 2 autre

var today=new Date();
var anneecours = today.getFullYear();

var annee = parseInt(window.prompt("Entrez votre année de naissance"));
var age;

age = anneecours-annee
console.log(age);
(age >= 18) ? document.write("majeur") : document.write("mineur");

*/




/*exercice 3
var n1 = parseInt(prompt("Saisissez le premier nombre"));
var n2 = parseInt(prompt("Saisissez le second nombre"));
var op = prompt("saisissez un opérateur");
var total 

switch (op)
   {
      case prompt = "+":
      total = n1+n2;
      break;
   
      case prompt = "-":
      total = n1-n2;
      break;
   
      case prompt = "*":
      total = n1*n2;
      break;
  
      case prompt = "/":
      total = n1/n2;
      break;

      default:
      document.write("erreur");

   }
   document.write(total);

*/

