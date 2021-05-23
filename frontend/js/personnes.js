// je viens de me rendre compte que j'ai oublier de diviser mon code js en plusieurs fichiers
let checkTablePersonnes = 0
document.onclick = function(){
								if(idTabActuel==="tabPersonnes"){
									if (checkTablePersonnes==0){
										loadPersonnes();checkTablePersonnes=1
									}
								}
							}

//charger le tableau des persones 
let listepersonnes=""
let listepersonnespositives=""
function loadPersonnes(){
document.getElementById("tbodyPersonnes").innerHTML =""
let xhr = new XMLHttpRequest();                                                             
    xhr.open('get',"personnesList?", true);    
      xhr.onload =                                                                                
        function() {
            listepersonnes = xhr.responseText;			
			document.getElementById("tbodyPersonnes").innerHTML += listepersonnes
        };
    xhr.send(); 
loadpersonnespositives();

}
function loadpersonnespositives(){
    let xhr = new XMLHttpRequest(); 
	xhr.open('get', "personnesPositivesList?", true);    
      xhr.onload =                                                                                
        function() {
            listepersonnespositives = xhr.responseText;			
			document.getElementById("tbodyPersonnes").innerHTML += listepersonnespositives
        };
    xhr.send(); 
	 window.setTimeout(nombrecas,2000); // il faut d'abord ouvrir onglet admin personnes pour  le nombre des cas charge
	 function nombrecas(){ 
		let cas = 0 // calcul nombre de cas en comptant nombre de tr
		for (let i=0 ;i<listepersonnespositives.length;i++){
			if (listepersonnespositives[i]+listepersonnespositives[i+1]+listepersonnespositives[i+2]+listepersonnespositives[i+3] ==="<tr>"){ 
				cas++;
			}
		} 
		document.getElementById("nombreMalades").innerHTML = cas;
		//nombre de test recents
		xhr.open('get', "nombreTeste?", true);    
        xhr.onload =function() {document.getElementById("nombreTests").innerHTML = xhr.responseText;};
		xhr.send();
	 }
}

//insert option au formulaire 
let listepersonne = [];
function insertoption(){
	let xhr = new XMLHttpRequest();
	xhr.open('get', "personneList?", true);  
	xhr.onload = function(){listepersonne = JSON.parse(xhr.responseText)}
	xhr.send();

	window.setTimeout(addOptions,2000); // laisse le temp à a la requete "personneList" de se faire
	function addOptions(){
		let HtmlOption=""
		for ( i=0; i < listepersonne.length ;i++){
			HtmlOption += "<option value=\""+listepersonne[i].membresId+"\">"+listepersonne[i].nom +" "+listepersonne[i].prenom+" ["+listepersonne[i].membresId+"]</option>"
		}
		document.getElementById("personneTestCovid").innerHTML = HtmlOption;
		document.getElementById("personneVisiteVille").innerHTML = HtmlOption;
	} 
}
// insert new personne + refresh tableau
function ajouterPersonne(formData){
	let xhr = new XMLHttpRequest(); 
	xhr.open('get', "insertPersonne?pren="+document.getElementById("formAjoutPersonne").prenom.value+"&nomP="+document.getElementById("formAjoutPersonne").nom.value+"&dateNess="+document.getElementById("formAjoutPersonne").naissance.value+"&sex="+document.getElementById("formAjoutPersonne").sexe.value, true); 
	xhr.send();
	loadPersonnes();
	return false;
}
//insert test covid 
function ajouterTestCovid(){
	let resultat = ''
	if (document.getElementById("resultatTestCovid").value == 0){resultat = 'non'}
	if (document.getElementById("resultatTestCovid").value == 1){resultat= 'oui'} // erreur lors de creation de table champ devrait etre binary , du coup fix ici plus simple 
	let xhr = new XMLHttpRequest();
	xhr.open('get',"insertTest?personne="+document.getElementById("personneTestCovid").value+"&resultat="+resultat+"&datedutest="+document.getElementById("dateTestCovid").value,true);
	xhr.send();
	window.setTimeout(loadPersonnes,1000)
	return false;
}
//insert visites

function ajouterVisiteVille(formData){
	let xhr = new XMLHttpRequest(); 
	xhr.open('get', "insertVisite?CP="+document.getElementById("villeVisitee").value+"&mID="+document.getElementById("personneVisiteVille").value+"&visitdate="+document.getElementById("dateVisite").value, true); 
	xhr.send();
	return false;
}
// load tableau malade/villes

function loadMaladeVilles(){
let stringMaladeParVille=''
let tableauMaladeParVille=[]
let xhr = new XMLHttpRequest(); 
xhr.open('get',"maladeParVille?", true); 
xhr.onload = function(){tableauMaladeParVille = JSON.parse(xhr.responseText) }
xhr.send();
window.setTimeout(resetmv,1000)
	function resetmv(){
		for (let i=0;i<tableauMaladeParVille.length;i++){
			stringMaladeParVille+="<tr><td>"+tableauMaladeParVille[i].CodeP+"</td><td>"+tableauMaladeParVille[i].villeName+"</td><td>"+tableauMaladeParVille[i].nbrPersonnes+"</td></tr>";
		}
	document.getElementById("tbodyNombreMaladesParVille").innerHTML = stringMaladeParVille;
	}
}
