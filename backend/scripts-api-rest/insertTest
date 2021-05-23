ALTER PROCEDURE "DBA"."proc_InsertTest"(in personne INTEGER  , in resultat char(10), in datedutest date)
BEGIN
update tbmembres set resulTest= resultat ,dateTest = datedutest where membresId = personne 
END


CREATE SERVICE "insertTest" TYPE 'Raw' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' as call proc_InsertTest(personne = :personne,resultat = :resultat,datedutest = :datedutest)
