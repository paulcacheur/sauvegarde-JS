  //test exo algo 4.2
 
alert("Hello l'AFPA !");

// déclarer des variables et les afficher

if (window.confirm("Voulez-vous continuer ?") == true) 
{ 
    document.write("super");
}

    else 
{ 
        document.write("ah ouais");
}


var bouton1= document.getElementById("btn1");
bouton1.addEventListener("click",clickbtn1);
 
function clickbtn1()

// demander à rentrer des variables
{
var H = parseInt(prompt("rentrer les Heures"));
var M = parseInt(prompt("rentrer les Minutes"));
var S = parseInt(prompt("rentrer les Secondes"));
 
var S = S+1;
 
if (S == 60)
    {
S = 0;
M = M+1;
    }
 
if (M == 60)
    {
M = 0;
H = H+1;
    }
 
if (H == 24)
    {
H = 0;
    }
 
window.alert(H + " heures " + M + " Minutes " + S + " Secondes")
}

