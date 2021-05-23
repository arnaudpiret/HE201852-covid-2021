ALTER PROCEDURE "DBA"."proc_InsertVisite"(in CP smallint,in mID integer ,in visitdate date)
BEGIN
	 call sa_set_http_header( 'Content-Type', 'text/html' );
    Call sa_set_http_header('Access-Control-Allow-Origin', '*');
    insert into dba.tbvisite(CodeP,membresId,dateVisite) values (CP,mID,visitdate);
END


CREATE SERVICE "InsertVisite' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call proc_InsertVisite(CP = :CP,mID = :mID,visitdate = :visitdate)
