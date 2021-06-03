DROP PROCEDURE get_notification_count;
GO
CREATE PROCEDURE get_notification_count
AS
BEGIN
  select
    count(*) as [value]
  from notifications;
END 