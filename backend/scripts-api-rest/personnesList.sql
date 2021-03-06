ALTER PROCEDURE "DBA"."proc_personnesList"()
/* RESULT( nom_colonne type_colonne, ... ) */
BEGIN
	call sa_set_http_header( 'Content-Type', 'text/html' );
    Call sa_set_http_header('Access-Control-Allow-Origin', '*');	
select list('<tr><td>'|| tbmembres.membresId ||'</td><td>'||DBA.tbmembres.prenom ||'</td><td>'||DBA.tbmembres.nom ||'</td><td>'||dateNaissance||'</td><td class="testCov">'||'non' ||'</td></tr>','' )
    from tbmembres 
       where DATEDIFF(day, DBA.tbmembres.dateTest , getdate()) >= 15 or DBA.tbmembres.resulTest = 'non' or DBA.tbmembres.resulTest is null 

END

CREATE SERVICE "personnesList" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call proc_personnesList()
