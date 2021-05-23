ALTER PROCEDURE "DBA"."proc_nombreTesté"( )

BEGIN
	call sa_set_http_header( 'Content-Type', 'text/html' );
    Call sa_set_http_header('Access-Control-Allow-Origin', '*');
 select count(*)from dba.tbmembres where DATEDIFF(day, DBA.tbmembres.dateTest , getdate()) <= 15 and resulTest is not null
END
CREATE SERVICE "nombreTeste" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call proc_nombreTesté()
