ALTER PROCEDURE "DBA"."proc_maladeParVille"()
BEGIN
	call sa_set_http_header( 'Content-Type', 'text/html' );
    Call sa_set_http_header('Access-Control-Allow-Origin', '*');		
    select count(distinct tbmembres.membresId)as nbrPersonnes,tbvilles.CodeP,villeName from tbvilles join tbvisite join tbmembres 
    where DBA.tbmembres.resulTest = 'oui' and DATEDIFF(day, DBA.tbmembres.dateTest , getdate()) <= 15 
    group by tbvilles.CodeP ,villeName
END

CREATE SERVICE "maladeParVille" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call proc_maladeParVille()
