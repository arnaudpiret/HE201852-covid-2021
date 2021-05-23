ALTER PROCEDURE "DBA"."proc_InsertPersonne"(in pren char(50),in nomP char(50),in dateNess date, in sex char(1))

BEGIN
    call sa_set_http_header( 'Content-Type', 'text/html' );
    Call sa_set_http_header('Access-Control-Allow-Origin', '*');
    insert into dba.tbmembres(prenom,nom,dateNaissance,sexe) values (pren,nomP,dateNess,sex);
END



CREATE SERVICE "insertPersonne" TYPE 'Raw' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' as call dba.proc_InsertPersonne(pren = :pren,nomP = :nomP,dateNess = :dateNess,sex = :sex)
