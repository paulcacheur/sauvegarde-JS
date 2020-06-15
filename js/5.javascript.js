var nom = window.prompt("Saisissez votre nom");
var prénom = window.prompt("Saisissez votre prénom");

if (window.confirm("Etes vous un homme?") == true) 
    { 
   alert ("Bonjour Monsieur "+ prénom + " " + nom + " bienvenue \n sur notre site web")
    }
    else 
    {
    alert ("Bonjour Madame "+ prénom + " " + nom +  " bienvenue \n sur notre site web")
    }
1