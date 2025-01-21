// exo2.5
let nombreArticle = parseInt(prompt("entrez le nombre d'article: "));
let prixUnitaire = parseFloat(prompt("entrer le prixUnitaire de l'article:"));

let tauxTVA = 0.20;

let momtantHT = nombreArticle*prixUnitaire;
let montantTTC = montantHT*(montantHT*tauxTVA);

console.log("le montant TTC est :" + montantTTC.toFixed(2));




// exo2.6


let diametre = parseFloat(prompt("entre le diametre:"));
let rayon = diametre/2;

console.log("le rayon du cerclre est : " + rayon.toFixed(2));
console.log("le diametre est : " + diametre.toFixed(2));



//exo2.7

let nombre1 = parseInt(prompt(" entrer le nombre1:"));
let nombre2 = parseFloat(prompt("entrer le nombre2:"));

let somme = nombre1 + nombre2;
let produit = nombre1 * nombre2;

console.log("la somme des deux nombre est : " +somme);
console.log("le produit des deux nombre est:"+produit);


//exo2.8

let nombre01 = parseInt(prompt("entrer le nombre01:"));
let nombre02 = parseInt(prompt("entrer le nombre02:"));


if (nombre02 !==0){
let quotient = Math.floor(nombre01 / nombre02);
let reste = nombre01 % nombre02;

console.log("le quotient de la division est:" +quotient);
console.log("le reste de la division est:" +reste);

}
