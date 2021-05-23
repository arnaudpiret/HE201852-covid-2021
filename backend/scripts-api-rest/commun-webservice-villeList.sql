CREATE PROCEDURE "DBA"."proc_villeList"()
BEGIN    
    call sa_set_http_header( 'Content-Type', 'text/html' );
    Call sa_set_http_header('Access-Control-Allow-Origin', '*');
	  select* from tbvilles ORDER BY  villeName asc;

END


/******************************************/
CREATE SERVICE "villeList" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call proc_villeList();
