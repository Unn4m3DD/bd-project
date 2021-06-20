DROP PROCEDURE insert_user;
GO
CREATE PROCEDURE insert_user
  @username varchar(128),
  @passwd varchar(64)
AS
DECLARE @salt char(64);


-- Generate the salt
DECLARE @seed int;
DECLARE @current_time DATETIME;

SET @current_time = GETDATE();
SET @seed = (DATEPART(hh, @current_time) * 10000000) + (DATEPART(n, @current_time) * 100000) 
      + (DATEPART(s, @current_time) * 1000) + DATEPART(ms, @current_time);
SET @salt = CHAR(ROUND((RAND(@seed) * 94.0) + 32, 3));

INSERT INTO it2s_db.dbUser
values(@username, @salt, HASHBYTES('sha2_256', @passwd + @salt));
GO
