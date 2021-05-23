ALTER PROCEDURE "DBA"."proc_personnesPositivesList"( /* [IN | OUT | INOUT] nom_paramètre type_paramètre [DEFAULT valeur_par_défaut], ... */ )
/* RESULT( nom_colonne type_colonne, ... ) */
BEGIN
    call sa_set_http_header( 'Content-Type', 'text/html' );
    Call sa_set_http_header('Access-Control-Allow-Origin', '*');	
select list('<tr><td>'|| tbmembres.membresId ||'</td><td>'||DBA.tbmembres.prenom ||'</td><td>'||DBA.tbmembres.nom ||'</td><td>'||dateNaissance||'</td><td>'||'oui' ||'</td></tr>','' )
    from tbmembres 
     where DBA.tbmembres.resulTest = 'oui' and DATEDIFF(day, DBA.tbmembres.dateTest , getdate()) <= 15
END

CREATE SERVICE "personnesPositivesList" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call proc_personnesPositivesList()
