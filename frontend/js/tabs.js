"use strict";

/* Sript pour gÃ©rer le changement de tab
 *
 */

/* ******* CONSTANTES ET VARIABLES GLOBALES ******** */

// Permet de connaire l'id de la section Ã  afficher en fonction de l'id du tab cliquÃ©
const LIENS_TAB_SECTION = {
    tabAffichageResume : "affichageResume",
    tabVisitesVilles : "visitesVilles",
    //tabRecherchePersonnes : "recherchePersonnes",
    tabPersonnes : "personnes",
    tabVilles : "villes"
}


// mÃ©morise la tab actuelle
// initialisÃ©e Ã  "tabPersonnes" par dÃ©faut
let idTabActuel = "tabVilles"; 



/* ******* main ***************** */

// Une fois la page chargÃ©e, initialise les tabs
document.addEventListener("DOMContentLoaded", initTabs);


/**
 * Sert Ã  initialiser l'onglet par dÃ©faut.
 * Se base sur la variable globale "idTabActuel", dont la valeur initiale sert de valeur par dÃ©faut
 * Pas de paramÃ¨tres.
 * Pas de retour.
 */
function initTabs() {
    document.getElementById(LIENS_TAB_SECTION[idTabActuel]).style.display = "block";
    document.getElementById(idTabActuel).classList.add("active");
}

/**
 * Entraine un changement d'onglet
 * Le contenu de l'onglet prÃ©cÃ©dent sera cachÃ© et l'onglet prÃ©cÃ©dent ne sera plus actif.
 * Le contenu du nouvel onglet sera affichÃ© et le nouvel onglet sera actif (pour le mettre en Ã©vidence en couleur).
 * La variabe globale "idTabActuel" est utilisÃ©e pour savoir quel onglet ne plus afficher, puis elles est mise Ã  jour avec le nouveau.
 * L'onglet actuel est reÃ§u en paramÃ¨tre et son id est utilisÃ©.
 * La constante LIENS_TAB_SECTION est utilisÃ©e pour retrouver les id des contenu des onglets, sur base des id des onglets.
 * 
 * Pas de retour
 * @param {HTMLElement} tabButton - le bouton qui a enclenchÃ© le changement de tab
 */
function changerTab(tabButton) {
    //console.log(tabButton);
    // cache le tab actuel
    document.getElementById(LIENS_TAB_SECTION[idTabActuel]).style.display = "none";
    document.getElementById(idTabActuel).classList.remove("active");

    // affiche le tab demandÃ©
    document.getElementById(LIENS_TAB_SECTION[tabButton.id]).style.display = "block";
    document.getElementById(tabButton.id).classList.add("active");

    // mÃ©morise le nouveau tab actuel
    idTabActuel = tabButton.id;
}
