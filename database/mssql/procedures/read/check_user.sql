drop function it2s_db.check_user;
GO
create function it2s_db.check_user(
  @username varchar(128),
  @passwd_in varchar(64)
) returns int
AS
BEGIN
  DECLARE @hashed_passwd binary(32);
  DECLARE @salt char(64);
  DECLARE @hashed_passwd_in binary(32);
  set @hashed_passwd = (select password
  from it2s_db.dbUser
  where normalized_username = @username);
  set @salt = (select salt
  from it2s_db.dbUser
  where normalized_username = @username);
  set @hashed_passwd_in = (select HASHBYTES('sha2_256',@passwd_in + @salt));
  if(Exists(Select *
  from it2s_db.dbUser
  where normalized_username = @username))
  if(@hashed_passwd_in = @hashed_passwd)
    return 1;
  return 0;
END
GO
