CREATE PROCEDURE "DBA"."pro_InsertVille"(in CP smallint, in VillN char(50))
/* RESULT( nom_colonne type_colonne, ... ) */
BEGIN    
    call sa_set_http_header( 'Content-Type', 'text/html' );
    Call sa_set_http_header('Access-Control-Allow-Origin', '*');
	insert into dba.tbvilles(CodeP,villeName) VALUES (CP,VillN);
END

/*******************************************************/
CREATE SERVICE "initialiser" TYPE 'Raw' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call pro_InsertVille(CP = :CP,VillN = :VillN);
