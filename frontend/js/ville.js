 document.addEventListener('DOMContentLoaded', chargerlisteVille); 
 setTimeout("chargerlisteVille()",500);
 let listeville=""
//US01
function chargerlisteVille(){  
   let xhr = new XMLHttpRequest();                                                             
    xhr.open('get', "http://localhost:81/villeList?", true);    
      xhr.onload =                                                                                
        function traiterReponse() {

            listeville = JSON.parse(xhr.responseText);	
        };
    xhr.send(); 
	let stringlisteville="<table id=\"tableville\"><tbody>";
	if (listeville.length>2){stringlisteville+="<tr><th>codePostal</th><th>Nom</th></tr>"}
		for (let i=0;i<listeville.length;i++){
			stringlisteville+="<tr><td>"+listeville[i].CodeP+"</td><td>"+listeville[i].villeName+"</td></tr>"
		}
	document.querySelector("#zoneListeVille").innerHTML = stringlisteville+"</tbody></table>";
	loadMaladeVilles();
	insertoption();
}
//US02
function ajouterVille(formville){
	let erreur = 0;

	if (formville.nomVille.value === "" ||formville.codePostal.value === ""){alert("tout les champs doivent etre completés");erreur = 1;}
	if (formville.nomVille.value.length > 50){alert("nom de ville trop grand (50 cara max)");erreur = 1;}
	if (formville.codePostal.value.length >= 5){alert("code postal trop grand (4 chiffres max)");erreur = 1;}
	for (let i=0;i<listeville.length;i++){
			if (listeville[i].villeName ==formville.nomVille.value){alert("ville deja presente dans la db");erreur = 1;}
	}
	if (erreur==0){
		
		let xhr = new XMLHttpRequest();                                                             
    xhr.open('get', "insertville?CP="+document.getElementById("formAjoutVille").codePostal.value+"&VillN="+document.getElementById("formAjoutVille").ville.value, true);                                                                               
    xhr.send();
		document.getElementById("tableville").innerHTML = document.getElementById("tableville").innerHTML.substring(0,document.getElementById("tableville").innerHTML.length-8)+"<tr><td>"+formville.codePostal.value+"</td><td>"+formville.nomVille.value+"</td></tr></tbody>";
		listeville.push({CodeP:Number(formville.codePostal.value),villeName: formville.nomVille.value });
	
	};
	
	return false;
}
// ajout option dans formulaire
let villehtmloption=''
window.setTimeout(addVilleOption,1000)
function addVilleOption(){
	for ( i=0; i < listeville.length ;i++){
	villehtmloption+= "<option value=\""+listeville[i].CodeP+"\">"+listeville[i].villeName+" ["+listeville[i].CodeP+"]</option>"
	}
	document.getElementById("villeVisitee").innerHTML = villehtmloption
}
